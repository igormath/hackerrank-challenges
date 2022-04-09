sockMerchant = (n, ar) => {
    let arrayOrdenado = ar.sort((a, b) => {
        return a - b;
    })

    let atual = arrayOrdenado[0], valores = [], soma = 0, numberOfPairs = 0;

    for (let i = 0; i < n; i++) {
        if (atual === arrayOrdenado[i]) {
            soma++;
        } else {
            atual = arrayOrdenado[i];
            valores.push(soma)
            soma = 1;
        }
    }
    valores.push(soma)

    valores.forEach((value) => {
        numberOfPairs += Math.floor(value / 2);
    })

    return numberOfPairs;
}

sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);
