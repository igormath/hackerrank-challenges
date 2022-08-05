function utopianTree(n) {
    let height = 1
    if (n === 0) {
        return 1;
    } else {
        for (let i = 1; i <= n; i++) {
            i % 2 === 0 ? height++ : height = height * 2;
        }
        return height;
    }
}
