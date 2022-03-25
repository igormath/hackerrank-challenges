divisibleSumPairs = (n, k, ar) => {
    let soma = 0, cont = 0;
    for (let i = 0; i < n; i++) {
        for (let j = (i + 1); j < n; j++) {
            soma = ar[i] + ar[j];
            if (soma % k === 0) {
                cont++;
            }
        }
    }
    return cont;
}
