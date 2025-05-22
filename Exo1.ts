// @ts-ignore
function calculerSurfaceRectangle(largeur: number, hauteur: number):number {
    return largeur * hauteur;
}

const largeur =5;
const hauteur =10;
const surface = calculerSurfaceRectangle(largeur, hauteur);
console.log("La surface du rectangle est ",surface);