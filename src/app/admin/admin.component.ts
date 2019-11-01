import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DatePipe } from '@angular/common';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { BaseComponent } from 'src/shread/base.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [
  ]
})
export class AdminComponent extends BaseComponent implements OnInit{
  permisisons: any;
  constructor(public router: Router, public http: HttpClient) { 
    super(router, http);
  }

  async ngOnInit() {
    await super.ngOnInit();
  }
}
