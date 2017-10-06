import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceEventListPageComponent } from './race-event-list-page.component';

describe('RaceEventListPageComponent', () => {
  let component: RaceEventListPageComponent;
  let fixture: ComponentFixture<RaceEventListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceEventListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceEventListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
