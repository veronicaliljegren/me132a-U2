"use strict";

//Skapar en ny pastarätt
function createNewDish (dish, typeOfPasta, time, difficulty){
    let pasta = {
        dish: dish, 
        typeOfPasta: typeOfPasta,
        time: time, 
        difficulty: difficulty,
    };
    return pasta;
}


//Lägga till en pastarätt i databasen
function addNewDishToDatabase(pastaDatabase, pasta) {
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
        if(pasta.id == id) {
            pastas.splice(i, 1);
            return;
        }
    }
}    


//Returns all pastadishes based on name 
function pastaDishes(pastas, dish){
    let pastaByDish = [];

    for (let pasta of pastas){
        if (pasta.dish.toLowerCase() == dish.toLowerCase()) {
                pastaByDish.push(pasta);
        }
    }
    return pastaByDish;
}

function pastaBySort (pastas, typeOfPasta){
    let pastaBySort = [];

    for (let pasta of pastas){
        if (pasta.typeOfPasta == typeOfPasta){
            pastaBySort.push(pasta);
        }
    }
    return pastaBySort;
}


//Returns pasta by difficulty 
function pastaDifficulty(pastas, difficulty){
    let pastaByDifficulty = [];

   for(let pasta of pastas){
       if(pasta.difficulty.toLowerCase() == difficulty.toLowerCase()) {
           pastaByDifficulty.push(pasta);
       }
   }
    return pastaByDifficulty;
}


//skapa div 
function createDiv(pasta) {
    let li = document.createElement("div");
    li.classList.add("newDiv");
    li.id = pasta.id;

    li.innerHTML = `   
        <li>${pasta.dish}</li>
        <div>${pasta.typeOfPasta}</div>
        <div>${pasta.time}</div>
        <div>${pasta.difficulty}</div>
        <button>Remove</button>
        `;

    return li;
}


// går igenom alla pastadishes i databasen // lägger till i HTML
function visiblePasta(pastas) {
    let pastaChart = document.getElementById("pastaChart");
    pastaChart.innerHTML = "";

    for (let pasta of pastas ) {
        let pastaElement = createDiv(pasta);
        pastaChart.appendChild(pastaElement);
    }
    //lägger till remove-handlers för rätterna
    setRemovePastaHandler();
}


//När "Add your favourite dish to collection" blir klickad
function onAddDishSubmit(event){
    //Förhindrar att användaren kommer till en ny sida
    event.preventDefault();

    let name = document.getElementById("name").value;
    let typeOfPasta = document.getElementById("pastaBySort").value;
    let time = Number(document.getElementById("time").value);
    let difficulty = document.getElementById("difficulty").value;

    if(name == "") {
        return alert(`Fill the form to add a new dish`);
    }

    else if(typeOfPasta == ""){
        alert(`Fill the form to add a new dish`);
    }

    else if(time == ""){
        alert(`Fill the form to add a new dish`);
    }

    else if(difficulty == ""){
        alert(`Fill the form to add a new dish`);
    }

    let pasta = createNewDish (name,typeOfPasta, time, difficulty);

    // räkna ut den nya rättens id
    pasta.id = pastaDatabase[pastaDatabase.length - 1].id + 1;

    addNewDishToDatabase(pastaDatabase, pasta)
    visiblePasta(pastaDatabase);

    // töm all information från fälten i formuläret
    let form = document.getElementById("pasta");
    form.reset();
}

//Lägg till "click" event handler till <botton id ="add">
function setAddDishHandler(){
    let form = document.getElementById("pasta");
    form.addEventListener("submit", onAddDishSubmit)
}


//Ta bort via remove-knappen
function onRemovePastaClick(event) {
    let button = event.target;
    let id = button.parentElement.id;

    if (confirm(`Are you sure you want to remove the dish from the collection?`) == true){
        removePastaByID(pastaDatabase, id);
    }
    else {
        return false;
    }

    visiblePasta(pastaDatabase);
}

//Lägga till click-event handler till alla remove-knappar
function setRemovePastaHandler(){
    let buttons = document.querySelectorAll(".newDiv button");

    for (let button of buttons){
        button.addEventListener("click", onRemovePastaClick);
    }
}

//Filtrera pasta by dish (name)
function onFilterByDish(event) {
    event.preventDefault();
    // Vilken rätt?
    let dish = document.getElementById("filter-dish").value;
    //Välj recept beroende på rätt
    let pastas = pastaDishes(pastaDatabase, dish);
    // Visa rätterna som filtrerats beroende på rätt
    visiblePasta(pastas);

}
//Filter recepies by Pasta-sort
function onFilterBySort (event){
    event.preventDefault();
    //Vilken pastasort?
    let typeOfPasta = document.getElementById("filter-sort").value;
    //Välj recept beroende på pastasort
    let pastas = pastaBySort(pastaDatabase, typeOfPasta);
    //Visa rätterna som filtrerats beroende på sort
    visiblePasta(pastas);

}
//Filter recepies by difficulty
function onFilterByDifficulty(event){
    event.preventDefault();
    //Vilken svårighetsgrad
    let difficulty = document.getElementById("filter-difficulty").value;
    //Välj recept beroende på svårighetgrad
    let pastas = pastaDifficulty(pastaDatabase, difficulty);
    //Visa rätterna som filtrerats beroende på svårighetsgrad
    visiblePasta(pastas);
}

function onShowAllClick() {
    document.getElementById("filter-dish").value = "";
    document.getElementById("filter-sort").value = "";
    document.getElementById("filter-difficulty").value = "";
    visiblePasta(pastaDatabase);   
}

function setFilterPastaHandlers() {
    let dishForm = document.getElementById("filter-by-dish");
    let sortForm = document.getElementById("filter-by-sort");
    let difficultyForm = document.getElementById("filter-by-difficulty");
    let showAll = document.getElementById("show-all");

    dishForm.addEventListener("submit", onFilterByDish);
    sortForm.addEventListener("submit", onFilterBySort);
    difficultyForm.addEventListener("submit", onFilterByDifficulty);
    showAll.addEventListener("click", onShowAllClick);
}


//direkt-kod
visiblePasta(pastaDatabase);
setAddDishHandler();
setFilterPastaHandlers();




