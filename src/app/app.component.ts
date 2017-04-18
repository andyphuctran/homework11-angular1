import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter exercise!';
  public componentCounterValue;

  showCounter(data) {
    this.componentCounterValue = data;
    console.log('showCounter: ' + data);
  }
}
