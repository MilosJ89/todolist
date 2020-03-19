import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from 'src/models/Todo';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
  })
export class TodoItemComponent implements OnInit {
    @Input() todo: Todo;
    @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

    constructor(private todoService: TodoService) {

    }

    ngOnInit() {

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

    public onDelete(todo) {
        this.deleteTodo.emit(todo);
    }
}



