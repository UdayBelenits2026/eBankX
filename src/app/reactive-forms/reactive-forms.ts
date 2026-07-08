import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  ReactiveForm:FormGroup;
  constructor(){
    this.ReactiveForm= new FormGroup({
      firstname: new FormControl(""),
      lastName: new FormControl(""),
      Email: new FormControl(""),
      password: new FormControl(""),
      isChecked: new FormControl(),
    })
  }
  OnSubmit(){
    console.log(this.ReactiveForm.value);
    
  }
}
