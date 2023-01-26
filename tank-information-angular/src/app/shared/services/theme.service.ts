import {BehaviorSubject, Observable} from "rxjs";





export class ThemeService {
  private _selectDarkTheme$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public selectDarkTheme$: Observable<boolean> = this._selectDarkTheme$$.asObservable();

  constructor() {
  }

  public changeTheme(): void {
    const selectTheme = !this._selectDarkTheme$$.getValue();
    this._selectDarkTheme$$.next(selectTheme);
  }


}
