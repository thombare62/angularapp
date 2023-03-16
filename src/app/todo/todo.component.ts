import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';







@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  myVariable: string;
  todoList: any = [];
  // DI 
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.listToDos();
  }
  
  createTodo() {
    let todo = {
      id: new Date().getTime(),
      // title: `Format the data of firebase`
      title : this.myVariable,
      
    }

    this.todoService.create(todo).subscribe((response) => {
      console.log('todo create', response);
      this.listToDos();
    }, (error => {
      console.log(error)
    }))
  }

  listToDos() {
    this.todoService.list().subscribe((res) => {
      console.log(res)
      this.todoList = res;
    }, (error=> {
      console.log(error);
    }))
  }

  editTodo(todo: any) {
    let editData = {
      id: new Date().getTime(),
      title: `Edited title`
    }

    this.todoService.update(todo.id, editData).subscribe(res=> {
      this.listToDos();
    })
  }

  deleteTodo(id: any) {
    this.todoService.delete(id).subscribe(res => {
      console.log('Record has been deleted');
      this.listToDos();
    })
  }
}
