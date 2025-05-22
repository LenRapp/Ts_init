function filtrerPairs(nombres: number[]): number[] {
    let pairs: number[] = [];
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] % 2 === 0) {
            pairs.push(nombres[i]);
        }
    }
    return pairs;
}

const tableau = [1, 2, 3, 4, 5, 6];
const resultat = filtrerPairs(tableau);
console.log(resultat);
