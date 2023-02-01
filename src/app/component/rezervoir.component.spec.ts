import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RezervoirComponent } from './rezervoir.component';
describe('RezervoirComponent', () => 
{
  let component: RezervoirComponent;
  let fixture: ComponentFixture<RezervoirComponent>;
  beforeEach(async () => 
  {
    await TestBed.configureTestingModule({
      declarations: [RezervoirComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(RezervoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => 
  {
    expect(component).toBeTruthy();
  });
});
