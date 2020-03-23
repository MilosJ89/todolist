/**
 * Todo-item component
 * Create todo items
 *
 * @author Milos Jovanovic
 */

import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from 'src/models/Todo';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
  })
export class TodoItemComponent {
    @Input() public todo: Todo;
    @Output() public deleteTodo: EventEmitter<Todo> = new EventEmitter<any>();

    constructor(private todoService: TodoService) {}

    /**
     * Delete item
     *
     * @param {Object} todo
     */
    public onDelete(todo) {
        this.deleteTodo.emit(todo);
    }

    /**
     * Complete todo
     *
     * @param {Object} todo
     */
    public onToggle(todo) {
        /**
         * Toggle in UI
         */
        todo.completed = !todo.completed;
        /**
         * Toggle on server
         */
        this.todoService.toggleCompleted(todo).subscribe(todo => {
            console.log(todo);
        });
    }

    /**
     * Set Dynamic Classes
     */
    public setClasses() {
        const classes = {
            todo: true,
            'is-complete': this.todo.completed
        };

        return classes;
    }
}



