// Objeto Real
class InformacoesConfidenciais {
    constructor() {
      this.dados = "Estas são informações confidenciais.";
    }
  
    exibir() {
      return this.dados;
    }
  }
  
  // Proxy
class ProxyAcesso {
    constructor(nome) {
      this.informacoesConfidenciais = null;
      this.nome = nome
    }
  
    autenticar() {
      // Simulação de autenticação 
      if(this.nome.toUpperCase() == "FABIO") return true;
      else return false
    }
  
    exibir() {
      if (this.autenticar()) {
        if (!this.informacoesConfidenciais) {
          this.informacoesConfidenciais = new InformacoesConfidenciais();
        }
        return `Acesso concedido: ${this.informacoesConfidenciais.exibir()}`;
      } else {
        return "Autenticação falhou. Acesso negado.";
      }
    }
  }
  
const proxy = new ProxyAcesso("carlos");

console.log(proxy.exibir()); 
