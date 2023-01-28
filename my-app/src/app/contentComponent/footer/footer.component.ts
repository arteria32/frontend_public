import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Reservoir } from 'src/app/interface/reservoir';
import { Bounds } from 'src/app/interface/bounds';
import { ReservoirService } from 'src/app/services/reservoir.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Output() onChangeBounds: EventEmitter<Bounds> = new EventEmitter<Bounds>();
  leftBound = 200;
  rightBound = 800;
  @ViewChild('leftInput', { static: false }) leftInput: ElementRef;
  @ViewChild('rightInput', { static: false }) rightInput: ElementRef;
  constructor(private service: ReservoirService) {}
  uploadData(): void {
    this.service.uploadReservData();
  }

  changeBounds(): void {
    if (
      this.leftInput.nativeElement.value >=
        this.rightInput.nativeElement.value ||
      this.rightInput.nativeElement.value > 1000 ||
      this.leftInput.nativeElement.value < 0 ||
      isNaN(this.leftInput.nativeElement.value) ||
      isNaN(this.rightInput.nativeElement.value)
    ) {
      alert(
        'НЕПРАВИЛЬНЫЕ ДАННЫЕ, ЛЕВАЯ ГРАНИЦА ДОЛЖНА БЫТЬ МЕНЬШЕ ПРАВОЙ, ПРАВАЯ НЕ ДОЛЖНА ПРЕВЫШАТЬ 1000, ЛЕВАЯ НЕ ДОЛЖНА БЫТЬ МЕНЬШЕ НУЛЯ'
      );
      this.leftInput.nativeElement.value = this.leftBound;
      this.rightInput.nativeElement.value = this.rightBound;
      return;
    }
    this.leftBound = this.leftInput.nativeElement.value;
    this.rightBound = this.rightInput.nativeElement.value;
    const bounds: Bounds = {
      leftBound: this.leftBound,
      rightBound: this.rightBound,
    };
    this.onChangeBounds.emit(bounds);
  }
}
