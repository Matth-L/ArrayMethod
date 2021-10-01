// On push dans le tableau définit au début de la fonction affiche
function tabNom(tableau, f) {
    return tableau.push(f);
}
// selon w3cschool la méthode sort , s'occupe de trier les éléments "string" de manière alphabétique
function triAlphabetique(tableau) {
    return tableau.sort();
}

module.exports = {
    tabNom,
    triAlphabetique,
}
