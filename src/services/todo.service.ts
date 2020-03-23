import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENV } from 'src/ENV';

import { Todo } from 'src/models/Todo';
import { Observable, from } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class TodoService {
    // public todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
    public todosLimit: string = '?_limit=5';

    constructor(private http: HttpClient) {}
    /**
     * Get Todos
     */
    public getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${ENV.BASE_URL}${this.todosLimit}`);
    }

    /**
     * Delete Todo
     */
    public deleteTodo(todo: Todo): Observable<Todo> {
        const url = `${ENV.BASE_URL}/${todo.id}`;
        return this.http.delete<Todo>(url, httpOptions);
    }

    /**
     * Add Todo
     */
    public addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(ENV.BASE_URL, todo, httpOptions);
    }

    /**
     * Toggle Completed
     */
    public toggleCompleted(todo: Todo): Observable<any> {
        const url = `${ENV.BASE_URL}/${todo.id}`;
        return this.http.put(url, todo, httpOptions);
    }
}
