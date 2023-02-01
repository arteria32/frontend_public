import { Component, Input, OnInit } from '@angular/core';
import { Rezervoir } from 'src/app/border/rezervoir';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit 
{
  @Input() rezervoirs: Rezervoir[];
  ngOnInit(): void {}
}
