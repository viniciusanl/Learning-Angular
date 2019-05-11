import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFuncionarioComponent } from './cad-funcionario.component';

describe('CadFuncionarioComponent', () => {
  let component: CadFuncionarioComponent;
  let fixture: ComponentFixture<CadFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
