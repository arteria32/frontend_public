import { Injectable } from '@angular/core';
import { leftBorder, rightBorder } from '../common/consts';

@Injectable({
  providedIn: 'root',
})
export class BordersService {
  leftBorder: number = leftBorder;
  rightBorder: number = rightBorder;

  getLeftB(): number {
    return this.leftBorder;
  }

  getRightB(): number {
    return this.rightBorder;
  }

  updateBorders(value: number, border: string): void {
    if (value > 1000 || value < 0) {
      alert('Значение не входит в границы от 0 до 1000');
    } else {
      if (border === 'left') {
        value >= this.rightBorder
          ? alert('Левая граница больше правой или равна ей')
          : (this.leftBorder = value);
      } else {
        value <= this.leftBorder
          ? alert('Левая граница меньше левой или равна ей')
          : (this.rightBorder = value);
      }
    }
  }
}
