import { Component, Input, OnInit } from '@angular/core';
import { Border } from 'src/app/border/border';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit 
{
  @Input() border: Border;
  ngOnInit(): void {}
}
