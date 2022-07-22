function bonAppetit(bill, k, b) {
    let soma = 0, divisao = 0, brianParte = 0;

    bill.forEach((value) => {
        soma += value;
    })
    divisao = soma / 2;

    brianParte = divisao + (bill[k] / 2);

    b === (soma - brianParte) ? console.log("Bon Appetit") : console.log(((soma - brianParte) - b) * -1);
}
