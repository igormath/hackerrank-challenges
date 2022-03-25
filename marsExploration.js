
marsExploration = (s) => {
    let arraySequencia = [], divisor = ((s.length) / 3), arrayConjunto = [], j = 0, cont = 0, arrayIncorretos = [];

    arraySequencia = s.split('');

    for (let i = 0; i < divisor; i++) {
        arrayConjunto.push(arraySequencia[j] + arraySequencia[j + 1] + arraySequencia[j + 2]);
        j += 3;
    }

    for (let i = 0; i < arrayConjunto.length; i++) {
        if (arrayConjunto[i] !== 'SOS') {
            arrayIncorretos.push(arrayConjunto[i]);
        }
    }

    console.log(arrayIncorretos);

    arrayIncorretos.forEach((valor) => {
        if (valor.charAt(0) !== 'S') {
            cont++;
        }
        if (valor.charAt(1) !== 'O') {
            cont++;
        }
        if (valor.charAt(2) !== 'S') {
            cont++;
        }
    })

    return cont;
}
