// Interface comum para computadores
class Computer {
    constructor(ram, hdd, cpu, type) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
      this.type = type;
    }
  
    toString() {
      return `Tipo: ${this.type}, RAM: ${this.ram} GB, HDD: ${this.hdd} GB, CPU: ${this.cpu} GHz`;
    }
  }
  
  // Classe PC que implementa a interface Computer
  class PC extends Computer {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu, "PC");
    }
  }
  
  // Classe Server que implementa a interface Computer
  class Server extends Computer {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu, "Servidor");
    }
  }
  
  // Fábrica para criar instâncias de computadores com base no tipo
  class ComputerFactory {
    createComputer(type, ram, hdd, cpu) {
      if (type === "PC") {
        return new PC(ram, hdd, cpu);
      } else if (type === "Servidor") {
        return new Server(ram, hdd, cpu);
      } else {
        throw new Error("Tipo de computador desconhecido.");
      }
    }
  }
  
  // Uso da fábrica para criar instâncias de computadores
  const factory = new ComputerFactory();
  const meuPC = factory.createComputer("PC", 8, 500, 2.5);
  const meuServidor = factory.createComputer("Servidor", 32, 1000, 3.0);
  
  console.log(meuPC.toString());        // Tipo: PC, RAM: 8 GB, HDD: 500 GB, CPU: 2.5 GHz
  console.log(meuServidor.toString());  // Tipo: Servidor, RAM: 32 GB, HDD: 1000 GB, CPU: 3.0 GHz
  