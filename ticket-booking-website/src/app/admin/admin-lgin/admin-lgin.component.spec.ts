import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLginComponent } from './admin-lgin.component';

describe('AdminLginComponent', () => {
  let component: AdminLginComponent;
  let fixture: ComponentFixture<AdminLginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
