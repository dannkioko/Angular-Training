import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topinput',
  templateUrl: './topinput.component.html',
  styleUrls: ['./topinput.component.css']
})
export class TopinputComponent implements OnInit {

  servername: string = "";

  constructor() {}

  ngOnInit(): void {
  }

}
