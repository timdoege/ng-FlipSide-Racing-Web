import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacersDetailComponent } from './racers-detail.component';

describe('RacersDetailComponent', () => {
  let component: RacersDetailComponent;
  let fixture: ComponentFixture<RacersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
