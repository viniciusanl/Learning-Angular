import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPageComponent } from './footer-page.component';

describe('FooterPageComponent', () => {
  let component: FooterPageComponent;
  let fixture: ComponentFixture<FooterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
