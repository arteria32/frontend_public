import { Component, Input } from '@angular/core';
import { Rezervoir } from 'src/app/models/rezervoir';

@Component({
  selector: 'app-rezervoir',
  templateUrl: './rezervoir.component.html',
  styleUrls: ['./rezervoir.component.css'],
})
export class RezervoirComponent {
  @Input() rezervoir: Rezervoir;
}
