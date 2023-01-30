import { Component } from '@angular/core';
import { Validator } from '../services/validator.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public dataService: DataService, public validator: Validator) {}
}
