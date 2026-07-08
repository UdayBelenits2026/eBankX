import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
      providedIn: 'root'
})
export class ServicePracticeComponent {
    image_url='https://jsonplaceholder.typicode.com/photos';
    constructor(private _http:HttpClient){}
    getPhotodetails(){
       return this._http.get(this.image_url)
    }

}
