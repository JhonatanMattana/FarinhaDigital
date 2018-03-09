export class Cadastro {
  constructor(
    public id?: number, // ?: significa q é opcional posso passar só um parametro ou os dois
    public nome?: string,
    public sobrenome?: string,
    public endereço?: string,
    public numero?: string,
    public complemento?: string,
    public senha?: string) { }
}
