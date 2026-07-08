import { Component } from '@angular/core';
import { CommonModule,NgClass } from '@angular/common';
@Component({
  selector: 'app-attribute-directives',
  imports: [NgClass,CommonModule],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.css',
})
export class AttributeDirectives {
  // textcolor: string='text-success'
  // ChangeColor(color: string){
  //   this.textcolor=color;
  // }
  
}
