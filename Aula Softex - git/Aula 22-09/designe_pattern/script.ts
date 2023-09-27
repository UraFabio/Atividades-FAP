interface ExercicioFavorito{
    comecar():void
}

class Correr implements ExercicioFavorito{
    comecar(): void{
        console.log("Correr uma maratona...")
    }
}

class Musculacao implements ExercicioFavorito{
    comecar(): void {
        console.log("Fazer musculação na academia...")
    }
}

class Futebol implements ExercicioFavorito{
    comecar(): void {
        console.log("Jogar futebol com os amigos...")
    }
}

class Pessoa{
    nome: string
    exercicioFavorito: ExercicioFavorito

    constructor(nome: string, exercicioFavorito: ExercicioFavorito){
        this.nome = nome
        this.exercicioFavorito = exercicioFavorito
    }

    exercitar():void{
        console.log(`${this.nome} decidiu: `)
        this.exercicioFavorito.comecar()
    }
}

const Carlos = new Pessoa('Fabio', new Musculacao())

console.log(Carlos.exercitar())