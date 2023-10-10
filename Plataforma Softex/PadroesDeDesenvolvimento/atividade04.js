// Classe Pato (existente)
class Pato {
    quack() {
      console.log("Quack! Quack!");
    }
  
    voar() {
      console.log("Voando como um pato.");
    }
  }
  
  // Classe Galinha (alvo)
  class Galinha {
    cacarejar() {
      console.log("Cacarejo!");
    }
  
    voarCurto() {
      console.log("Voando curto, não muito alto.");
    }
  }
  
  // Classe AdaptadorPato (adaptador)
  class AdaptadorPato {
    constructor(pato) {
      this.pato = pato;
    }
  
    cacarejar() {
      this.pato.quack();
    }
  
    voarCurto() {
      this.pato.voar();
    }
  }
  
  // Classe AdaptadorPatoDemo (demo)
  class AdaptadorPatoDemo {
    static testarAdaptador(patoAdaptado) {
      console.log("Ação da Galinha:");
      patoAdaptado.cacarejar();
      patoAdaptado.voarCurto();
    }
  }
  
  // Teste do adaptador
  const pato = new Pato();
  const adaptador = new AdaptadorPato(pato);
  
  console.log("Ação do Pato:");
  pato.quack();
  pato.voar();
  
  console.log("\nAção da Galinha adaptada como Pato:");
  AdaptadorPatoDemo.testarAdaptador(adaptador);
  