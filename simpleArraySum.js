function simpleArraySum(ar) {
    let soma = 0;
    for (let i = 0; i < ar[0]; i++) {
        soma += ar[i + 1];
    }
    return soma;
}
