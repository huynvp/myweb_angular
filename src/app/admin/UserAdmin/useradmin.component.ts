import { Component, OnInit } from '@angular/core';
import { UserAdminService } from './useradmin.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from "sweetalert2";

@Component({
  selector: 'app-todolist',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.css'],
  providers: [
    UserAdminService
  ]
})
export class UserAdminComponent implements OnInit {
  constructor(private user:UserAdminService, private router:Router) { 
    
  }

  ngOnInit() {
    
  }
}
