import { Injectable } from '@angular/core';
import { IReservoir } from '../models/reservoir';

@Injectable({
  providedIn: 'root',
})
export class ReservoirService {
  private data: IReservoir[] = [];

  getAll(): IReservoir[] {
    return this.data;
  }

  async upload(file: File): Promise<void> {
    const content = await file.text();
    this.data.push(...JSON.parse(content));
  }
}
