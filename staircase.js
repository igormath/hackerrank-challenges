const staircase = (n) => {
    let teste = '', hash = '#', space = ' ', result = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            teste = result.concat(space.repeat(n - j), hash.repeat(j));
        }
        console.log(teste)
    }
}
