import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serviceprofile {
  API_URL='https://jsonplaceholder.typicode.com/users';
  constructor(private _http:HttpClient){}
  getUserDetails(){
    return this._http.get(this.API_URL);
  }
    userdata={
    id:1,
    name:"Uday Kiran",
    Username: "UdayK03",
    email: "udy@gmail.com",
    Subscription:'base'
  }
  isEligibleForSubscription(){
    if(this.userdata.Subscription==='base' && this.userdata.email.endsWith('@gmail.com') ){
      return true;
    }else{
      return false;
    }
  }
}
