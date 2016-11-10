import { Component, OnInit } from '@angular/core';

import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todo';

import { TodoFormSubmitEventArgs } from '../todo-form/todo-form.component';
import { TodoChangeEventArgs, TodoDeleteEventArgs } from '../todo/todo.component';

@Component({
  selector:    'todos-list',
  templateUrl: './list.component.html',
  styleUrls:   ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  todos: Todo[];
  
  constructor( private todosService: TodosService ) {
    
  }
  
  ngOnInit() {
    this.todos = this.todosService.getTodos();
  }
  
  /**
   * Event from todo-form-component when todo added
   * 
   * @param {TodoChangeEventArgs} event
   * 
   * @memberOf ListComponent
   */
  onTodoFormSubmit( event: TodoFormSubmitEventArgs ) {
    console.log("onTaskFormSubmit=", event);
    
    this.todos.push(event.todo);
    this.todosService.saveTodos(this.todos);
  }
  
  /**
   * Event from todo-component fire when todo changed
   *
   * @param {TodoChangeEventArgs} event
   *
   * @memberOf ListComponent
   */
  onTodoChange( event: TodoChangeEventArgs ) {
    console.log("onTodoChange=", event);
    
    this.todosService.saveTodos(this.todos);
    
  }
  
  /**
   * Event from todo-component fire when todo deleted
   *
   * @param {TodoDeleteEventArgs} event
   *
   * @memberOf ListComponent
   */
  onTodoDelete( event: TodoDeleteEventArgs ) {
    console.log("onTodoDelete=", event);
    
    this.todos = this.todos.filter(todo => event.todoId !== todo.id);
    this.todosService.saveTodos(this.todos);
  }
}

