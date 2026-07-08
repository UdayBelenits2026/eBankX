import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nfor-directive-for',
  imports: [CommonModule],
  templateUrl: './nfor-directive-for.html',
  styleUrl: './nfor-directive-for.css',
})
export class NforDirectiveFor {
  employees: any[]=[
    {empname: "Uday", empid:122,empmail:"uday@gmail.com", empdept: "Frontend"},
    {empname: "Akshay", empid:123,empmail:"aksh@gmail.com", empdept: "backend"},
    {empname: "Naresh", empid:124,empmail:"nare@gmail.com", empdept: "hr"},
    {empname: "Dinesh", empid:125,empmail:"din@gmail.com", empdept: "QA"}
]
companyList: string[]=["BelenITS","Jarvis","FacePrep","Synactive"]
}
