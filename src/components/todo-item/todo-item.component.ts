import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/models/Todo';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
  })
export class TodoItemComponent implements OnInit {
    @Input() todo: Todo;

    constructor() {

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
}



