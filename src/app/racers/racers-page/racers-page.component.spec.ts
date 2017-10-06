import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacersPageComponent } from './racers-page.component';

describe('RacersPageComponent', () => {
  let component: RacersPageComponent;
  let fixture: ComponentFixture<RacersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
