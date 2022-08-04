function getMoneySpent(keyboards, drives, b) {
    let arraySomasProdutos = [];
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let soma = keyboards[i] + drives[j];
            if (soma <= b) {
                arraySomasProdutos.push(soma);
            }
            soma = 0;
        }
    }

    if (arraySomasProdutos.length === 0) {
        return -1;
    } else {
        let maior = -Infinity;
        arraySomasProdutos.forEach((valor) => {
            if (valor > maior) {
                maior = valor;
            }
        });
        return maior;
    }
}
