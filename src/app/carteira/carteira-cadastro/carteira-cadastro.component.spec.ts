import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraCadastroComponent } from './carteira-cadastro.component';

describe('CarteiraCadastroComponent', () => {
  let component: CarteiraCadastroComponent;
  let fixture: ComponentFixture<CarteiraCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteiraCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteiraCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
