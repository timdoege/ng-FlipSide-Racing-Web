import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceEventDetailPageComponent } from './race-event-detail-page.component';

describe('RaceEventDetailPageComponent', () => {
  let component: RaceEventDetailPageComponent;
  let fixture: ComponentFixture<RaceEventDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceEventDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceEventDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
