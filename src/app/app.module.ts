// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { MainModule } from './modules/main/main.module';
import { HeaderModule } from './modules/header/header.module';

// Components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, MainModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
