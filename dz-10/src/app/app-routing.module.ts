import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTasksComponent } from './components/user-tasks/user-tasks.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
      { path: '', component: UsersComponent},
      { path: 'todos/:id', component: UserTasksComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
