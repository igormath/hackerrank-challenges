let alpha = Array.from(Array(26)).map((e, i) => i + 65);
let alphabet = alpha.map((x) => String.fromCharCode(x));
let arrayZeros = [];

for (let k = 0; k < alphabet.length; k++) {
    arrayZeros.push(0);
}

pangrams = (s) => {
    let caixaAlta = s.toUpperCase(), isPangram = '', pangramCont = 0;

    for (let i = 0; i < caixaAlta.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (alphabet[j] === caixaAlta.charAt(i)) {
                arrayZeros[j] = 1;
            }
        }
    }

    for (let i = 0; i < arrayZeros.length; i++) {
        if (arrayZeros[i] === 0) {
            pangramCont++;
        }
    }

    console.log(pangramCont);

    if (pangramCont > 0) {
        isPangram = 'not pangram'
    } else {
        isPangram = 'pangram'
    }

    return isPangram;
}
