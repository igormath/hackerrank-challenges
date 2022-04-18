countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let contApples = 0, contOranges = 0;

    apples.forEach((value) => {
        let soma = 0;
        soma = value + a;
        if ((soma >= s) && (soma <= t)) {
            contApples++;
        }
    })

    oranges.forEach((value) => {
        let soma = 0;
        soma = value + b;
        if ((soma >= s) && (soma <= t)) {
            contOranges++;
        }
    })

    console.log(contApples + '\n' + contOranges)
}
