import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component')
      .then(m => m.HomeComponent as any)
  },
  {
    path: 'cadastro-produto',
    loadComponent: () => import('./pages/cadastro-produto/cadastro-produto.component')
  },
  {
    path: 'listar-produtos',
    loadComponent: () => import('./pages/lista-produtos/lista-produtos.component')
      .then(module => module.ListaProdutosComponent)
  },
  {
    path: 'listar-produtos-pagos',
    loadComponent: () => import('./pages/lista-produtos-pagos/lista-produtos-pagos.component')
      .then(module => module.ListaProdutosPagosComponent)
  }
];
