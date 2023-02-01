import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  { path: '', component: UsersPageComponent },
  { path: 'todos/:id', component: TodosPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
