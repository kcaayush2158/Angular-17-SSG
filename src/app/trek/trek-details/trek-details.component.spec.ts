import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekDetailsComponent } from './trek-details.component';

describe('TrekDetailsComponent', () => {
  let component: TrekDetailsComponent;
  let fixture: ComponentFixture<TrekDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrekDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrekDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
