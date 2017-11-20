import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacersListComponent } from './racers-list.component';

describe('RacersListComponent', () => {
  let component: RacersListComponent;
  let fixture: ComponentFixture<RacersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
