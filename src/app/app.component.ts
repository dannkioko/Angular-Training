import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'ng-hotell-app';
  allow = false;
  onClick(event: Event){
    this.name = (<HTMLInputElement>event.target).value;
  }
}
