import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Serviceprofile } from '../serviceprofile';

@Component({
  selector: 'app-user-reg',
  imports: [RouterLink],
  templateUrl: './user-reg.html',
  styleUrls: ['./user-reg.css'],
})
export class UserReg implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy {
  dummydata: any;
  constructor(private router: Router, private _service: Serviceprofile) {
    this.dummydata = this._service.userdata;
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnchanges():void{
    console.log("1. ngOnChanged called-used for components input property");
    
  }
  ngOnInit():void{
    console.log("2.ngOnInit called- used for the api call")
  }
  ngDoCheck():void{
    console.log("Used of every change detection- 3.ngDoCheck")
  }
  ngAfterContentInit():void{
    console.log("4. ngAfterContentInit")

  }
  ngAfterContentChecked():void{
    console.log("5.ngAfterCOntentInit")
  }
  ngAfterViewInit():void{
    console.log("6.ngAfterViewInit")
  }
  ngAfterViewChecked():void{
    console.log("7.ngAfterViewInit")
  }
  ngOnDestroy(): void {
    console.log("8. ngOnDestroy")
  }
  LoginData() {
    // this.router.navigateByUrl('structure-div');
    this.router.navigate(["structure-div"])
  }
}
