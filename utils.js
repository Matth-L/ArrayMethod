// ------------------------------------------------- SECTION NOM -------------------------------------------------

let nom = (obj) => {
    return obj.name;
};
let tabNom = (tab) => { // rend un tableau avec uniquement les nom , ils sont triés dans l'ordre alphabétique
    let newT = tab.map(nom);
    newT.sort();
    return newT;
}
// console.log(PEOPLE.map(nom)); //donne  un tableau contenant tous les noms

// ------------------------------------------------- SECTION AGE-------------------------------------------------
let age = (obj) => {
    let age = obj.died - obj.born;
    return obj["age"] = age; //crée l'attribut age pour chaque objet 
};

let attributAge = () => { //crée l'attribut age grace au foreach pas besoin de tout parcourir 
    PEOPLE.forEach(age);
}

let agePlusGrandQue = (tab, ageDemande) => { // on rentre le tableau et l'age 
    let newT = tab.filter(obj => { return (obj.age > ageDemande) }); // filter va sur tous les et effectue un test pour filter le tab
    return newT;
};

//fonction permettant de filtrer le sexe , pas de fonction fléché car fonctionne mal avec this
function sexChoose(obj) {
    return this.has(obj.sex); // this has obj.sex va en realité regarder dans le parametre juste a coté 
    //this est relié a sexF this.has(obj.sex) ===== sexF.has(obj.sex)
};

// exportation des fonctions
module.exports = {
    attributAge,
    agePlusGrandQue,
    tabNom,
    sexChoose,
}