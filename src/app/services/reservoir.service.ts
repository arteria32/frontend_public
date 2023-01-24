// Angular
import { Injectable } from '@angular/core';

// Types
import { Reservoir } from '../types/reservoir';

@Injectable({ providedIn: 'root' })
export class ReservoirService {
  private reservoirs: Reservoir[] = [];

  getReservoirs(): Reservoir[] {
    return this.reservoirs;
  }

  async addReservoirs(file: File): Promise<void> {
    const fileContent = await file.text();

    this.reservoirs.push(...JSON.parse(fileContent));
  }
}
