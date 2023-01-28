import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReservoirComponent } from './components/reservoir/reservoir.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
  declarations: [AppComponent, ReservoirComponent, HeaderComponent],
  imports: [BrowserModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
