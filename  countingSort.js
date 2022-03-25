countingSort = (arr) => {
    let arrayZeros = [];

    for (let i = 0; i < 100; i++) {
        arrayZeros.push(0);
    }

    arr.forEach((valor) => {
        arrayZeros[valor] += 1;
    })

    return arrayZeros;
}
