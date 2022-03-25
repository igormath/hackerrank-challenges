matchingStrings = (strings, queries) => {
    let cont, resultsArray = [];
    for (let i = 0; i < queries.length; i++) {
        cont = 0;
        for (let j = 0; j < strings.length; j++) {
            if (strings[j] === queries[i]) {
                cont++;
            }
        }
        resultsArray.push(cont);
    }
    return resultsArray;
}
