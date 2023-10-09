// Classe abstrata Veículo com construtor padrão e métodos clone e represent
class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
    }
  
    clone() {
      // Crie um novo objeto Veículo usando o construtor atual
      return new this.constructor(this.modelo, this.marca, this.cor, this.numeroRodas);
    }
  
    represent() {
      return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
  }
  
  // Subclasse Carro que adiciona atributos extras (exemplo: numeroPortas)
  class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
      super(modelo, marca, cor, numeroRodas);
      this.numeroPortas = numeroPortas;
    }
  
    clone() {
      // Crie um novo objeto Carro usando o construtor atual
      return new this.constructor(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }
  
    represent() {
      return `${super.represent()}, Portas: ${this.numeroPortas}`;
    }
  }
  
  // Subclasse Moto que adiciona atributos extras (exemplo: tipo)
  class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, tipo) {
      super(modelo, marca, cor, numeroRodas);
      this.tipo = tipo;
    }
  
    clone() {
      // Crie um novo objeto Moto usando o construtor atual
      return new this.constructor(this.modelo, this.marca, this.cor, this.numeroRodas, this.tipo);
    }
  
    represent() {
      return `${super.represent()}, Tipo: ${this.tipo}`;
    }
  }
  
  // Classe Aplicação
  class Aplicacao {
    constructor() {
      this.veiculos = [
        new Carro("Sedan", "Toyota", "Azul", 4, 4),
        new Carro("Esportivo", "Ferrari", "Vermelho", 4, 2),
        new Carro("Hatchback", "Volkswagen", "Preto", 4, 5),
        new Moto("Esportiva", "Yamaha", "Branco", 2, "Esportiva"),
        new Moto("Custom", "Harley-Davidson", "Preto", 2, "Custom"),
        new Moto("Scooter", "Honda", "Azul", 2, "Scooter"),
      ];
    }
  
    cloneVeiculos() {
      // Crie um array com clones dos veículos
      return this.veiculos.map((veiculo) => veiculo.clone());
    }
  
    representarVeiculos(veiculos) {
      veiculos.forEach((veiculo) => {
        console.log(veiculo.represent());
      });
    }
  
    run() {
      const clones = this.cloneVeiculos();
      this.representarVeiculos(clones);
    }
  }
  
  const app = new Aplicacao();
  app.run();
  