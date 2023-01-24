// Angular
import { Component } from '@angular/core';

// Services
import { FrontierService } from 'src/app/services/frontier.service';

@Component({
  selector: 'main-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private frontierService: FrontierService) {}

  onClick(): void {
    this.frontierService.changeFrontiers();
  }

  getFrontierValue(index: number): number {
    return this.frontierService.getFrontierValue(index);
  }
}
