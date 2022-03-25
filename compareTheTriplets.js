const compareTriplets = (a, b) => {
    let aliceTotalPoints = 0, bobTotalPoints = 0;
    for (let i = 0; i <= 3; i++) {
        if (a[i] > b[i]) {
            aliceTotalPoints += 1;
        } else if (b[i] > a[i]) {
            bobTotalPoints += 1;
        }
    }

    let resultsArray = [aliceTotalPoints, bobTotalPoints];
    return resultsArray;
}
