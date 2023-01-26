import {Component, OnInit} from '@angular/core';
import {ThemeService} from "./shared/services/theme.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public selectDarkTheme: boolean = false;

  constructor(
    private _darkThemeService: ThemeService,
  ) {
  }

  ngOnInit() {
    this._darkThemeService.selectDarkTheme$.subscribe( (selected: boolean) => this.selectDarkTheme = selected);
  }

}
