import { Component } from '@angular/core';
import { Server } from './server/model/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'ng-hotell-app';
  allow = false;
  servers: Server[] = [];
  onClick(event: Event){
    this.name = (<HTMLInputElement>event.target).value;
  }
  onServerAdded(eventData: {name: string, desc: string}){
    this.servers.push({servername: eventData.name, serverdesc: eventData.desc});
  }
}
