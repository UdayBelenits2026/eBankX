import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Serviceprofile } from '../serviceprofile';

@Component({
  selector: 'app-profile-service',
  imports: [FormsModule, CommonModule],
  templateUrl: './profile-service.html',
  styleUrls: ['./profile-service.css'],
})
export class ProfileService implements OnInit {
  dummydata: any;
  isEligible:any;
  api_data:any;
  constructor(private _service: Serviceprofile) {
    this.dummydata = this._service.userdata;
    this.isEligible=this._service.isEligibleForSubscription()
    
  }
  
  ngOnInit(): void {
   this.getUser()
  }
  getUser(){
    this._service.getUserDetails().subscribe(res=>{
      this.api_data=res

    })
  }

  // userdata={
  //   id:1,
  //   name:"Uday Kiran",
  //   Username: "UdayK03",
  //   email: "udy@gmail.com"
  // }
}
