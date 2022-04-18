kangaroo = (x1, v1, x2, v2) => {
    let output = '', distanceDiff = 0, velocityDiff = 0, jumpsNeeded = 0;

    velocityDiff = v1 - v2;
    distanceDiff = x2 - x1;
    jumpsNeeded = (distanceDiff / velocityDiff);

    if (v2 > v1) {
        output = 'NO'
    } else if (!Number.isInteger(jumpsNeeded)) {
        output = 'NO'
    } else if ((jumpsNeeded * v1 + x1) === (jumpsNeeded * v2 + x2)) {
        output = 'YES'
    } else {
        output = 'NO'
    }

    return output;
}
