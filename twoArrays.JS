twoArrays = (k, A, B) => {
    let aOrdenado = A.sort(function (a, b) {
        return a - b;
    })

    let bOrdenado = B.sort(function (a, b) {
        return a - b;
    })

    let aTrasPraFrente = [], bTrasPraFrente = [], result = '', tamanho = aOrdenado.length - 1;

    for (let i = tamanho; i >= 0; i--) {
        aTrasPraFrente.push(aOrdenado[i]);
        bTrasPraFrente.push(bOrdenado[i]);
    }

    let cont = 0;
    for (let i = 0; i <= tamanho; i++) {
        if ((aOrdenado[i] + bOrdenado[i]) >= k) {
            cont += 0;
        } else if ((aOrdenado[i] + bTrasPraFrente[i]) >= k) {
            cont += 0;
        } else {
            cont++;
        }
    }

    if (cont === 0) {
        result = 'YES'
    } else {
        result = 'NO'
    }

    return result;
}
