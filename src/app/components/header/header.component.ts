import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() cardSelectors: string[];
  @Input() cardGroupSelector: number;
  @Input() burgerMenuState: boolean;

  @Output() getData = new EventEmitter();
  @Output() changeGroup = new EventEmitter<number>();
  @Output() toggleBurgerMenu = new EventEmitter();

  onChangeGroupHandler(id: number) {
    this.changeGroup.emit(id);
  }

  onGetDataHandler() {
    this.getData.emit();
  }

  onBurgerToggle() {
    this.burgerMenuState = !this.burgerMenuState;
  }
}
