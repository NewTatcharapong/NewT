import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-workshop';

  score: number;
  name: string;

  student:any = {
    name: "Peter",
    studentID: "5921608220",
    weight: 68,
    height: 178
  }

  studentList = [
    {
      name: "Peter2",
      studentID: "5921608451",
      weight: 61,
      height: 172
    },
    {
      name: "Peter3",
      studentID: "5921601234",
      weight: 60,
      height: 168
    },
    {
      name: "Peter4",
      studentID: "5921605678",
      weight: 64,
      height: 175
    }
  ]

  constructor() {
    this.student.bmi = (this.student.weight/((this.student.height/100)*(this.student.height/100))).toFixed(2);
    this.studentList.map((object,index)=>{
      let obj:any = object;
      obj.bmi = (object.weight/((object.height/100)*(object.height/100))).toFixed(2);
      return obj;
    })
    console.log(this.studentList);

    this.studentList.forEach((object,index)=>{
        console.log(object);
        console.log(index);
        
        
    })
    
  }
}
