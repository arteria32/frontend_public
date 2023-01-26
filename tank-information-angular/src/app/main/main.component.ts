import {Component, OnInit, ViewChild} from '@angular/core';
import {ThemeService} from "../shared/services/theme.service";
import {TankInterface} from "../shared/interfaces/tank.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  public minRange: number = 200;
  public maxRange: number = 1000;
  public groupedTanks = new Map();
  public selectedGroup: string = 'АИ-92';
  public groupMassive: string[] = [
    'АИ-92',
    'КЕРОСИН',
    'ДТ ЗИМНЕЕ',
    'ТС-1',
    'АИ-95',
    'МАЗУТ',
    'ГАЗОЙЛЬ',
    'НЕФТЬ',
  ]

  constructor(
    private _darkThemeService: ThemeService,
  ) {}


  ngOnInit() {}

  public initChangeFile(): void {}

  public inputFile(event: any): void {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.addEventListener('load', e => {
      const tanksFromFile = JSON.parse(reader.result as string).data;
      if (!tanksFromFile.length) {
        alert('В данном файле нет резервуаров с нужной структурой. Проверьте правильность выбранного файла');
        return;
      }
      this.groupedTanks.set(this.selectedGroup, tanksFromFile);
      event.target.value = null;
    })
  }

  public changeGroup(groupName: string): void {
    this.selectedGroup = groupName;
  }

  public changeTheme(): void {
    this._darkThemeService.changeTheme();
  }

  public changeRange(): void {
    let wanted = confirm('После ввода корректного диапазона, все резервуары будут удалены. Продолжить?');
    if (!wanted) {
      return;
    }
    let min = prompt('Введите нижний диапазон массы > 0:');
    let max = prompt('Введите верхний диапазон массы < 1000:');
    if (min === null || max === null) {
      return;
    }
    if (max > min && +min > 0 && +max < 1000) {
      this.minRange = +min;
      this.maxRange = +max;
      this.groupedTanks.clear();
    } else {
      alert('Введены некорректные данные.');
    }
  }

}
