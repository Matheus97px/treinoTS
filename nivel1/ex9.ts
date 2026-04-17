function media(numero1:number, numero2:number, numero3:number):number {

    const soma: number = numero1 + numero2 + numero3
    const media:number = soma / 3
    return media

}

const numeroEscolhido1:number = 7
const numeroEscolhido2:number = 6
const numeroEscolhido3:number = 8

console.log(`a media dos numeros é ${media(numeroEscolhido1, numeroEscolhido2, numeroEscolhido3)}`);


function media2(...numeros: number[]):number{
    const soma = numeros.reduce((acc, num) => acc + num, 0);

    return soma / numeros.length;
}

console.log(`a media dos numeros é ${media2(numeroEscolhido1, numeroEscolhido2, numeroEscolhido3)}`);