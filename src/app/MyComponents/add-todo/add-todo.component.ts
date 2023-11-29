import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoType } from './../../TodoType';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string | undefined;
  desc:string | undefined;
    @Output() itemToBeAdded: EventEmitter<TodoType> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(1);
    const newItem = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true
    }

    this.itemToBeAdded.emit(newItem);
  }
}
