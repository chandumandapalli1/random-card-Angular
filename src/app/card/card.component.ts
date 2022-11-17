import { Component, OnInit,Input } from '@angular/core';

import {    faEnvelope,
            faMapMarkedAlt
            ,faPhone,
            faDatabase} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  //since this user:any is accepted from parent class called app.component.ts 
  // here input parameter in import {} and @ input () decorator are to be added ...

  @Input() user:any;

//making variables out of them 
  faEnvelope=faEnvelope;
  faMapMarkedAlt=faMapMarkedAlt;
  faPhone= faPhone;
  faDatabase=faDatabase;




  constructor() { }

  ngOnInit(): void {
  }

}
