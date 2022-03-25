const birthdayCakeCandles = (arr) => {
    let maior = 0, contMaior = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === maior) {
            contMaior++;
        }
    }
    return contMaior;
}
