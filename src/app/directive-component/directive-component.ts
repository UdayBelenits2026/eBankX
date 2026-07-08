import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';

@Component({
  selector: 'app-directive-component',
  imports: [NgIf,DataBinding],
  templateUrl: './directive-component.html',
  styleUrl: './directive-component.css',
})
export class DirectiveComponent {}
