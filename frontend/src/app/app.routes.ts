import { RouterModule, Routes } from '@angular/router';

import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastroComponent } from './cadastro/cadastro.component';


export const appRoutes: Routes = [
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'cadastro', component: CadastroComponent}
];
export const RoutingModule = RouterModule.forRoot(appRoutes);
