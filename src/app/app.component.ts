import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { SideBarSignal } from './shared/signals/sidebar.signal';
import { ScreenSizeDirective } from './shared/directives/screen-size.directive';
import { ScreenSizeSignal } from './shared/signals/screen-size.signal';
import { ListaProdutosComponent } from './pages/lista-produtos/lista-produtos.component';
import { ListaProdutosPagosComponent } from './pages/lista-produtos-pagos/lista-produtos-pagos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ListaProdutosComponent, ListaProdutosPagosComponent, HeaderComponent, FooterComponent, MatButtonModule, MatSidenavModule,ScreenSizeDirective,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'desafio-fullstack';
  showFiller = false;
  sidebarSignal = inject(SideBarSignal);
  screenSignal = inject(ScreenSizeSignal);
  currentScreen = '';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggle() {
    this.sidenav.toggle();
  }
  computeSize(size: string) {
    this.currentScreen = size;
  }
}
