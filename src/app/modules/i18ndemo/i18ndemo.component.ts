import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18ndemo',
  templateUrl: './i18ndemo.component.html',
  styleUrls: ['./i18ndemo.component.css']
})
export class I18ndemoComponent implements OnInit {
  
  nbPersons:number = 0;
  constructor() { }

  ngOnInit() {
    this.nbPersons = Math.floor(Math.random() * 5);
  }

}
