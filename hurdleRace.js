function hurdleRace(k, height) {
    let maxHeight = -Infinity;
    height.forEach((value) => {
        if (value > k && value > maxHeight) {
            maxHeight = value;
        }
    })

    if (maxHeight > k) {
        return (maxHeight - k)
    } else {
        return 0
    };
}
