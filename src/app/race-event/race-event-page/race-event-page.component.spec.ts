import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceEventPageComponent } from './race-event-page.component';

describe('RaceEventPageComponent', () => {
  let component: RaceEventPageComponent;
  let fixture: ComponentFixture<RaceEventPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceEventPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
