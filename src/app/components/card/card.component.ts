import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { cardData } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnChanges {
  @Input() cardList: any;
  @Input() cardGroupSelector: number;
  @Input() minThreshold: number;
  @Input() maxThreshold: number;
  @Input() maxCapacity: number;

  cardListBySelector: Array<cardData>;
  cardVolume: number;
  cardPercentage: number;
  cardId: number;
  ngOnChanges(changes: SimpleChanges) {
    this.cardListBySelector = this.cardList[this.cardGroupSelector];
  }
}
