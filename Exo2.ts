interface Utilisateur {
    nom : string;
    age : number;
}

function estMajeur(user: Utilisateur): boolean {
   return user.age >= 18
}

const lenny: Utilisateur = {nom: "Lenny", age: 20}
const adam: Utilisateur = {nom: "Adam", age: 19}

function afficherMajorite(utilisateur: Utilisateur): void{
    if(estMajeur(utilisateur)) {
        console.log(utilisateur.nom,"est majeur")
    }
    else {
        console.log(utilisateur.nom,"n'est pas majeur")
    }
}

afficherMajorite(lenny);
afficherMajorite(adam);