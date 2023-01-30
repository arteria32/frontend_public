import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export interface Reservoir {
    name: any;
    value: any;
  }

  
@Injectable({ providedIn: 'root' })
export class ReservoirService {

    public reservoirs:[] = [];
    private readonly reservoirs$ = new BehaviorSubject<Reservoir[]>([]);

    constructor() { }

    public get reservoirsData$(): Observable<Reservoir[]> {
        return this.reservoirs$.asObservable();
      }

  
    public updateData(data: any): void {
        let newData: Reservoir[] = data.information;
        // проверка на "неправильность"
        if (newData && newData.length > 0) {
          // обновление значения с помощью метода "next"
          this.reservoirs$.next(newData);
        }
        console.log(this.reservoirsData$);
    }
}
