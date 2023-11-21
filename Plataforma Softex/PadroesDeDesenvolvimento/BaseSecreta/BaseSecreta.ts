class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "SenhaUltraSecreta123";
  
    private constructor() {
      // Inicialização do sistema de segurança
      console.log("Inicializando o sistema de segurança");
    }
  
    public static obterInstancia(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    public acessarBaseSecreta(senhaInserida: string): void {
      if (senhaInserida === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta. Bem-vindo, agente!");
      } else {
        console.log("Acesso negado. Senha incorreta. Intruso detectado!");
      }
    }
  }
  
  // Programa principal
  const agenteSecreto = SistemaSeguranca.obterInstancia();
  const senhaInseridaPeloAgente = "SenhaUltraSecreta1234"; // Senha correta
  
  agenteSecreto.acessarBaseSecreta(senhaInseridaPeloAgente);
  