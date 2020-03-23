/**
 * Todos component
 * Create, delete and add items with id, title and completed
 *
 * @author Milos Jovanovic
 */

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  /**
   * Array of todo items with informations(id, title, completed)
   *
   * @type {any[]}
   */
  public todos: Todo[];

  constructor(private todoService: TodoService) {}

  /**
   * Retrieves todos
   */
  public ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  /**
   * Add new todo
   *
   * @param {any[]} todo
   */
  public addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

  /**
   * Delete todo when click on button for delete
   *
   * @param {any[]} todo
   */
  public deleteTodo(todo: Todo) {
    // Remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

}
