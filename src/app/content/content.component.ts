import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  constructor(public dataService: DataService) {}
}
