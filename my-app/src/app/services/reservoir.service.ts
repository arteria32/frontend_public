import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservoir } from '../interface/reservoir';

@Injectable({
  providedIn: 'root',
})
export class ReservoirService {
  title = '';
  constructor(private request: HttpClient) {}
  getReservoirs(): Observable<Reservoir[]> {
    return this.request.get<Reservoir[]>(
      '/assets/information_about_reservoir.json'
    );
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
