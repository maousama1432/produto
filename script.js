// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto {
    constructor(nome, dataCadastro, descricao, preco) {
      this.nome = nome;
      this.dataCadastro = dataCadastro;
      this.descricao = descricao;
      this.preco = preco;
    }
  
    mostrarProduto() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Data de Cadastro: ${this.dataCadastro}`);
      console.log(`Descrição: ${this.descricao}`);
      console.log(`Preço: ${this.preco}`);
    }
  }
  
  class ProdutoDestaque extends Produto {
    constructor(nome, dataCadastro, descricao, preco, imagemDestaque) {
      super(nome, dataCadastro, descricao, preco);
      this.imagemDestaque = imagemDestaque;
    }
  
    mostrarProdutoDestaque() {
      console.log(`<img src="${this.imagemDestaque}" alt="${this.nome}"/>`);
      console.log(`<h3>${this.nome}</h3>`);
      console.log(`<p>${this.descricao}</p>`);
    }
  }
  
  const produtoDestaque = new ProdutoDestaque(
    "Produto Destaque",
    "01/01/2023",
    "Este é um produto em destaque.",
    999.99,
    "caminho/para/imagem"
  );
  
  produtoDestaque.mostrarProdutoDestaque();