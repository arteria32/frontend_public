import { Component  } from '@angular/core';
import { ReservoirService } from "../../services/reservoir.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private reservoirService: ReservoirService) { }

  onChange(event: any) {
    const target = event.target;
    this.reservoirService.getData(target.files[0]);
  }

}
