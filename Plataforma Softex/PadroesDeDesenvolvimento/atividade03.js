// Classe base para o sanduíche
class Sanduiche {
    constructor() {
      this.descricao = "Sanduíche";
    }
  
    custo() {
      return 0;
    }
  
    descricaoDoSanduiche() {
      return this.descricao;
    }
  }
  
  // Classe concreta para o sanduíche de frango assado
  class FrangoAssado extends Sanduiche {
    constructor() {
      super();
      this.descricao = "Sanduíche de Frango Assado";
    }
  
    custo() {
      return 4.50;
    }
  }
  
  // Decorator para o pepperoni
  class Pepperoni extends Sanduiche {
    constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
    }
  
    custo() {
      return this.sanduiche.custo() + 0.99;
    }
  
    descricaoDoSanduiche() {
      return this.sanduiche.descricaoDoSanduiche() + ", Pepperoni";
    }
  }
  
  // Decorator para o queijo mussarela ralado
  class QueijoMussarelaRalado extends Sanduiche {
    constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
    }
  
    custo() {
      return this.sanduiche.custo() + 2.00;
    }
  
    descricaoDoSanduiche() {
      return this.sanduiche.descricaoDoSanduiche() + ", Queijo Mussarela Ralado";
    }
  }
  
  // Criando o sanduíche de frango assado com pepperoni e queijo mussarela ralado
  let meuSanduiche = new FrangoAssado();
  meuSanduiche = new Pepperoni(meuSanduiche);
  meuSanduiche = new QueijoMussarelaRalado(meuSanduiche);
  
  // Exibindo a descrição e o custo do sanduíche
  console.log(meuSanduiche.descricaoDoSanduiche() + " custa $" + meuSanduiche.custo().toFixed(2));
  