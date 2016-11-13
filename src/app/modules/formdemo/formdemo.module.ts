import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormdemoRoutingModule } from './formdemo-routing.module';

import { FormdemoComponent } from './formdemo.component';
import { TemplatedrivenComponent } from './components/templatedriven/templatedriven.component';
import { Templatedriven2Component } from './components/templatedriven2/templatedriven2.component';
import { LastnameValidator } from './lastname.validator';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormdemoRoutingModule
  ],
  declarations: [FormdemoComponent, TemplatedrivenComponent, Templatedriven2Component, LastnameValidator]
})
export class FormdemoModule { }
