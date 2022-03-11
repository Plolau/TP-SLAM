/*
 1- récupérer l'input
 2- utilisé le keypress
 3- récupérer la valeur utilisé
 4- mettre en minuscule la valeur récupéré (toLowerCase())
 5- Récupérer la Liste des langages/outils de dev
 6- Récupérer Uniquement les valeurs de ces listes
 7- Comparer votre valeur de l'input avec les valeurs de la liste
 8- Si c'est compatible, laisser afficher
 9- Si c'est non compatible, cacher le résultat
*/
//1
document.querySelector('#searchInput')
console.log(inputSearch)
//2
inputSearch.onkeyPress = (event =>{
    console.log("test")
    //3 et 4
    let Search = event.target.value.toLowercase()
    console.log(Search)
})
//5
let collectionLangage = document.querySelectorAll(".name")
console.log(collectionLangage)
//6
collectionLangage.forEach(langage =>{
    langage.textContent.toLocaleLowerCase()
    if(langage.textContent.toLocaleLowerCase().includes(Search)){

    }
})
