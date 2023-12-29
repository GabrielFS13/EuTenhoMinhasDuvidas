export default class Baralho{
    constructor(){
        this.baralho = []
    }

    adicionarCarta(carta){
        this.baralho.push(carta)
    }

    embaralhar(){
        this.baralho = this.baralho.sort(() => Math.random() - 0.5);
    }

    getBaralho(){
        return this.baralho
    }
}
