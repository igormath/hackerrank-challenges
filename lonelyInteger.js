lonelyinteger = (a) => {
    let diferente = 0, arrayOrdenado = a.sort((a, b) => {
        return a - b;
    })
    for (let i = 0; i < arrayOrdenado.length; i++) {
        if (a[i] === a[i + 1]) {
            i++;
        } else {
            diferente = a[i];
        }
    }
    return diferente;
}
