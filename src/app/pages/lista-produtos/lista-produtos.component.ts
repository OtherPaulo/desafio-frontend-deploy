import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutoService } from '../../service/cadastro-produto/cadastro-produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ListaProdutosComponent implements OnInit {
  produtos: any[] = [];

  constructor(private cadastroProdutoService: CadastroProdutoService) {}

  ngOnInit(): void {
    this.cadastroProdutoService.listarProdutos().subscribe(
      (data: any[]) => {
        this.produtos = data;
      },
      (error: any) => {
        console.error('Erro ao listar produtos', error);
      }
    );
  }
}
