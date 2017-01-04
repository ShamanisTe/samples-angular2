import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { I18ndemoComponent } from "./i18ndemo.component";

const routes: Routes = [
  {
    path:      '',
    component: I18ndemoComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class I18ndemoRoutingModule {
  
}
