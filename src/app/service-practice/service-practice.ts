import { Component, OnInit } from '@angular/core';
import { ServicePracticeComponent } from '../service-practice-component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-practice',
  imports: [CommonModule,FormsModule],
  templateUrl: './service-practice.html',
  styleUrl: './service-practice.css',
})
export class ServicePractice implements OnInit {
  api_data:any;
constructor(private _service: ServicePracticeComponent){
}
ngOnInit():void {
  this.getPhotos()
}
getPhotos(){
    this._service.getPhotodetails().subscribe(res1=>{
      this.api_data=res1

    })
}
}
