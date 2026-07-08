import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactUser } from '../react-user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-driven-forms.html',
  styleUrl: './template-driven-forms.css',
})
export class TemplateDrivenForms {
  userObject: ReactUser = { firstname: '',
    lastname: '',
    email: '',
    password: '',
    ischecked:''
  };
  onSubmit(userForm:NgForm){
    console.log(userForm.value)
  }

}
