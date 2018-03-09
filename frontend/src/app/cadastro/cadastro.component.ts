import { Component, OnInit } from '@angular/core';
//import { CadastroService } from './cadastro.service';
import { Cadastro } from './cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public cadastros: Cadastro[] = [];
  public nome = '';
  public sobrenome = '';
  public endereço = '';
  public numero = '';
  public complemento = '';
  public senha = '';

  //constructor(private cadastroService: CadastroService) { }
  constructor() {}

  public ngOnInit() {
  }

  public salvar(): void {
    console.log('oi');

    const cadastro = new Cadastro();
    cadastro.nome = this.nome;
    cadastro.sobrenome = this.sobrenome;
    cadastro.endereço = this.endereço;
    cadastro.numero = this.numero;
    cadastro.senha = this.senha;

    /*this.cadastroService.addCadastro(cadastro)
      .subscribe(res => {
        console.log(res);
        this.carregaTodos();
      },
      err => {
        console.log(err);
      });
      alert("Informações salvas no banco de dados.");*/
  }

}
