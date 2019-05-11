import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadProdutoComponent } from './cad-produto.component';

describe('CadProdutoComponent', () => {
  let component: CadProdutoComponent;
  let fixture: ComponentFixture<CadProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
