flippingBits = (n) => {
    let binario = n.toString(2), binario32bits = 0, quantZeros = '', newBinary = '', newDecimal = 0;

    if (binario.length < 32) {
        for (let i = 0; i < (32 - binario.length); i++) {
            quantZeros += '0';
        }
    }
    binario32bits = quantZeros + binario;

    for (let i = 0; i < binario32bits.length; i++) {
        if (binario32bits.charAt(i) === '0') {
            newBinary += '1';
        } else if (binario32bits.charAt(i) === '1') {
            newBinary += '0';
        }
    }

    newDecimal = parseInt(newBinary, 2);

    return newDecimal;
}
