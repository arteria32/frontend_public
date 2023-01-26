import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './contentComponent/header/header.component';
import { MainComponent } from './contentComponent/main/main.component';
import { FooterComponent } from './contentComponent/footer/footer.component';
import { ReservoirComponent } from './contentComponent/reservoir/reservoir.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ReservoirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
