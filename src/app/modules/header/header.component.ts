// Components
import { Component } from '@angular/core';

// Services
import { ReservoirService } from 'src/app/services/reservoir.service';

@Component({
  selector: 'header-comp',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private reservoirService: ReservoirService) {}

  onClick(event: any): void {
    event?.preventDefault();

    const uploadButton: HTMLElement | null = document.querySelector(
      '.header__upload-btn'
    );

    uploadButton?.click();
  }

  onChange(event: any): void {
    const target = event.target;

    const extension = target.value.match(/\.([^\.]+)$/)?.[1];

    if (extension !== 'json') {
      alert('Загрузка файлов с таким расширением не поддерживается');

      target.value = '';

      return;
    }

    this.reservoirService.addReservoirs(target.files[0]);
  }
}
