import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastroProdutoService } from '../../service/cadastro-produto/cadastro-produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export default class CadastroProdutoComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private cadastroProdutoService: CadastroProdutoService) {
    this.productForm = this.fb.group({
      codigo: ['', Validators.required],
      descricao: ['', Validators.required],
      dataEntrada: ['', Validators.required],
      dataValidade: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.cadastroProdutoService.cadastrarProduto(this.productForm.value).subscribe(
        (response: any) => {
          console.log('Produto cadastrado com sucesso', response);
          this.productForm.reset();
        },
        (error: any) => {
          console.error('Erro ao cadastrar produto', error);
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }
}
