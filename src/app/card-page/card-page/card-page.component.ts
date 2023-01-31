import { Component, EventEmitter, Output } from '@angular/core';
import { CardService } from '../../services/card.service';
import { cardListData } from '../../models/card.model';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent {
  @Output() onGetData: EventEmitter<cardListData[]> = new EventEmitter<cardListData[]>();

  constructor(private CardService: CardService) {}

  cardList: cardListData[];
  cardSelectors = [
    'АИ-92',
    'КЕРОСИН',
    'ДТ ЗИМНЕЕ',
    'ТС-1',
    'АИ-95',
    'МАЗУТ',
    'ГАЗОЙЛЬ',
    'НЕФТЬ',
  ];
  settings = {
    minThreshold: 200,
    maxThreshold: 800,
    maxCapacity: 1000,
  };
  settingsError = false;
  burgerMenuState = false;
  cardGroupSelector = 0;

  getData() {
    this.CardService.getCardListData(this.cardGroupSelector).then((data) => {
      this.cardList = data;
    });
  }

  setThreshold(payload: { type: string; newValue: number }) {
    let { type, newValue } = payload;
    if (isNaN(newValue)) {
      alert('Only numbers');
      this.settingsError = true;
      return;
    }
    switch (type) {
      case 'changeMin': {
        if (
          newValue >= this.settings.maxThreshold ||
          newValue >= this.settings.maxCapacity ||
          newValue < 0
        ) {
          alert('Wrong input');
          this.settingsError = true;
        } else {
          this.settings.minThreshold = newValue;
          this.settingsError = false;
        }
        break;
      }
      case 'changeMax': {
        if (newValue <= this.settings.minThreshold || newValue <= 0) {
          alert('Wrong input');
          this.settingsError = true;
        } else {
          this.settings.maxThreshold = newValue;
          this.settings.maxCapacity = newValue + 200;
          this.settingsError = false;
        }
        break;
      }
    }
  }

  changeGroup(id: number) {
    this.cardGroupSelector = id;
  }
  toggleBurgerMenu() {
    this.burgerMenuState = !this.burgerMenuState;
  }
}
