function tabNom(tableau, f) {
    // On met les noms dans le tableau
    return tableau.push(f);
}
function tri(tableau) {
    // tri les noms
    return tableau.sort();
}
// la fonction proprieteNom s'occupe juste de préciser qu'on cherche la propriété .name 
function proprieteNom(obj, tableau) {

    let nom = obj.name;

    // nom dans tableau
    tabNom(tableau, nom);
    // tri des nom
    tri(tableau);

    return tableau;
}

module.exports = {
    //  Pas besoin d'exporter les autres car propriété nom se sert des autres
    proprieteNom,
}
