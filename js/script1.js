class Produto {
  constructor() {
    this.id = 0;
    this.nomeProduto = "";
    this.preco = 0;
  }

  salvar() {
    alert("Adicionando um produto!");
  }
  excluir() {
    alert("Excluindo um produto!");
  }
}
var produto = new Produto();
