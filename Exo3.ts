interface Etudiant{
    nom:string;
    note: number[];
}

function calculerMoyenne(etudiant: Etudiant):number{
    let total: number = 0;
    for(let i = 0; i < etudiant.note.length; i++){
        total += etudiant.note[i]
    }
    return total / etudiant.note.length;
}

function afficherMoyenne(etudiant: Etudiant){
    const moyenne = calculerMoyenne(etudiant);
    console.log("La moyenne de",etudiant.nom,"est",moyenne);
}
const etudiants: Etudiant[] = [
    { nom: "Lenny", note: [14, 16, 16] },
    { nom: "Noia", note: [12, 11] },
    { nom: "Even", note: [10, 13, 15, 12] }
];
for (const etudiant of etudiants) {
    afficherMoyenne(etudiant);
}