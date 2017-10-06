import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsDashboardPageComponent } from './statistics-dashboard-page.component';

describe('StatisticsDashboardPageComponent', () => {
  let component: StatisticsDashboardPageComponent;
  let fixture: ComponentFixture<StatisticsDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
