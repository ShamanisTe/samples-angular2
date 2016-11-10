import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Todo } from '../../models/todo';

/**
 * EventArgs for event "todoFormSubmit"
 * 
 * @export
 * @interface TodoFormSubmitEventArgs
 */
export interface TodoFormSubmitEventArgs {
  todo: Todo;
}

@Component({
  selector:    'todos-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls:   ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  
  @Output() todoFormSubmit: EventEmitter<TodoFormSubmitEventArgs> = new EventEmitter<TodoFormSubmitEventArgs>();
  @ViewChild('todoForm') todoForm: NgForm;
  todo: Todo;
  
  constructor() {
  }
  
  ngOnInit() {
    this.initTodoForm();
  }
  
  /**
   * init todo for form
   * 
   * 
   * @memberOf TodoFormComponent
   */
  initTodoForm() {
    this.todo = new Todo(Math.random(), "");
  }
  
  /**
   * reinit todo for form and notify parent component
   * 
   * @param {any} event
   * 
   * @memberOf TodoFormComponent
   */
  onTodoFormSubmit( event ) {
    console.log("onTaskFormSubmit=", event);
    console.log(this.todoForm);
    
    this.todoFormSubmit.emit({
      todo: this.todo
    });
    
    this.initTodoForm();
  }
}
