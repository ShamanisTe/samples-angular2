import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18nng',
  templateUrl: './i18nng.component.html',
  styleUrls: ['./i18nng.component.css']
})
export class I18nngComponent implements OnInit {
  
  
  nbPersons:number = 0;
  constructor() { }
  
  ngOnInit() {
    this.nbPersons = Math.floor(Math.random() * 5);
  }
  
}