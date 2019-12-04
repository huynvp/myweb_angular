import { Component, OnInit } from '@angular/core';
import { UserAdminService } from '../../../UserAdmin/useradmin.service';
import { NgxSpinnerService } from "ngx-spinner";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DatePipe, Location } from '@angular/common';
import Swal from "sweetalert2";
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseComponent } from 'src/shread/base.component';
import { environment } from 'src/environments/environment';

declare var $: any;

@Component({
  selector: 'log-detail-user-admin',
  templateUrl: './logDetail.html',
  styleUrls: ['./logDetail.component.css'],
  providers: [
    UserAdminService
  ]
})
export class LogDetailComponent extends BaseComponent implements OnInit {
  dataTable: any;
  checkStatus = 0;
  txtAddName: string;
  loadTable: boolean = true;
  id: any;
  id_arr: any = [];

  constructor(public router: Router, 
              public http: HttpClient, 
              private user: UserAdminService,
              private activatedRoute: ActivatedRoute, 
              private location: Location,
              private spinner: NgxSpinnerService) {
    super(router, http);
  }

  async ngOnInit() {
    await super.ngOnInit();
    this.activatedRoute.params.subscribe(param => {
      this.id = param.id;
    });
    this.DrawDataTable();
  }

  refreshTable() {
    this.dataTable.ajax.reload(null, false);
  }

  DrawDataTable() {
    const that = this;
    this.dataTable = $('#data_table_log').DataTable(
      {
        processing: true,
        serverSide: true,
        searching: true,
        paging: true,
        order: [],
        ajax: {
          url: environment.baseUrl + '/projectLogs/' + this.id + '/logs',
          headers: {
            'Authorization': `Bearer ${localStorage.access_token}`
          },
        },
        'drawCallback': function () {
          $('#data_table_log').addClass("table");
          $('#data_table_log').addClass("table-bordered");
          $('#data_table_log').addClass("table-hover");
          $('#data_table_log').addClass("table-striped");
          $('#data_table_log').children('thead').addClass('bg-info text-white');
          if (that.loadTable) {
            $('#data_table_log').on('click', '.check', function() {
              that.id_arr = [];
              const check_list = $('.check');
              if (check_list.length > 0) {
                  check_list.map((i, e) => {
                    if(e.checked == true)
                      that.id_arr.push(e.value);
                  });
              }
            });
            $('#data_table_log').on('click', '#checkAll', function() {
              that.id_arr = [];
              const check_list = $('.check');
              if($('#checkAll')[0].checked != false) {
                if (check_list.length > 0) {
                    check_list.map((i, e) => {
                        e.checked = true;
                        that.id_arr.push(e.value);
                    });
                }
              } else {
                  if (check_list.length > 0) {
                    check_list.map((i, e) => {
                        e.checked = false;
                    });
                }
              }
            });
          }
          that.loadTable = false;
        },
        columns: [
          // { data: 'id', name: 'id', 'title': 'ID' },
          { data: 'content', name: 'content', 'title': 'Content' },
          { data: 'type', name: 'type', 'title': 'Type' },
          { data: 'createdAt', name: 'created_at', 'title': 'Created At' },
          { title:'<input type="checkbox" id="checkAll" value="${row.id}">'}
        ],
        columnDefs: [
          // {
          //   'targets': 2,
          //   'render': function (data) {
          //     if(data == 1)
          //       return `<button class="btn btn-sm btn-success">Active</button>`;
          //     else 
          //       return `<button class="btn btn-sm btn-danger">Deactive</button>`;
          //   }
          // },
          {
            'targets': 2,
            'render': function (data) {
              return new Date(data).toLocaleDateString('en-GB') + " " + new Date(data).toLocaleTimeString('en-GB');
            }
          },
          {
            'targets': 3,
            orderable: false,
            'render': function(data, m, row) {
              return `<input type="checkbox" class="check" value="${row.id}">`;
            }
          }

        ]
      },
    );
  }

  deleteMuity() {
    Swal.fire(
      {
        title: 'Are you sure delete log checked?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
      }
    ).then(async (result) => {
      if (result.value) {
        this.spinner.show();
        $('#checkAll')[0].checked = false;
        await this.user.deleteLogs(this.id, this.id_arr)
        .then(data => {
          $.notify({
            message: data["message"],
          }, {
            type: 'success',
          });
        })
        .catch(err => {
          $.notify({
            message: err["error"]["message"],
          }, {
            type: 'danger',
          });
        })
        this.dataTable.ajax.reload(null, false);
        this.spinner.hide();
        ;
      }
    })
  }

  goBack() {
    this.location.back();
  }
}
