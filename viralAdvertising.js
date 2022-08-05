function viralAdvertising(n) {
    let shared = 5;
    let liked = 0, count = 0;
    for (let i = 1; i <= n; i++) {
        liked = Math.floor(shared / 2);
        shared = liked * 3;
        count += liked;
    }

    return count;
}
