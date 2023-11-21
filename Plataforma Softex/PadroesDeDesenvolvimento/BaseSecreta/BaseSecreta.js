var SistemaSeguranca = /** @class */ (function () {
    function SistemaSeguranca() {
        this.senhaBaseSecreta = "SenhaUltraSecreta123";
        // Inicialização do sistema de segurança
        console.log("Inicializando o sistema de segurança");
    }
    SistemaSeguranca.obterInstancia = function () {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    };
    SistemaSeguranca.prototype.acessarBaseSecreta = function (senhaInserida) {
        if (senhaInserida === this.senhaBaseSecreta) {
            console.log("Acesso concedido à Base Secreta. Bem-vindo, agente!");
        }
        else {
            console.log("Acesso negado. Senha incorreta. Intruso detectado!");
        }
    };
    SistemaSeguranca.instancia = null;
    return SistemaSeguranca;
}());
// Programa principal
var agenteSecreto = SistemaSeguranca.obterInstancia();
var senhaInseridaPeloAgente = "SenhaUltraSecreta1234"; // Senha correta
agenteSecreto.acessarBaseSecreta(senhaInseridaPeloAgente);
