import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-practice-reactive-forms',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './practice-reactive-forms.html',
  styleUrl: './practice-reactive-forms.css',
})
export class PracticeReactiveForms {

  ReactiveForm: FormGroup;

  constructor(private fg: FormBuilder) {

    this.ReactiveForm = this.fg.group({
      roleId: ['',[Validators.required,Validators.maxLength(3)]],
      rolename: ['',[Validators.pattern("^[a-zA-Z]+$")]],
      depart: ['',[Validators.maxLength(1)]],
      roledesc: ['',[Validators.maxLength(10)]],
      manager: ['',Validators.minLength(5)],
      address: this.fg.group({
        city: ['',[Validators.maxLength(6)]],
        state: ['',[Validators.minLength(10)]],
        pincode: ['',[Validators.maxLength(6)]]
      })
    });

  }

  OnSubmit() {
    console.log(this.ReactiveForm.value);
  }

}
 

  // constructor(){
  //   this.ReactiveForm= new FormGroup({
  //     roleId: new FormControl(""),
  //     rolename: new FormControl(""),
  //     depart: new FormControl(""),
  //     roledesc: new FormControl(""),
  //     manager: new FormControl(""),
  //    address: new FormGroup({
  //     city: new FormControl(""),
  //     state: new FormControl(""),
  //     pincode: new FormControl(),
  //    })
  //   })
  // }
  // OnSubmit(){
  //   console.log(this.ReactiveForm.value)
  // }
  // SetValues(){
  //   this.ReactiveForm.setValue({
  //     roleId: "2233",
  //     rolename: "frontend developer",
  //     depart: "Technical",
  //     roledesc: "Develop the user interface...",
  //     manager: "RamaKrishna",
  //     address:{
  //       city: "Hyderabad",
  //       state: "Telangana",
  //       pincode:898992,

  //     }
  //   })
  // }
  // ResetValues(){
  //   this.ReactiveForm.reset()
  // }

