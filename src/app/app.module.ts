import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserTodoComponent } from './components/user-todo/user-todo.component';
import { UserService } from './services/user/user.service';
import { TodoService } from './services/todo/todo.service';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserTodoComponent,
    UsersListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UserService, TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
