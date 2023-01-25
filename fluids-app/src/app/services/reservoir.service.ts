import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ReservoirService {
    private reservoirs:object = {};

    getData(file:any) {
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
        //   addItems(JSON.parse(reader.result).data);
        };
      };
      
}
