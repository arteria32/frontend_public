import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable, Subject } from 'rxjs';
import { Reservoir } from '../interface/reservoir';

@Injectable({
  providedIn: 'root',
})
export class ReservoirService {
  title = '';
  rese: Subject<Reservoir[]> = new Subject<Reservoir[]>();
  constructor(private request: HttpClient) {}

  async uploadReservData() {
    const result = await lastValueFrom(
      this.request.get<Reservoir[]>('/assets/information_about_reservoir.json')
    );
    this.rese.next(result);
  }

  boundsType(
    reservoirVolume: number,
    leftBound: number,
    rightBound: number
  ): boolean {
    if (reservoirVolume >= leftBound && reservoirVolume <= rightBound)
      return true;
    return false;
  }
}
