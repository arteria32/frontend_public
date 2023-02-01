import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit {

  public userTasks$ = this.tasksService.userTasksData$;

  constructor(private tasksService: TasksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => 
      this.tasksService.getUserTasks(params['id']))
  }

}
