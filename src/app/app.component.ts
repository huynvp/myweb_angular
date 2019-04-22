import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ]
})
export class AppComponent implements OnInit{
  title = 'myweb';
  private time:any;
  private subcCription:any;

  constructor(private app_service:AppService) {
  }

  ngOnInit() {
    // let that = this;
    // this.time = setInterval(() => {
    //   this.subcCription = that.app_service.refreshToken()
    //   .subscribe(data => {
    //     console.log(data);
    //   });
      // .then(res => {
      //   localStorage.token = res['data']['token'];
      // })
      // .catch(err => {
      //   console.log(err)
      // });
    // }, 1000);
  }

  ngOnDestroy() {
    // clearInterval(this.time);
    // if (this.subcCription) {
    //     this.subcCription.unsubscribe();
    // }
  }
}
