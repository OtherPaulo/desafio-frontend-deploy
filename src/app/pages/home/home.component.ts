import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CadastroUsuarioService } from '../../service/cadastro-usuario/cadastro-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  standalone: true
})
export class HomeComponent {
  form: FormGroup = new FormGroup({
    nome: new FormControl('', {
      validators: [Validators.required, this.validadorDuasPalavras()],
      updateOn: 'change'
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'change'
    }),
    senha: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      updateOn: 'change'
    })
  });

  constructor(
    private cadastroUsuarioService: CadastroUsuarioService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.form.valid) {
      this.cadastroUsuarioService.cadastrarUsuario(this.form.value).subscribe({
        next: (response: any) => {
          console.log('Cadastro realizado com sucesso!', response);
          this.router.navigate(['/cadastro-produto']);
        },
        error: (error: any) => {
          console.error('Erro ao realizar cadastro', error);
        }
      });
    } else {
      console.error('Formulário não é válido');
    }
  }

  validadorDuasPalavras(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = control.value ? control.value.trim().split(/\s+/).length >= 2 : false;
      return valid ? null : { 'duasPalavras': true };
    };
  }
}
