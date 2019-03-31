import { Component } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { CommonServiceService } from './common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  object = [];

  request = {
    key1:null,
    key2:null
  }
  result:number=null;
  msg:string=null;

  constructor(private service: CommonServiceService) {
    //this.getData();
    //this. postData();
  }

  getData(){
      this.service.getData(this.request).subscribe((response:any)=> {
        console.log(response);
        this.result = response.result;
      })
  }

  postData(){
    this.service.postData(this.request).subscribe((response:any)=>{
      console.log(response);
      this.msg = response.msg;
      this.result = response.result;
    })
  }
}
