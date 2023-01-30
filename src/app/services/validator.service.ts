import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Validator {
  public minAcceptableValue = 200;
  public maxAcceptableValue = 1000;

  public changeBorders() {
    this.minAcceptableValue = Number(
      prompt('Введите минимальное значение > 0')
    );
    this.maxAcceptableValue = Number(
      prompt('Введите максимальное значение <1000')
    );
    if (this.minAcceptableValue < 0 || this.maxAcceptableValue > 1000) {
      alert(
        'Минимальное значение должно быть больше 0, максимальное меньше 1000'
      );
      this.minAcceptableValue = Number(
        prompt('Введите минимальное значение >0')
      );
      this.maxAcceptableValue = Number(
        prompt('Введите максимальное значение <1000')
      );
    }
  }

  public validator(volume: number) {
    if (volume > this.minAcceptableValue && volume < this.maxAcceptableValue) {
      return true;
    } else return false;
  }
}
