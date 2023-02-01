import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rezervoir } from '../border/rezervoir';

@Injectable({
  providedIn: 'root',
})
export class RezervoirService {
  constructor(private http: HttpClient) {}
  getRezervoirs(): Observable<Rezervoir[]> {
    return this.http.get<Rezervoir[]>(`./assets/data.json`);
  }
}
