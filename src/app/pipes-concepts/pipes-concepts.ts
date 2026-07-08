import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustompipesPipe } from '../custompipes-pipe';
import { PurepipePipe } from '../purepipe-pipe';
import { ImpurePipePipe } from '../impure-pipe-pipe';

@Component({
  selector: 'app-pipes-concepts',
  imports: [CommonModule,CustompipesPipe,PurepipePipe,ImpurePipePipe],
  templateUrl: './pipes-concepts.html',
  styleUrl: './pipes-concepts.css',
})
export class PipesConcepts {
  MobileNumber:any="9282982987";
  AngularPipes: string="Hello its first time i am learning the pipes concept in angular."
  customer={
    Cid:27,
    Cname:"UdayKiran",
    Cage:21
  }
  currentDate: Date=new Date();
  fruits=of(["mango","Apple","Orange","Banana"]);
}
