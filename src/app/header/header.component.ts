import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  config:any;
  constructor() { 
    this.config=environment.API;
  }

  ngOnInit() {
  }
  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
}
