import { Component } from '@angular/core';
import { CommonModule,NgSwitch } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-ngswitch-vs-switch',
  imports: [NgSwitch, CommonModule, FormsModule],
  templateUrl: './ngswitch-vs-switch.html',
  styleUrl: './ngswitch-vs-switch.css',
})
export class NgswitchVsSwitch {
  grade: number=0;
  set(x:number){
  this.grade=x
  }
  orderStatus:string='';
}
