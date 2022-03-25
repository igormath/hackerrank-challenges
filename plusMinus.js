const plusMinus = (arr) => {
    let n = arr.length, pares = 0, impares = 0, zero = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            pares++;
        } else if (arr[i] < 0) {
            impares++;
        } else {
            zero++;
        }
    }
    console.log((pares / n).toFixed(6));
    console.log((impares / n).toFixed(6));
    console.log((zero / n).toFixed(6));
}
