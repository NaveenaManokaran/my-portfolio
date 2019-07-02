import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-operational',
  templateUrl: './operational.component.html',
  styleUrls: ['./operational.component.css']
})
export class OperationalComponent implements OnInit {

  config:any;
  constructor() { 
    this.config=environment.API;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
