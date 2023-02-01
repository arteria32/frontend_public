// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Pages
import { UsersComponent } from './pages/users/users.component';
import { UserComponent as UserPageComponent } from './pages/user/user.component';
import { TodosComponent } from './pages/todos/todos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// Components
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    UsersComponent,
    TodosComponent,
    NotFoundComponent,
    UserPageComponent,
    TodoComponent,
    UserComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
