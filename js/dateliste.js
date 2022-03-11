//select n°1
const date1 = document.querySelector("#date-birth1");

for (let index = 1; index <= 31; index++) {
    const option = document.createElement("option");
    option.setAttribute("value", index);
    option.innerText = index;
    const append = option;
}
//select n°2
const listMois =[
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
];
const date2 = document.querySelector('#date-birth2');
listMois.forEach((mois, index) => {
    const option = document.createElement("option"); // <option></option>
    option.setAttribute("value", index +1); // <option value=(index+1)</option>
    option.innerText = listMois;
    date2.append(option);
});

// select n°3
const d = new Date().getFullYear(); //on récupère l'année courante

const date3 = document.querySelector("#date-birth3");

for (let index = 1900; index < d; index--) {
    const option = document.createElement("option");
    option.setAttribute("id", index);
    console.log(option);
}