import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counterValue: number;


  @Output() counterChange = new EventEmitter();

  constructor() {
    this.counterValue = 0;
  }

  @Input()
  set counter(value: number) {
    this.counterValue = value;
    this.counterChange.emit(value);
  }

  incCounter() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
    return false;
  }
  decCounter() {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  ngOnInit() {
  }

}
