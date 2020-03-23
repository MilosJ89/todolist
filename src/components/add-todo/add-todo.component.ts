/**
 * Add todo component
 * Component which has form for add new items
 *
 * @author Milos Jovanovic
 */

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
    /**
     * Emit addTodo method
     */
    @Output() public addTodo: EventEmitter<any> = new EventEmitter<any>();

    /**
     * Text which user write in field
     */
    public title: string;

    /**
     * Submit to write in field
     */
    public onSubmit() {
        const todo = {
            title: this.title,
            completed: false
        };

        this.addTodo.emit(todo);
    }
}
