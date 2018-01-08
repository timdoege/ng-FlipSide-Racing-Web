import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackEditComponent } from './track-edit.component';

describe('TrackEditComponent', () => {
  let component: TrackEditComponent;
  let fixture: ComponentFixture<TrackEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
