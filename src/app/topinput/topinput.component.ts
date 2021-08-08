import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Server } from '../server/model/server.model';

@Component({
  selector: 'app-topinput',
  templateUrl: './topinput.component.html',
  styleUrls: ['./topinput.component.css']
})
export class TopinputComponent implements OnInit {
  @Output() servercreate = new EventEmitter<{name: string, desc: string}>();
  @Output() blueprintCreate = new EventEmitter<{name: string, desc: string}>();
  servername = "";
  serverdesc = "";
  constructor() {
  }

  ngOnInit(): void {
  }

addServer(){
  this.servercreate.emit({name: this.servername, desc: this.serverdesc});
}
addBlueprint(){
  this.blueprintCreate.emit({name: this.servername, desc: this.serverdesc});
}

}
