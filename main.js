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
function addNewDishToDatabase (pastaDatabase, pasta){
    console.log (`You are adding ${pasta.dish} to the database`);
    pastaDatabase.push(pasta);
}

//Ta bort en pastarätt från databasen
function removePastaByID(pastaDatabase, pasta){
    for( let pasta of pastaDishes)
    let pasta = pasta[i];

    if(pasta.id == id){
        pasta.splice(i , 1);
        return;
    }
}


//Returns all pastadishes 
function pastaDishes(pastaDatabase, dish){
    let pastaDish = [];

    for (let pasta of pastaDatabase){
        if (pasta.dish.toLowerCase()== dish.toLowerCase()){
            pastaDatabase.push(pasta);
        }
       
    }
    return pastaDish;
}

//Returns pasta by time
function pastaTime(pastaDatabase, time){
    let pastaTime = [];

    for (let pasta of pastaDatabase){
        if (pasta.time.toLowerCase()== time.toLowerCase()){
            pastaDatabase.push(pasta);
        }
       
    }
    return pastaTime;
}

//Returns pasta by difficulty 
function pastaDifficulty(pastaDatabase, difficulty){
    let pastaDifficulty = [];

    for (let pasta of pastaDatabase){
        if (pasta.difficulty.toLowerCase()== difficulty.toLowerCase()){
            pastaDatabase.push(pasta);
        }
       
    }
    return pastaDifficulty;
}

//skapa div 
function createDiv(pasta) {
  
    let div = document.createElement("div");
    div.classList.add("newDiv");
    div.id = pasta.id;

    div.innerHTML = `   
    <div>${pasta.id}</div>
    <div>${pasta.dish}</div>
    <div>${pasta.typeOfPasta}</div>
    <div>${pasta.time}</div>
    <div>${pasta.difficulty}</div>
     <button type="button">Remove</button>
    `;("")

    return div;
}

//här går varje pasta igenom min databas
function visiblePasta(){
    for ( let pasta of pastaDatabase ){
        let pastaElement = createDiv(pasta);
        let pastaChart = document.getElementById("pastaChart");
        pastaChart.appendChild(pastaElement);
    }
    setRemovePastaHandlers();
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













visiblePasta();




