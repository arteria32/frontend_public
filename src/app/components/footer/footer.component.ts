import { Component, OnInit } from '@angular/core';
import { leftBorder as lB, rightBorder as rB } from 'src/app/common/consts';
import { BordersService } from 'src/app/services/borders.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private borderService: BordersService) {}

  leftBorder: number;
  rightBorder: number;

  ngOnInit(): void {
    this.leftBorder = this.borderService.getLeftB();
    this.rightBorder = this.borderService.getRightB();
  }

  handleBorder(event: any, border: string): void {
    this.borderService.updateBorders(event.target.value, border);
  }
}
