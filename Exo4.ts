function inverserMot(mot: string): string {
    let motInverse = "";
    for (let i = mot.length - 1; i >= 0; i--) {
        motInverse += mot[i];
    }
    return motInverse;
}

console.log(inverserMot("chat"));
console.log(inverserMot("bonjour"));
console.log(inverserMot("TypeScript"));
console.log(inverserMot("kawak"));
