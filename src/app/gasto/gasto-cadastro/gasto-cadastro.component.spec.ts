import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoCadastroComponent } from './gasto-cadastro.component';

describe('GastoCadastroComponent', () => {
  let component: GastoCadastroComponent;
  let fixture: ComponentFixture<GastoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
