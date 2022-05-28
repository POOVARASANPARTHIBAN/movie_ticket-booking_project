import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreCheckinComponent } from './theatre-checkin.component';

describe('TheatreCheckinComponent', () => {
  let component: TheatreCheckinComponent;
  let fixture: ComponentFixture<TheatreCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatreCheckinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
