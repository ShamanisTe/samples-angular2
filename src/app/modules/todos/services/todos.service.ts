import { Injectable, isDevMode } from '@angular/core';

import { Todo } from '../models/todo';

const faker = require('faker');

@Injectable()
export class TodosService {
  
  constructor() {
  }
  
  /**
   * Initialize todolist in dev mode
   * 
   * @returns {Todo[]}
   * 
   * @memberOf TodosService
   */
  initTodos(): Todo[] {
    let todos = [];
    todos.push(new Todo(1, "Init la todolist"));
    todos.push(new Todo(2, "Faire le ménage"));
    todos.push(new Todo(3, "Comprendre Angular2"));
    todos.push(new Todo(4, "Sortir le chien"));
    
    for (let i = 5; i < 10; i++) {
      todos.push(new Todo(i, faker.lorem.sentence()));
    }
    
    this.saveTodos(todos);
    
    return todos;
  }
  
  /**
   * Return array with todos
   * 
   * @returns {Todo[]}
   * 
   * @memberOf TodosService
   */
  getTodos(): Todo[] {
    
    let todos = LocalStorageAPI.getList();
    
    if (isDevMode && !todos) {
      todos = this.initTodos();
    }
    
    return todos;
  }
  
  /**
   * Save todos in localstorage
   * 
   * @param {Todo[]} todos
   * 
   * @memberOf TodosService
   */
  saveTodos( todos: Todo[] ) {
    
    LocalStorageAPI.saveList(todos);
  }
}


/**
 *
 *
 * @export
 * @class LocalStorageAPI
 */
export class LocalStorageAPI {
  /**
   *
   *
   * @private
   * @static
   * @type {string}
   * @memberOf LocalStorageAPI
   */
  private static todoskey: string = "todos";
  
  /**
   *
   *
   * @static
   * @returns {Array<Todo>}
   *
   * @memberOf LocalStorageAPI
   */
  static getList(): Array<Todo> {
    return JSON.parse(localStorage.getItem(this.todoskey));
  }
  
  /**
   *
   *
   * @static
   * @param {Array<Todo>} todos
   *
   * @memberOf LocalStorageAPI
   */
  static saveList( todos: Array<Todo> ) {
    localStorage.setItem(this.todoskey, JSON.stringify(todos));
  }
}