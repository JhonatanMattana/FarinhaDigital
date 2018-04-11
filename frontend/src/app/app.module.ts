import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PrincipalComponent } from './principal/principal.component';
import { CarrinhoService } from './carrinho/carrinho.service';
import { CadastroComponent } from './cadastro/cadastro.component';

import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { RoutingModule } from './app.routes';
//import { appRoutes } from './app.routes';

import { CollapseModule } from 'ngx-bootstrap/collapse';
//import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarrinhoComponent,
    PrincipalComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RoutingModule
  ],
  providers: [CarrinhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
