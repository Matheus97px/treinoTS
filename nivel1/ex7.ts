function comprimentoTexto(texto: string):string {
    return texto.length;
}

const textoEscolhido: string = "Texto"

console.log(`a palavra escolhida:${textoEscolhido} tem um total de ${comprimentoTexto(textoEscolhido)} letras`);
