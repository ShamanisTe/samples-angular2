import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormdemoRoutingModule } from './formdemo-routing.module';

import { FormdemoComponent } from './formdemo.component';
import { TemplatedrivenComponent } from './components/templatedriven/templatedriven.component';
import { Templatedriven2Component } from './components/templatedriven2/templatedriven2.component';
import { ModeldrivenComponent } from './components/modeldriven/modeldriven.component';
// import { LastnameValidator } from './lastname.validator';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormdemoRoutingModule
  ],
  declarations: [FormdemoComponent, TemplatedrivenComponent, Templatedriven2Component, ModeldrivenComponent]
})
export class FormdemoModule { }
