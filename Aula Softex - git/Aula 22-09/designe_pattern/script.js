var Correr = /** @class */ (function () {
    function Correr() {
    }
    Correr.prototype.comecar = function () {
        console.log("Correr uma maratona...");
    };
    return Correr;
}());
var Musculacao = /** @class */ (function () {
    function Musculacao() {
    }
    Musculacao.prototype.comecar = function () {
        console.log("Fazer musculação na academia...");
    };
    return Musculacao;
}());
var Futebol = /** @class */ (function () {
    function Futebol() {
    }
    Futebol.prototype.comecar = function () {
        console.log("Jogar futebol com os amigos...");
    };
    return Futebol;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, exercicioFavorito) {
        this.nome = nome;
        this.exercicioFavorito = exercicioFavorito;
    }
    Pessoa.prototype.exercitar = function () {
        console.log("".concat(this.nome, " decidiu: "));
        this.exercicioFavorito.comecar();
    };
    return Pessoa;
}());
var Carlos = new Pessoa('Fabio', new Musculacao());
console.log(Carlos.exercitar());
