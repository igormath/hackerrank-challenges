diagonalDifference = (arr) => {
    let primaryDiagonal = 0, secondaryDiagonal = 0, j = arr.length;

    for (let i = 0; i < arr.length; i++) {
        j--;
        primaryDiagonal += arr[i][i];
        secondaryDiagonal += arr[i][j];
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}
