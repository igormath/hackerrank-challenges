fizzBuzz = (n) => {
    let arrayTeste = [];
    for (let i = 1; i <= n; i++) {
        arrayTeste.push(i);
    }

    arrayTeste.forEach((valor, indice) => {
        if ((valor % 3 === 0) && (valor % 5 === 0)) {
            arrayTeste[indice] = 'FizzBuzz';
        } else if (valor % 3 === 0) {
            arrayTeste[indice] = 'Fizz';
        } else if (valor % 5 === 0) {
            arrayTeste[indice] = 'Buzz';
        }
        console.log(arrayTeste[indice]);
    })

}
