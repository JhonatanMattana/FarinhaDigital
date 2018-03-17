import { RouterModule, Routes } from '@angular/router';

import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';


export const appRoutes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'cadastro', component: CadastroComponent}
];
export const RoutingModule = RouterModule.forRoot(appRoutes);
