const solveMeFirst = (a, b) => {
    if ((a >= 1 && b >= 1) && (a <= 1000 && b <= 1000)) {
        console.log(a + b)
    } else {
        console.log('a or b is under 1 or above 1000')
    }
}
