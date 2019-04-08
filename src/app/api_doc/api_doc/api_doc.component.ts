import { Component, OnInit } from '@angular/core';
import { ApiDocService } from './api_doc.service';
@Component({
  selector: 'app-api-doc',
  templateUrl: './api_doc.component.html',
  styleUrls: ['./api_doc.component.css'],
  providers: [ ApiDocService ]
})
export class ApiDocComponent implements OnInit {
  private data = [];
  constructor(private api_doc_service:ApiDocService) { 

  }

  ngOnInit() {
    this.api_doc_service.showProject()
    .then(res => {
      this.data = res['data'];
    })
    .catch(err => {

    });
  }
}
