// Interface Strategy
class Strategy {
    execute(num1, num2) {}
  }
  
  // Classes concretas que implementam a Strategy
  class SomaStrategy extends Strategy {
    execute(num1, num2) {
      return num1 + num2;
    }
  }
  
  class SubtracaoStrategy extends Strategy {
    execute(num1, num2) {
      return num1 - num2;
    }
  }
  
  class MultiplicacaoStrategy extends Strategy {
    execute(num1, num2) {
      return num1 * num2;
    }
  }
  
  // Classe Calculadora que utiliza a Strategy
  class Calculadora {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    calcular(num1, num2) {
      return this.strategy.execute(num1, num2);
    }
  }
  
  // Função para receber entrada do usuário
  function getInput(message) {
    return parseInt(prompt(message));
  }
  
  // Recebendo entrada do usuário
  const num1 = getInput("Digite o primeiro número:");
  const num2 = getInput("Digite o segundo número:");
  const operacao = prompt("Digite a operação (+ para soma, - para subtração, * para multiplicação):");
  
  let strategy;
  
  // Determinando qual Strategy usar com base na operação informada
  if (operacao === "+") {
    strategy = new SomaStrategy();
  } else if (operacao === "-") {
    strategy = new SubtracaoStrategy();
  } else if (operacao === "*") {
    strategy = new MultiplicacaoStrategy();
  } else {
    console.log("Operação inválida");
    process.exit(1);
  }
  
  // Usando a Strategy para calcular e exibir o resultado
  const calculadora = new Calculadora(strategy);
  const resultado = calculadora.calcular(num1, num2);
  
  console.log(`Resultado da operação: ${resultado}`);
  