import { Component, OnInit } from '@angular/core';
import { UserAdminService } from '../useradmin.service';
import { NgxSpinnerService } from "ngx-spinner";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DatePipe } from '@angular/common';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseComponent } from 'src/shread/base.component';

@Component({
  selector: 'permission-user-admin',
  templateUrl: './permissionuseradmin.html',
  styleUrls: ['./permissionuseradmin.component.css'],
  providers: [
    UserAdminService
  ]
})
export class PermissionUserAdminComponent extends BaseComponent implements OnInit {
  permisisons: any;
  users: any;
  txtPermissionName: string;
  txtPermissionNameEdit: string;
  txtPermissionKeyEdit: string;
  txtPermissionCreatedEdit: string;
  txtPermissionUpdatedEdit: string;
  constructor(public router: Router, public http: HttpClient, private user: UserAdminService, private spinner: NgxSpinnerService) {
    super(router, http);
  }

  async ngOnInit() {
    super.ngOnInit();
    this.user.getPermission()
      .then(data => this.permisisons = data['data'])
      .catch(err => console.log(err));
  }

  resetInput() {
    this.txtPermissionName = "";
  }

  handleShowPermission(id:string) {
    this.user.getDetailPermission(id)
    .then(data => {
      this.txtPermissionNameEdit = data['data'][0]['name'];
      this.txtPermissionKeyEdit = data['data'][0]['key'];
      this.txtPermissionCreatedEdit = data['data'][0]['created_at'];
      this.txtPermissionUpdatedEdit = data['data'][0]['updated_at'];
    })
    .catch(err => console.log(err));
  }

  handleEditPermission() {
    this.spinner.show();
    this.user.getDetailPermission(this.txtPermissionKeyEdit)
    .then(data => {
      var timestamp = data['data'][0]['timestamp'];
      this.user.editPermission(this.txtPermissionKeyEdit, this.txtPermissionNameEdit, timestamp)
      .then(data => {
        Swal.fire('Update success!', data['message'], 'success')
        this.resetInput();
        this.ngOnInit();
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
    this.spinner.hide();
  }

  async handleAddPermission() {
    this.spinner.show();
    if(this.txtPermissionName == null) {
      Swal.fire('Request is invalid', "Name permission is required", 'error');
      this.spinner.hide();
      return;
    }
    this.user.addPermission(this.txtPermissionName)
      .then(data => {
        Swal.fire('Add success!', data['message'], 'success')
        this.resetInput();
        this.ngOnInit();
      })
      .catch(err => {
        console.log(err);
      });
    this.spinner.hide();
  }

  handleDeletePermission(id: string) {
    Swal.fire({
      title: 'Delete permission',
      text: 'Do you want delete this permission?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        this.user.deletePermission(id)
          .then(data => {
            this.ngOnInit();
            Swal.fire('Deleted!', data["message"], 'success');
          })
          .catch(err => {
            console.log(err);
            Swal.fire('Deleted!', 'Delete error, please check again', 'error');
          })
        this.spinner.hide();
      }
    });
  }

  handleDetailPermission(id: number) {
    this.user.detailPermission(id)
        .then(data => {
          console.log(data);
          this.users = data["data"];
        })
        .catch(err => {
          console.log(err);
          Swal.fire('Error!', 'Show detail error, please check again', 'error');
        });
  }
}
