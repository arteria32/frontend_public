import { ReservoirService } from './../../services/reservoir.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public reservoirs:[] = this.reservoirService.reservoirs;
  constructor(private  reservoirService: ReservoirService) { }

  ngOnInit(): void {
    console.log(this.reservoirs)
  }

}
