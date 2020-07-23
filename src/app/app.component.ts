import { Component } from '@angular/core';
import {DataServiceService} from './services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData = {
    firstName:'',
    lastName:'',
    email:'',
    description:''
  }
  submitted = false;

  constructor(private dataService:DataServiceService) {}

  ngOnInit() {}

  saveData() {
    const data = {
    firstName:this.userData.firstName,
    lastName:this.userData.lastName,
    email:this.userData.email,
    description:this.userData.description
    }
  

  this.dataService.create(data)
  .subscribe(
    response => {
      console.log(response)
      this.submitted = true
    },
    error => {
      console.log(error)
    }
  )
}
newData() {
  this.submitted = false;
  this.userData = {
    firstName:'',
    lastName:'',
    email:'',
    description:''
  }
}
}
