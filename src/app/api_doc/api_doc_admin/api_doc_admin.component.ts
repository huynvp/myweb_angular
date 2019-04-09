import { Component, OnInit } from '@angular/core';
import { ApiDocAdminService } from './api_doc_admin.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-api-doc',
  templateUrl: './api_doc_admin.component.html',
  styleUrls: ['./api_doc_admin.component.css'],
  providers: [ ApiDocAdminService ]
})
export class ApiDocAdmiComponent implements OnInit {
  public project_check = '';
  public project_list : any;
  public project_detail:any;

  public txt_project = '';
  
  public content='';
  public params='';
  public response='';
  public method='';
  public name='';

  public editor_content = ClassicEditor;
  public editor_params = ClassicEditor;
  public editor_response = ClassicEditor;

  public id_edit='';
  public content_edit='';
  public params_edit='';
  public response_edit='';
  public method_edit='';
  public name_edit='';

  public editor_content_edit = ClassicEditor;
  public editor_params_edit = ClassicEditor;
  public editor_response_edit = ClassicEditor;

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

  handleAddApi() {
    this.api_doc_admin_service.addApi(this.project_check, this.method, this.name, this.content, this.params, this.response)
    .then(res => {
      console.log(res);
      this.handleShowProject();
      Swal.fire('Success', 'Add api success', 'success');
    })
    .catch(err => {
      console.log(err);
      Swal.fire('Error', 'Add api err', 'error');
    });
  }

  handleAddProject() {
    this.api_doc_admin_service.addProject(this.txt_project)
    .then(res => {
      console.log(res);
      Swal.fire('Success', 'Add project success', 'success');
      this.ngOnInit();
    })
    .catch(err => {
      console.log(err);
      Swal.fire('Error', 'Add project err', 'error');
    })
  }

  handleShowOneApi(id) {
    this.api_doc_admin_service.getOneApi(id)
    .then(res => {
      let data = res['data'][0];
      this.method_edit = data.api_method;
      this.content_edit = data.api_content;
      this.name_edit = data.api_name;
      this.params_edit = data.api_params;
      this.response_edit = data.api_response;
      this.id_edit = data.api_id;
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleEditApi() {
    this.api_doc_admin_service.editApi(this.id_edit, this.method_edit, this.name_edit, this.content_edit, this.params_edit, this.response_edit)
    .then(res => {
      Swal.fire('Success', 'Edit api success', 'success');
      this.handleShowProject();
    })
    .catch(err => {
      console.log(err);
      Swal.fire('Error', 'Edit api err', 'error');
    });
  }

  handleDeleteApi(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be delete this work?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.api_doc_admin_service.deleteApi(id)
        .then(res => {
          Swal.fire('Success', 'Delete api success', 'success');
          this.handleShowProject();
        })
        .catch(err => {
          console.log(err);
          Swal.fire('Error', 'Delete api err', 'error');
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    
    
  }

}
