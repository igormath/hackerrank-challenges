gradingStudents = (grades) => {
    let zeroACem = [], multiplos = [], novaNota = 0, j = 0;
    for (let i = 0; i <= 100; i++) {
        zeroACem.push(i);
    }

    zeroACem.forEach((value) => {
        if (value % 5 === 0) {
            multiplos.push(value);
        }
    })
    let novoArray = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 40) {
            novoArray.push(grades[i]);
        } else if ((grades[i] + 1) % 5 === 0) {
            novoArray.push(grades[i] + 1);
        } else if ((grades[i] + 2) % 5 === 0) {
            novoArray.push(grades[i] + 2);
        } else {
            novoArray.push(grades[i]);
        }

    }
    console.log(novoArray);

}
