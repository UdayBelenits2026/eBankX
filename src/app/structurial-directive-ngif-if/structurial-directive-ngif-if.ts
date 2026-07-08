import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NforDirectiveFor } from '../nfor-directive-for/nfor-directive-for';


@Component({
  selector: 'app-structurial-directive-ngif-if',
  imports: [CommonModule, FormsModule,
    NforDirectiveFor,
  ],
  templateUrl: './structurial-directive-ngif-if.html',
  styleUrl: './structurial-directive-ngif-if.css',
})
export class StructurialDirectiveNgifIf {
  isChecked: boolean= false;
  isInput: boolean=true;
  input1: string='';
  input2: string='';
  onClick(){
    this.isChecked=!this.isChecked;
  }
showField(){
this.isInput=true
}
hideField(){
this.isInput=false;
}
}
