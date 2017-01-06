import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// local components
import { AsideComponent } from './components/aside/aside.component';
import { LandingComponent } from './components/landing/landing.component';

// local from another module (import in AppModule)
import { HttpRequestDemoComponent } from './modules/httprequestdemo/http-request-demo.component';
import { ProvidersdemoComponent } from './modules/providersdemo/components/providersdemo/providersdemo.component';

export const routes: Routes = [

  // route with local components
  {path: '', component: AsideComponent, outlet: 'aside'},
  {path: '', component: LandingComponent},

  // route with components from another (import in AppModule)
  {path: 'request', component: HttpRequestDemoComponent},
  {path: 'providers', component: ProvidersdemoComponent},

  // lazy loading for TodosModule
  {path: 'todos', loadChildren: './modules/todos/todos.module#TodosModule'},
  
  // lazy loading for RouterDemoModule
  {path: 'router', loadChildren: './modules/routerdemo/router-demo.module#RouterDemoModule'},

  // lazy loading for FormdemoModule
  {path: 'form', loadChildren: './modules/formdemo/formdemo.module#FormdemoModule'},
  
  // lazy loading for FormdemoModule
  {path: 'i18n', loadChildren: './modules/i18ndemo/i18ndemo.module#I18ndemoModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
