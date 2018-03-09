export class Carrinho {
  constructor(
    public id?: number, // ?: significa q é opcional posso passar só um parametro ou os dois
    public nome?: string,
    public cpf?: string,
    public endereco?: string) { }
}
