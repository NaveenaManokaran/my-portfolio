import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-agile',
  templateUrl: './agile.component.html',
  styleUrls: ['./agile.component.css']
})

export class AgileComponent implements OnInit {
  config : any;
  constructor() { 
    this.config=environment.API;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
