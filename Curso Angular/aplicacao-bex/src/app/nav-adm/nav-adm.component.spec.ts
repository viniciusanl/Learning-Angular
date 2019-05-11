import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAdmComponent } from './nav-adm.component';

describe('NavAdmComponent', () => {
  let component: NavAdmComponent;
  let fixture: ComponentFixture<NavAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
