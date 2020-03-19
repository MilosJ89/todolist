import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from 'src/models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    public todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
    public todosLimit: string = '?_limit=5';


    constructor(private http: HttpClient) {

    }
    /**
     * Get Todos
     */
    public getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
    }
    /**
     * Toggle Completed
     */
    public toggleCompleted(todo: Todo): Observable<any> {
        const url = `${this.todosUrl}/${todo.id}`;
        return this.http.put(url, todo, httpOptions);
    }
}