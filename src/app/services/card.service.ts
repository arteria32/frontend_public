import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import { cardListData } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  async getCardListData(cardSelector: number): Promise<cardListData[]> {
    try {
      return await this.http
        .get<cardListData[]>('http://localhost:3000/reservoirsList')
        .pipe(delay(100))
        .toPromise();
    } catch (error) {
      alert('Ошибка доступа к серверу');
      return Promise.reject(error);
    }
  }
}
