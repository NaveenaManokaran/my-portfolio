import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  config:any;
  constructor() { 
    this.config=environment.API;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
