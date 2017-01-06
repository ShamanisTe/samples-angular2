import { Component, OnInit } from '@angular/core';
import { TranslateService } from "ng2-translate";
import { I18nngComponent } from "../i18nng/i18nng.component";

@Component({
  selector: 'app-i18nocombe',
  templateUrl: './i18nocombe.component.html',
  styleUrls: ['./i18nocombe.component.css']
})
export class I18nocombeComponent implements OnInit {
  
  msgTranslate: string;
  nbPersons:number = 0;
  
  constructor(private _translationService: TranslateService) {  }

  ngOnInit() {
    this.nbPersons = Math.floor(Math.random() * 5);
    this._translationService.setDefaultLang('fr');
    this._translationService.use('fr');
    
    this._translationService.get('information').subscribe((res: string) => {
      this.msgTranslate = res;
    });
  }

}
