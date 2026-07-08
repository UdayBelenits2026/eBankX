import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Signals {
  normalcounter=0;
  counter=signal(0)
  onIncrement(){
    this.counter.update(initvale=>initvale+1)
  }
  constructor(){
    // this.counter.set(30)
    setTimeout(()=>{
      this.normalcounter=50
      console.log("counter value=>"+ this.counter());
    },5000)
  }

}
