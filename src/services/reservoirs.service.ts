import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservoir} from "../app/models/reservoir";

@Injectable({
  providedIn: 'root'
})
export class ReservoirsService {

  private _reservoirsURL = 'assets/reservoirs.json';

  constructor(private http: HttpClient) {}

  public getReservoirs(): Observable<Reservoir[]> {
    return this.http.get<Reservoir[]>(this._reservoirsURL);
  }
}
