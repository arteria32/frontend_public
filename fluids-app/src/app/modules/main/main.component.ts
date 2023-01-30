import { ReservoirService } from './../../services/reservoir.service';
import { UserInputService} from './../../services/userInput.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{
  // public reservoirs:[] = this.reservoirService.reservoirs;

  public reservoirs$ = this.reservoirService.reservoirsData$;

  constructor(private  reservoirService: ReservoirService, public userInputService: UserInputService) {}


}
