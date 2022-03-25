const ehIgual = (arr2) => {
    let atual = arr2[0], isEqual;
    for (let i = 0; i < arr2.length; i++) {
        if (atual === arr2[i]) {
            isEqual = true;
        } else if (atual != arr2[i]) {
            isEqual = false;
        }
    }
    return isEqual;
}

const miniMaxSum = (arr) => {
    let menor = +Infinity, maior = 0, menorSoma = 0, maiorSoma = 0;
    if (!ehIgual(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maior) {
                maior = arr[i];
            }
            if (arr[i] < menor) {
                menor = arr[i];
            }
        }

        for (let k = 0; k < arr.length; k++) {
            if (arr[k] != maior) {
                menorSoma += arr[k];
            }
            if (arr[k] != menor) {
                maiorSoma += arr[k];
            }
        }
    } else {
        menorSoma = arr[0] * 4;
        maiorSoma = arr[0] * 4;
    }

    console.log(menorSoma + ' ' + maiorSoma);
}
