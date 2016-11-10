import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';

/**
  * EventArgs for event "todoChange" 
 * 
 * @export
 * @interface TodoChangeEventArgs
 */
export interface TodoChangeEventArgs {
  todo: Todo;
}
/**
 * EventArgs for event "todoDelete"
 * 
 * @export
 * @interface TodoDeleteEventArgs
 */
export interface TodoDeleteEventArgs {
  todoId: number;
}

@Component({
  selector:    'todos-todo',
  templateUrl: './todo.component.html',
  styleUrls:   ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  @Input() todo: Todo;
  @Output() todoChange: EventEmitter<TodoChangeEventArgs> = new EventEmitter<TodoChangeEventArgs>();
  @Output() todoDelete: EventEmitter<TodoDeleteEventArgs> = new EventEmitter<TodoDeleteEventArgs>();
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
  /**
   * Key Event from div when content change 
   * 
   * @param {any} event
   * 
   * @memberOf TodoComponent
   */
  onTaskInput( event ) {
    
    console.log("onTaskInput=", this.todo, event.target.textContent);
    
    this.todo.task = event.target.textContent;
    
    this.todoChange.emit({
      todo: this.todo
    });
  }
  
  /**
   * Checkbox Event fire change done state change
   * 
   * 
   * @memberOf TodoComponent
   */
  onCheckboxChange() {
    
    console.log("onCheckboxChange=", this.todo);
    
    this.todo.isDone = !this.todo.isDone;
    this.todoChange.emit({
      todo: this.todo
    });
  }
  
  /**
   * Click Event when user click on html tag for add flag on todo
   * 
   * @returns
   * 
   * @memberOf TodoComponent
   */
  onImportantClick() {
    if (this.todo.isDone) {
      return false;
    }
    
    console.log("onImportantClick=", this.todo);
    
    this.todo.isImportant = !this.todo.isImportant;
    this.todoChange.emit({
      todo: this.todo
    });
  }
  
  /**
   * Click Event when user click on html tag for delete todo
   * 
   * @param {Todo} t
   * 
   * @memberOf TodoComponent
   */
  onDeleteClick( t: Todo ) {
    
    console.log("onDeleteClick=", this.todo);
    
    this.todoDelete.emit({
      todoId: this.todo.id
    });
  }
}
