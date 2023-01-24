// Angular
import { Injectable } from '@angular/core';

// Const
import { leftFrontier, rightFrontier } from '../common/const';

@Injectable({ providedIn: 'root' })
export class FrontierService {
  private currentFrontiers: number[] = [];

  constructor() {
    this.currentFrontiers = [leftFrontier, rightFrontier];
  }

  getFrontierValue(index: number): number {
    return this.currentFrontiers[index];
  }

  changeFrontiers(): void {
    let leftBorder: number;

    let rightBorder: number;

    while (true) {
      leftBorder = Number(prompt('Введите значение левой границы'));

      if (isNaN(leftBorder)) {
        alert('Вы указали некорректное значение. Оно должно быть числом.');
      } else {
        if (leftBorder >= 0 && leftBorder <= 1000) {
          break;
        } else {
          alert('Значение должно лежать в диапозоне от 0 до 1000');
        }
      }
    }

    while (true) {
      rightBorder = Number(prompt('Введите значение правой границы'));

      if (isNaN(rightBorder)) {
        alert('Вы указали некорректное значение. Оно должно быть числом.');
      } else {
        if (
          rightBorder > 0 &&
          rightBorder <= 1000 &&
          leftBorder + 1 <= rightBorder
        ) {
          break;
        } else {
          alert(
            'Значение должно лежать в диапозоне от 0 до 1000 и быть больше значения левой границы.'
          );
        }
      }
    }

    this.currentFrontiers = [leftBorder, rightBorder];
  }
}
