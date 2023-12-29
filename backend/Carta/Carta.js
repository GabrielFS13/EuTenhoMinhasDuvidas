export default class Carta{
    constructor(naipe, valor, cor){
        //Naipes possiveis: Espadas, Copas, Ouro e Paus
        this.naipe = naipe
        this.valor = valor
        this.cor = cor
    }

    getCardInfos(){
        return `Naipe: ${this.naipe} Valor: ${this.valor}`
    }
}