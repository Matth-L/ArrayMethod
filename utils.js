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

// ------------------------------------------------- SECTION CHOIX SEXE-------------------------------------------------

let sexH = (obj) => { // fonction booléenne en fonction du sexe 
    return (obj.sex == "m");
};
let sexF = (obj) => {// fonction booléenne en fonction du sexe 
    return (obj.sex == "f");
};

function sexChoose(tab, genre) { // la fonction rend un tab avec le nom des sex demandé
    let newTab = [];
    if (genre == "m") {
        newTab = tab.filter(sexH); //on filtre tous les objets il ne reste que les Hommes
    }
    else if (genre == "f") {
        newTab = tab.filter(sexF);//pareil mais avec les femmes 
    }
    //si on s'arrete la on a un tableau d'objet contenant qu'un des 2 sexes
    return tabNom(newTab);
}

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

module.exports = {
    sexChoose,
    attributAge,
    agePlusGrandQue,
    tabNom,
}