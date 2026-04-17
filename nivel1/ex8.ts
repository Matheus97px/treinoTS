function converterParaMaiusculo(texto:string):string
{
return texto.toUpperCase();
}

const textoEscolhido:string = "texto";


console.log(`a palavra: ${textoEscolhido}, ficou assim ${converterParaMaiusculo(textoEscolhido)}`)