import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {TankInterface} from "../../interfaces/tank.interface";
import * as d3 from 'd3';

@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.scss']
})
export class TankComponent implements OnInit, AfterViewInit{
  // @ts-ignore
  @Input() tank: TankInterface;
  @Input() tankFillingId: string = '';
  @Input() index: number = 0;
  @Input() minRange: number = 0;
  @Input() maxRange: number = 0;

  public percent: number = 0;
  public level: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.calculateData();
  }

  ngAfterViewInit() {
    this.drawTank();
  }

  public calculateData(): void {
    this.level = +this.tank.value > this.minRange && +this.tank.value < this.maxRange;
    this.percent = Math.round(+this.tank.value / this.maxRange * 100);
  }

  public drawTank(): void {
      d3.select(`#${this.tankFillingId}`)
        .append('svg')
        .attr('transform', 'rotate(-180)')
        .style('width','100%')
        .style('height','100%')
        .append('rect')
        .attr('width','100%')
        .attr('height',`${this.percent}`)
        .style('fill','#0089FF')
  }

}
