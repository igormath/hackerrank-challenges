countingValleys = (steps, path) => {
    let altura = 0, contValley = 0;

    for (let i = 0; i < steps; i++) {
        if (path.charAt(i) === 'U') {
            altura++;
        } else if ((path.charAt(i) === 'D') && (altura === 0)) {
            altura--;
            contValley++;
        } else if (path.charAt(i) === 'D') {
            altura--;
        }
    }

    return contValley;
}
