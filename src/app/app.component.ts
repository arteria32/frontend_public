import { Component, OnInit } from '@angular/core';
import { Border } from './models/border';
import { Rezervoir } from './models/rezervoir';
import { RezervoirService } from './service/rezervoir.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dz-9';
  rezervoirs: Rezervoir[];
  border: Border = { min: 200, max: 800 };

  constructor(private rezervoirService: RezervoirService) {}

  ngOnInit(): void {
    this.uploadRezervoir();
  }

  uploadRezervoir(): void {
    this.rezervoirService.getRezervoirs().subscribe((streamRezervoirs) => {
      this.rezervoirs = streamRezervoirs;
      this.updateBorder(this.border);
    });
  }

  updateBorder(border: Border): void {
    for (let i = 0; i < this.rezervoirs.length; i++) {
      if (
        this.rezervoirs[i].volume >= border.min &&
        this.rezervoirs[i].volume <= border.max
      ) {
        this.rezervoirs[i].coloring = true;
      } else {
        this.rezervoirs[i].coloring = false;
      }
    }
    this.border = border;
  }
}
