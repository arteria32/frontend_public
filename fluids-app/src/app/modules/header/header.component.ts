import { Component  } from '@angular/core';
import { ReservoirService } from "../../services/reservoir.service"
import {readFromFile} from "../../common-data/read-from-file";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private reservoirService: ReservoirService) { }

  loadData() {
    readFromFile().then(data => this.reservoirService.updateData(data));
  }

}
