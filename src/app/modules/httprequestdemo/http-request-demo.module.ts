import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpRequestDemoComponent } from './http-request-demo.component';
import { HttpHelperService } from "./http-helper.service";

@NgModule({
  imports:      [
    CommonModule,
    HttpModule
  ],
  declarations: [HttpRequestDemoComponent],
  
  providers: [HttpHelperService],
  exports:   [HttpRequestDemoComponent]
})
export class HttpRequestDemoModule {
}
