import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { HttpRequestDemoModule } from "./modules/httprequestdemo/http-request-demo.module";
import { ProvidersDemoModule } from "./modules/providersdemo/providers-demo.module";

import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { LandingComponent } from './components/landing/landing.component';

import { AppServiceService } from "./services/app-service.service";


import 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    LandingComponent
  ],
  imports:      [
    // first module load (bootstrapModule) need to import Browser
    BrowserModule,
    AppRoutingModule,
    HttpRequestDemoModule,
    ProvidersDemoModule
  ],
  providers:    [AppServiceService],
  bootstrap:    [AppComponent]
  
})
export class AppModule {
}
