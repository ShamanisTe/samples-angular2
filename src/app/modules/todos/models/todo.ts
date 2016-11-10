export class Todo {
  
  id: number;
  task: string;
  isDone: boolean;
  isImportant: boolean;
  
  constructor( id: number,
               task: string,
               isDone: boolean = false,
               isImportant: boolean = false ) {
    this.task = task;
    this.isDone = isDone;
    this.isImportant = isImportant;
    if (id) {
      this.id = id;
    }
  }
  
}