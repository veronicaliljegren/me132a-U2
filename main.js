"use strict";

//Skapar en ny pastarätt
function createNewDish (id, dish, typeOfPasta, time, difficulty){
    let pasta = {
        id: id, 
        dish: dish, 
        typeOfPasta: typeOfPasta,
        time: time, 
        difficulty: difficulty,
    };
    return pasta;
}


//Lägga till en pastarätt i databasen
function addNewDishToDatabase(pastaDatabase, pasta){
    pastaDatabase.push(pasta);

    let saveTheDish = confirm(`Do you want to add ${pasta.dish} to the collection?`);
    
    if(saveTheDish){
        pastaDatabase.push(pasta);
    }
}

// Ta bort en pastarätt från databasen
function removePastaByID(pastas, id) {
    for (let i = 0; i < pastas.length; i++) {
        let pasta = pastas[i];
        if( pasta.id == id) {
            pastas.splice(i, 1);
            return;
        }
    }
}    


//Returns all pastadishes based on name 
function pastaDishes(pastas, dish){
    let pastaDish = [];

    for (let pasta of pastas){
        if (pasta.dish.toLowerCase()== dish.toLowerCase()){
            pastaDishes.push(pasta);
        }
    }
    return pastaDish;
}

//Returns pasta by difficulty 
function pastaDifficulty(pastas, difficulty){
    let pastaDifficulty = [];

    for (let pasta of pastas){
        if (pasta.difficulty.toLowerCase()== difficulty.toLowerCase()){
            pastaDatabase.push(pasta);
        }
    }
    return pastaDifficulty;
}

//skapa div 
function createDiv(pasta) {
  
    let li = document.createElement("li");
    li.classList.add("newDiv");
    li.id = pasta.id;

    li.innerHTML = `   
        <li>${pasta.dish}</li>
        <div>${pasta.typeOfPasta}</div>
        <div>${pasta.time}</div>
        <div>${pasta.difficulty}</div>
        <button type="button">Remove</button>
        `;

    return li;
}

//här går varje pasta igenom min databas
function visiblePasta(){
    for ( let pasta of pastaDatabase ){
        let pastaElement = createDiv(pasta);
        let pastaChart = document.getElementById("pastaChart");
        pastaChart.appendChild(pastaElement);
    }
    setRemovePastaHandler();
}


//När <form id="pasta" is submitted
function onAddDishSubmit(event){
    //Förhindrar att användaren kommer till en ny sida
    event.preventDefault();

    let name = document.getElementById("name").value;
    let time = Number(document.getElementById("time").value);
    let difficulty = document.getElementById("difficulty").value;

    let pasta = createNewDish ( name, time, difficulty);

    //
    pasta.id = pastaDatabase[pastaDatabase.length-1].id + 1;

    addNewDishToDatabase(pastaDatabase, pasta)
    visiblePasta(pastaDatabase);

    let form = document.getElementById("pasta");
    form.reset();
}

//Lägg till "click" event handler to <botton id ="add">
function setAddDishHandler(){
    let click = document.getElementById("pasta");
    click.addEventListener("submit", onAddDishSubmit)
}

//Ta bort via remove-knappen
function onRemovePastaClick(event) {
    let button = event.target;
    let id = button.parentElement.id;

    removePastaByID(pastaDatabase, id);
    visiblePasta(pastaDatabase);
}

//Lägga till click-event handler till alla remove-knappar
function setRemovePastaHandler(){
    let buttons = document.querySelectorAll(".newDiv button");

    for (let button of buttons){
        button.addEventListener("click", onRemovePastaClick);
    }
}

//Filter recepies by dish
function onFilterByDish(event){
    event.preventDefault();
    // Vilken rätt?
    let dish = document.getElementById("filter-dish").value;
    //Välj recept beroende på rätt
    let pastas = pastaDishes(pastaDatabase, dish);
    // Visa rätterna som filtrerats beroende på rätt
    visiblePasta(pastas);

}
//Filter recepies by time
function onFilterByTime (event){
    event.preventDefault(event)
    //Vilken tid?
    let time =document.getElementById("filter-time").value;
    //Välj recept beroende på tid
    let pastas = pastaTime(pastaDatabase, time);
    //Visa rätterna som filtrerats beroende på tid
    visiblePasta(pastas);

}
//Filter recepies by difficulty
function onFilterByDifficulty(event){
    event.preventDefault();
    //Vilken svårighetsgrad
    let difficulty = document.getElementById("filter-difficulty").value;
    //Välj recept beroende på svårighetgrad
    let pastas = pastaTime(pastaDatabase, difficulty);
    //Visa rätterna som filtrerats beroende på svårighetsgrad
    visiblePasta(pastas);
}

function onShowAllClick() {
    document.getElementById("filter-dish").value = "";
    document.getElementById("filter-time").value = "";
    document.getElementById("filter-difficulty").value = "";
    visiblePasta(pastaDatabase);   
}

function setFilterPastaHandlers() {
    let dishForm = document.getElementById("filter-by-dish");
    let timeForm= document.getElementById("filter-by-time");
    let difficultyForm= document.getElementById("filter-by-difficulty");
    let showAll = document.getElementById("show-all");

    dishForm = document.addEventListener("submit", onFilterByDish);
    timeForm = document.addEventListener("submit", onFilterByTime);
    difficultyForm = document.addEventListener("submit", onFilterByDifficulty);
    showAll = document.addEventListener("click", onShowAllClick);
}



visiblePasta();
setAddDishHandler();
setFilterPastaHandlers();




