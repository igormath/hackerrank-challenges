migratoryBirds = (arr) => {
    let arrCount = [0, 0, 0, 0, 0], countOne = 0, countTwo = 0, countThree = 0, countFour = 0, countFive = 0, arrayIndices = [];


    arr.forEach((valor) => {
        if (valor === 1) {
            countOne++;
            arrCount[0] = countOne;
        } else if (valor === 2) {
            countTwo++;
            arrCount[1] = countTwo;
        } else if (valor === 3) {
            countThree++;
            arrCount[2] = countThree;
        } else if (valor === 4) {
            countFour++;
            arrCount[3] = countFour;
        } else if (valor === 5) {
            countFive++;
            arrCount[4] = countFive;
        }
    })

    let maior = 0;

    for (let i = 0; i < arrCount.length; i++) {
        if (arrCount[i] > maior) {
            maior = arrCount[i];
        }
    }

    for (let i = 0; i < arrCount.length; i++) {
        if (maior === arrCount[i]) {
            arrayIndices.push(i);
        }
    }

    let arrayBirds = [1, 2, 3, 4, 5];

    return arrayBirds[arrayIndices[0]];
}
