import { TodoType } from './../../TodoType';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() itemToBeAdded: EventEmitter<TodoType> = new EventEmitter();

  todos:TodoType[] | undefined;
  constructor() { 
    this.todos = [
      {
        sno : 1,
        title : "This is title 1",
        desc : "Description",
        active : true
      },
      {
        sno : 2,
        title : "This is title 2",
        desc : "Description",
        active : true
      },
      {
        sno : 3,
        title : "This is title 3",
        desc : "Description",
        active : true
      },
      {
        sno : 4,
        title : "This is title 4",
        desc : "Description",
        active : true
      }
    ]
  }

  ngOnInit(): void {
  }

  deleteItem(item: TodoType) {
    // console.log(item);
    const index = this.todos?.indexOf(item);
    if (index !== -1 && this.todos && index !== undefined) {
        this.todos.splice(index, 1);
        console.log("item deleted");
    }
  }

  addItem(item: TodoType) {
    console.log(item);
    this.todos?.push(item);
  }
}
