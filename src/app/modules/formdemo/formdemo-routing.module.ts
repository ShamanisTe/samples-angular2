import { NgModule }            from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';
import { FormdemoComponent } from './formdemo.component';

import { TemplatedrivenComponent } from './components/templatedriven/templatedriven.component';
import { Templatedriven2Component } from './components/templatedriven2/templatedriven2.component';

const routes: Routes = [
  {
    path:      '',
    component: FormdemoComponent,
    children:  [
      {
        path: '',
        component: TemplatedrivenComponent
      },
      {
        path:      'templatedriven',
        component: TemplatedrivenComponent
      },
      {
        path:      'templatedriven2',
        component: Templatedriven2Component
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormdemoRoutingModule {

}
