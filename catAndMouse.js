function catAndMouse(x, y, z) {
    if (Math.abs(x - z) < Math.abs(y - z)) {
        console.log("Cat A");
    } else if (Math.abs(y - z) < Math.abs(x - z)) {
        console.log("Cat B");
    } else {
        console.log("Mouse C");
    };
}
