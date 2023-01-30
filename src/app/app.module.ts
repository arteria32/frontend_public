import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TankComponent } from './tank/tank.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

export interface Reservoir {
  name: string;
  volume: number;
}

export type ReservoirList = Reservoir[];

@NgModule({
  declarations: [
    AppComponent,
    TankComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
