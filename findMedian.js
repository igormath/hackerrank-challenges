findMedian = (arr) => {
    let arrayOrdenado = arr.sort(function (a, b) {
        return a - b;
    })
    let tamanho = arr.length, tamanhoArredondado = 0;
    tamanhoArredondado = Math.round((tamanho / 2));

    return (arrayOrdenado[tamanhoArredondado - 1]);
}
