import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    TodosPageComponent,
    UserComponent,
    TodoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
