import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-nyr',
  templateUrl: './nyr.component.html',
  styleUrls: ['./nyr.component.css']
})
export class NyrComponent implements OnInit {

  config:any;
  constructor() { 
    this.config=environment.API;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
