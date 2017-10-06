import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsRacerPageComponent } from './statistics-racer-page.component';

describe('StatisticsRacerPageComponent', () => {
  let component: StatisticsRacerPageComponent;
  let fixture: ComponentFixture<StatisticsRacerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsRacerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsRacerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
