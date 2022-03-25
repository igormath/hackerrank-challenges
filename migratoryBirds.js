migratoryBirds = (arr) => {
    let num = 0, cont = 0, teste = [];
    for (i = 1; i < arr.length; i++) {
        if (arr[i - 1] === arr[i]) {
            cont++;
            teste.push(arr[i]);
        }
        console.log(cont)
    }
    console.log(teste);
}
