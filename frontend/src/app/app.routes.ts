import { RouterModule, Routes } from '@angular/router';

import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';


export const appRoutes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'login', component: LoginComponent}
];
export const RoutingModule = RouterModule.forRoot(appRoutes);
