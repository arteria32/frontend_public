import { Component, EventEmitter, Input, Output } from '@angular/core';
import { settings } from '../../models/settings.model';
import { settingsPayload, settingsType } from '../../models/settingsPayload';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() settings: settings;
  @Input() settingsError: boolean;
  @Output() setMinThreshold = new EventEmitter<settingsPayload>();

  onInputHandler(event: Event, type: settingsType) {
    let newValue = Number((event.target as HTMLInputElement).value);
    let payload: settingsPayload = {
      type: type,
      newValue: newValue,
    };
    this.setMinThreshold.emit(payload);
  }
}
