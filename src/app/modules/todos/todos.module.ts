import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';

import { ListComponent } from './components/list/list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoComponent } from './components/todo/todo.component';

import { TodosService } from './services/todos.service';

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    TodosRoutingModule
  ],
  declarations: [ListComponent, TodoComponent, TodoFormComponent],
  providers:    [TodosService]
})
export class TodosModule {
}
