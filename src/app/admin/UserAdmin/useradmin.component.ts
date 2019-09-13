import { Component, OnInit } from '@angular/core';
import { UserAdminService } from './useradmin.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DatePipe } from '@angular/common';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { BaseComponent } from 'src/shread/base.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.css'],
  providers: [
    UserAdminService
  ]
})
export class UserAdminComponent extends BaseComponent implements OnInit{
  dtOptions: DataTables.Settings = {};
  constructor(public router: Router, public http: HttpClient, private user:UserAdminService) { 
    super(router, http);
  }

  async ngOnInit() {
    await super.ngOnInit();
    await this.user.getPermission()
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
  }
}
