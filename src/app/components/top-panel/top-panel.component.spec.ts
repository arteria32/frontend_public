import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPanelComponent } from './top-panel.component';

describe('PanelComponent', () => {
  let component: TopPanelComponent;
  let fixture: ComponentFixture<TopPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
