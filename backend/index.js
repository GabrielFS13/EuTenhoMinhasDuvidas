import Baralho from './Baralho/Baralho.js'
import Carta from './Carta/Carta.js'

function iniciarBaralho() {
    const BaralhoDeCartas = new Baralho()
    for (let j = 0; j < 4; j++) {
        for (let i = 1; i <= 13; i++) {
            //Verificar o número correto
            let valorCorreto = 0
            //Convertido para Strings para evitar conflito na hora de comparar as cartas na função de "Dúvidar"
            if (i > 1 && i < 11) valorCorreto = String(i)
            else if (i === 11) valorCorreto = 'J'
            else if (i === 12) valorCorreto = 'Q'
            else if (i === 13) valorCorreto = 'K'
            else valorCorreto = 'A'
            switch (j) {
                case 0:
                    //                                           Preto cor do naipe
                    BaralhoDeCartas.adicionarCarta(new Carta('Paus', valorCorreto, '#000'))
                    break
                case 1:
                    //                                            Vermelho cor do naipe
                    BaralhoDeCartas.adicionarCarta(new Carta('Copas', valorCorreto, '#F00'))
                    break
                case 2:
                    BaralhoDeCartas.adicionarCarta(new Carta('Espadas', valorCorreto, '#000'))
                    break
                case 3:
                    BaralhoDeCartas.adicionarCarta(new Carta('Ouro', valorCorreto, '#F00'))
                    break
                default:
                    console.error("Ocorreu um erro")
                    break
            }
        }
    }

    console.table(BaralhoDeCartas.getBaralho())
    BaralhoDeCartas.embaralhar()
    console.table(BaralhoDeCartas.getBaralho())
}


iniciarBaralho()