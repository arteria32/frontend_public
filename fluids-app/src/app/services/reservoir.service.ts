import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export interface Reservoir {
    name: string;
    value: number;
  }

@Injectable({ providedIn: 'root' })
export class ReservoirService {

    private readonly reservoirs$ = new BehaviorSubject<Reservoir[]>([]);

    constructor() { }

    public get reservoirsData$(): Observable<Reservoir[]> {
        return this.reservoirs$.asObservable();
    }

  
    public updateData(data: any): void {
        let newData: Reservoir[] = data.information;
        if (newData && newData.length > 0) {
          this.reservoirs$.next(newData);
        }
    }
}
