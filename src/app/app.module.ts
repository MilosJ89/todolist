import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from '../components/todos/todos.component';
import { TodoItemComponent } from 'src/components/todo-item/todo-item.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { AddTodoComponent } from 'src/components/add-todo/add-todo.component';
import { AboutComponent } from 'src/pages/about/about.page';
import { TodoService } from 'src/services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
