import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18ndemoRoutingModule} from "./i18ndemo-routing.module";
import { I18ndemoComponent } from './i18ndemo.component';

@NgModule({
  imports: [
    CommonModule,
    I18ndemoRoutingModule
  ],
  declarations: [I18ndemoComponent]
})
export class I18ndemoModule { }
