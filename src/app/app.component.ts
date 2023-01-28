import { Component, OnInit } from '@angular/core';
import { IReservoir } from './models/reservoir';
import { ReservoirService } from './services/reservoir.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  reservoirs: IReservoir[] = [];

  constructor(private reservoirsService: ReservoirService) {}

  ngOnInit(): void {
    this.reservoirs = this.reservoirsService.getAll();
  }
}
