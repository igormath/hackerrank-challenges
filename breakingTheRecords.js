const breakingRecords = (scores) => {
    let min = +Infinity, max = -Infinity, minRecord = 0, maxRecord = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < min) {
            min = scores[i];
            minRecord++;
        }
        if (scores[i] > max) {
            max = scores[i];
            maxRecord++;
        }
    }

    return [(maxRecord - 1), (minRecord - 1)];

}
