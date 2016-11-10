import { NgModule }            from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';
import { RouterDemoComponent } from "./router-demo.component";
import { UserComponent } from "./components/user/user.component";
import { AdminComponent } from "./components/admin/admin.component";
import { AuthAdminActivateGuard, ConfirmAdminDeactivateGuard } from "./services/admin.guard";

const routes: Routes = [
  {
    path:      '',
    component: RouterDemoComponent,
    children:  [
      {path: '', component: UserComponent},
      {
        path:      'user',
        component: UserComponent
      },
      {
        path:        'admin',
        component:   AdminComponent,
        // AuthAdminActivateGuard check if user is allow to navigate to this route
        canActivate: [AuthAdminActivateGuard],
        // ConfirmAdminDeactivateGuard confirm with user to change route when change happens
        canDeactivate: [ConfirmAdminDeactivateGuard]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[AuthAdminActivateGuard, ConfirmAdminDeactivateGuard]
})
export class RouterDemoRoutingModule {
}