import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Border } from 'src/app/border/border';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() uploadRezervoirEvent = new EventEmitter();
  @Output() changeBorderEvent = new EventEmitter<Border>();
  ngOnInit(): void {}
  changeBorder(): void 
  {
    const border = new Border();
    let min: number;
    let max: number;
    while (true) {
      min = Number(prompt('min'));
      console.log(min < 0);
      if (min < 0 || min > 1000) 
      {
        alert('Введены неверные границы');
      } 
      else 
      {
        break;
      }
    }
    while (true) 
    {
      max = Number(prompt('max'));
      if (max < 0 || max > 1000) 
      {
        alert('Введены неверные границы');
      } 
      else 
      {
        break;
      }
    }
    if (min > max)
     {
      border.min = max;
      border.max = min;
    } 
    else 
    {
      border.min = min;
      border.max = max;
    }
    this.changeBorderEvent.emit(border);
  }
  uploadRezervoir(): void 
  {
    this.uploadRezervoirEvent.emit();
  }
}
