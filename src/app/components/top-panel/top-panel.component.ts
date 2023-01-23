import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})
export class TopPanelComponent implements OnInit {

  @Output() uploadDataEvent = new EventEmitter();
  @Output() changeBoundsEvent = new EventEmitter<Bounds>();

  constructor() { }

  ngOnInit(): void {
  }

  changeBounds(): void {
    const bounds = new Bounds();
    while (true) {
      const topLineValue = Number(prompt('print new top line value'));
      if (topLineValue && topLineValue > 0 && topLineValue < 1000) {
        bounds.topLine = topLineValue;
        break;
      }
      if (topLineValue === 0 || topLineValue === null) {
        break;
      }
    }
    while (true) {
      const bottomLineValue = Number(prompt('print bottom line value'));
      if (bottomLineValue && bottomLineValue > 0 && bottomLineValue < 1000) {
        bounds.bottomLine = bottomLineValue;
        break;
      }
      if (bottomLineValue === 0 || bottomLineValue === null) {
        break;
      }
    }
    if (bounds.topLine && bounds.bottomLine) this.changeBoundsEvent.emit(bounds)
  }

  uploadData(): void {
    this.uploadDataEvent.emit();
  }

}

export class Bounds {
  topLine: number = 0;
  bottomLine: number = 0
}
