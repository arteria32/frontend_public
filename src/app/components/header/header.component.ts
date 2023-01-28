import { Component } from '@angular/core';
import { ReservoirService } from 'src/app/services/reservoir.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private reservoirsService: ReservoirService) {}

  handleFileInput(event: any): void {
    console.log(event.target.files[0]);
    this.reservoirsService.upload(event.target.files[0]);
  }
}
