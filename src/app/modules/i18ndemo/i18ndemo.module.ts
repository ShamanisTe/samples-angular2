import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18ndemoRoutingModule} from "./i18ndemo-routing.module";
import { I18ndemoComponent } from './i18ndemo.component';
import { I18nngComponent } from './components/i18nng/i18nng.component';
import { I18nocombeComponent } from './components/i18nocombe/i18nocombe.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from "ng2-translate";
import { HttpModule, Http } from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    I18ndemoRoutingModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  declarations: [I18ndemoComponent, I18nngComponent, I18nocombeComponent]
})
export class I18ndemoModule { }


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}