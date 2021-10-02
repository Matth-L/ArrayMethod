function tabVal(tableau, val) {
    // On met les valeurs dans un tableau
    return tableau.push(val);
}
function tri(tableau) {
    // tri les noms
    return tableau.sort();
}
// la fonction proprieteNom s'occupe juste de préciser qu'on cherche la propriété .name 
function proprieteNom(obj, tableau) {

    let nom = obj.name;

    // nom dans tableau
    tabVal(tableau, nom);
    // tri des nom
    tri(tableau);

    return tableau;
}

let proprieteAge = (obj, tab) => {
    tableauAgePersonne(obj, tab);
    return tab;
}

function tableauAgePersonne(objet, tableau) {
    // défini l'age de la personne
    let age = objet.died - objet.born;
    // Tableau affichant l'age de la persone 
    tabVal(tableau, age);
}
module.exports = {
    //  Pas besoin d'exporter les autres car propriété nom se sert des autres
    proprieteNom,
    proprieteAge,
}
