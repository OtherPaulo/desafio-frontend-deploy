import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutosPagosComponent } from './lista-produtos-pagos.component';

describe('ListaProdutosPagosComponent', () => {
  let component: ListaProdutosPagosComponent;
  let fixture: ComponentFixture<ListaProdutosPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProdutosPagosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaProdutosPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
