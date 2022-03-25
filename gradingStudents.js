gradingStudents = (grades) => {
    let novoArray = [];
    grades.forEach((valor) => {
        if (valor < 38) {
            novoArray.push(valor);
        } else if ((valor + 1) % 5 === 0) {
            novoArray.push(valor + 1);
        } else if ((valor + 2) % 5 === 0) {
            novoArray.push(valor + 2);
        } else {
            novoArray.push(valor);
        }
    })
    return novoArray;
}
