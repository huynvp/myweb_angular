import { Component, OnInit } from '@angular/core';
import { ApiDocDetailService } from './api_doc_detail.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-api-doc-detail',
  templateUrl: './api_doc_detail.component.html',
  styleUrls: ['./api_doc_detail.component.css'],
  providers: [ ApiDocDetailService ]
})
export class ApiDocDetailComponent implements OnInit {
  public data = [];
  public id:number;
  constructor(private route:ActivatedRoute, private api_doc_detail_service:ApiDocDetailService) { 

  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.api_doc_detail_service.getDetailProject(this.id)
    .then(res => {
      this.data = res['data'];
    })
    .catch(err => {
      console.log(err);
    });
  }
}
