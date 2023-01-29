import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export interface Vedro {
    name: number;
    value: number;
  }

  
@Injectable({ providedIn: 'root' })
export class ReservoirService {

    public reservoirs:[] = [];
    private readonly reservoirs$ = new BehaviorSubject<Vedro[]>([]);

    constructor() { }
    public get reservoirsData$(): Observable<Vedro[]> {
        return this.reservoirs$.asObservable();
      }
    updateData(data:any) {
        this.reservoirs = data.information;
        console.log(this.reservoirs)
    }
      
}
