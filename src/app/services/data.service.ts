import { Injectable } from '@angular/core';
import { ReservoirList } from '../app.module';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data$: ReservoirList;

  public uploadFile(event: any) {
    const fileReader: any = new FileReader();
    fileReader.readAsText(event.target.files[0], 'UTF-8');
    fileReader.onload = () => {
      this.data$ = JSON.parse(fileReader.result);
    };
    fileReader.onerror = (error: any) => {
      console.log(error);
    };
  }
}
