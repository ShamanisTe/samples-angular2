import { NgModule, OpaqueToken, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppServiceService } from "../../services/app-service.service";

import { CommentsService } from "./services/comments.service";
import { CommentsNewService } from "./services/comments-new.service";

import { ConfigApp, prodConfig, devConfig } from "./models/config";
import { MinimalCommentsService } from "./models/minimal-comments";
import { MESSAGE, MsgOpaqueToken } from "./models/msg-opaque-token";


import { ProvidersdemoComponent } from './components/providersdemo/providersdemo.component';
import { ProvidersDemoFirstComponent } from './components/providersdemofirst/providers-demo-first.component';
import { ProvidersdemosecondComponent } from './components/providersdemosecond/providersdemosecond.component';

@NgModule({
  imports: [
    CommonModule
  ],
  
  providers:    [
    // Test import AppServiceService (already provide in AppModule)
    AppServiceService,
    
    // bind provider and target specific class
    {provide: CommentsService, useClass: CommentsService},
    // {provide: CommentsService, useClass: CommentsNewService}, // usefull for replace old Service without change all injection or switch between multiple implements (ws, mock, database etc..)
    
    // Custom provide by string naming and string value
    {provide: 'TITLE', useValue: 'some value for title'},
    
    // TODO not working with ng-xi18n
    // Custom provide by OpaqueToken and string value
    //{provide: MESSAGE, useValue: new MsgOpaqueToken()},
    
    // provide by ES6 class with value
    {provide: ConfigApp, useValue: true ? prodConfig : devConfig},
    
    // Limit method from CommentsService by an ES6 abstract class
    {provide: MinimalCommentsService, useExisting: CommentsService},
  
  ],
  declarations: [ProvidersDemoFirstComponent, ProvidersdemosecondComponent, ProvidersdemoComponent]
})
export class ProvidersDemoModule {
  
  
  
}


