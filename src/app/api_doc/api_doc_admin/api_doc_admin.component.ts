import { Component, OnInit } from '@angular/core';
import { ApiDocAdminService } from './api_doc_admin.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-api-doc',
  templateUrl: './api_doc_admin.component.html',
  styleUrls: ['./api_doc_admin.component.css'],
  providers: [ ApiDocAdminService ]
})
export class ApiDocAdmiComponent implements OnInit {
  private project_check = '';
  private project_list : any;
  private project_detail:any;
  private content='';

  public editor_params = ClassicEditor;
  public editor_response = ClassicEditor;

  constructor(private api_doc_admin_service:ApiDocAdminService) { 
  }

  ngOnInit() {
    this.api_doc_admin_service.getAllProject()
    .then(res => {
      console.log(res);
      this.project_list = res['data'];
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleShowProject() {
    this.api_doc_admin_service.getDetailProject(this.project_check)
    .then(res => {
      this.project_detail = res['data'];
    })
    .catch(err => {
      console.log(err);
    });
  }
}
