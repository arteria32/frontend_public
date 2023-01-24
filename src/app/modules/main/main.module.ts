// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { MainComponent } from './main.component';
import { FooterComponent, HeaderComponent } from './components';
import { CisternComponent } from './components/cistern/cistern.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent, FooterComponent, CisternComponent],
  imports: [CommonModule],
  exports: [MainComponent],
})
export class MainModule {}
