import { TodoType } from './../../TodoType';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() itemToBeAdded: EventEmitter<TodoType> = new EventEmitter();

  todos: TodoType[] | undefined;
  localItem: string | null;

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null || this.localItem == undefined) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  deleteItem(item: TodoType) {
    // console.log(item);
    const index = this.todos?.indexOf(item);
    if (index !== -1 && this.todos && index !== undefined) {
      this.todos.splice(index, 1);
      console.log("item deleted");
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  addItem(item: TodoType) {
    console.log("add item" + item);
    this.todos?.push(item);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleItemStatus(item: TodoType) {
    const index = this.todos?.indexOf(item);
    if (index !== -1 && this.todos && index !== undefined) {
      this.todos[index].active = !this.todos[index].active;
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
}
