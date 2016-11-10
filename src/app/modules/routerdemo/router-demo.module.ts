import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterDemoRoutingModule } from "./router-demo-routing.module";

import { RouterDemoComponent } from './router-demo.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';

import { UserService } from "./services/user.service";

@NgModule({
  imports:      [
    CommonModule,
    RouterDemoRoutingModule
  ],
  declarations: [RouterDemoComponent, AdminComponent, UserComponent],
  providers:    [UserService]
})
export class RouterDemoModule {
}
