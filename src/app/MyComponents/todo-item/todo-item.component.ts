import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoType } from 'src/app/TodoType';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: TodoType;
  @Output() itemToBeDeleted: EventEmitter<TodoType> = new EventEmitter();
  @Output() setStatusOfItem: EventEmitter<TodoType> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(val : TodoType) {
    console.log(val);
    console.log("delete event emitted");
    this.itemToBeDeleted.emit(val);
  }

  setStatus(val : TodoType) {
    // val.active = !val.active;
    this.setStatusOfItem.emit(val);
  }
}
