import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TankComponent } from './shared/components/tank/tank.component';
import {ThemeService} from "./shared/services/theme.service";
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TankComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
