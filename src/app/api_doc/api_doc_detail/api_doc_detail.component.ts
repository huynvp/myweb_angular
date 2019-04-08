import { Component, OnInit } from '@angular/core';
import { ApiDocDetailService } from './api_doc_detail.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-api-doc-detail',
  templateUrl: './api_doc_detail.component.html',
  styleUrls: ['./api_doc_detail.component.css'],
  providers: [ ApiDocDetailComponent ]
})
export class ApiDocDetailComponent implements OnInit {
  private data = [];
  private id:number;
  constructor(private route:ActivatedRoute) { 

  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    alert(this.id)
  }
}
