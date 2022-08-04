function designerPdfViewer(h, word) {
    const arrayAlfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], tamanhoDaPalavra = word.length;
    let maior = -Infinity;
    for (let i = 0; i < tamanhoDaPalavra; i++) {
        if (h[arrayAlfabeto.indexOf(word.charAt(i))] > maior) {
            maior = h[arrayAlfabeto.indexOf(word.charAt(i))];
        }
    }

    return maior * tamanhoDaPalavra;
}
