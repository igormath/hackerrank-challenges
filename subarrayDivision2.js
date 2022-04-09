birthday = (s, d, m) => {
    let soma = 0, count = 0, novoArray = [];
    for (let i = 0; i <= (s.length - m); i++) {
        novoArray = s.slice(i, (i + m))
        novoArray.forEach((value) => {
            soma += value;
        })
        if (soma === d) {
            count++;
        }
        soma = 0;
        novoArray = []
    }
    return count;

}
