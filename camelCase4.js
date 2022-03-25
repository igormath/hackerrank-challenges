function combinaVariavel(palavra) {
    let arrayPalavras = palavra.split(" ");
    let palavraSomada = arrayPalavras[0];

    for (let i = 1; i < arrayPalavras.length; i++) {
        palavraSomada += ((arrayPalavras[i]).charAt(0).toUpperCase() + arrayPalavras[i].slice(1));
    }

    return palavraSomada;
}

function splitClass(word) {
    let separa = word.split(/(?=[A-Z])/), soma = '';
    for (let i = 0; i < separa.length; i++) {
        soma += separa[i] + ' ';
    }
    min = soma.toLowerCase()

    return min;
}

function processData(input) {
    let operationOption = input.slice(0, 1), typeOperation = input.slice(2, 3), wordToTransform = input.slice(4), combinedVar = '', combinedClass = '', methodToSplit = 0;
    if ((operationOption === 'C') && (typeOperation === 'V')) {
        console.log(combinaVariavel(wordToTransform));
    } else if ((operationOption === 'C') && (typeOperation === 'C')) {
        combinedVar = combinaVariavel(wordToTransform);
        combinedClass = (combinedVar.charAt(0).toUpperCase() + combinedVar.slice(1));
        console.log(combinedClass);
    } else if ((operationOption === 'C') && (typeOperation === 'M')) {
        combinedVar = combinaVariavel(wordToTransform);
        console.log(combinedVar + '()');
    } else if ((operationOption === 'S') && (typeOperation === 'C')) {
        console.log(splitClass(wordToTransform));
    } else if ((operationOption === 'S') && (typeOperation === 'V')) {
        console.log(splitClass(wordToTransform));
    } else if ((operationOption === 'S') && (typeOperation === 'M')) {
        methodToSplit = wordToTransform.slice(0, -2);
        console.log(splitClass(methodToSplit));
    }

}
