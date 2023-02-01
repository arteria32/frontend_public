import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './pages/todos/todos.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'todos/:id', component: TodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
