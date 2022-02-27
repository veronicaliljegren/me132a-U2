"use strict"

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

//Lägga till pastarätten i databasen
function addNewDishToDatabase (pastaDatabase, pasta){
    pastaDatabase.push(pasta);
}


// //Returns all pastadishes 
// function pastaDishes(pastaDatabase, dish){
//     let  = [];

//     for (let pasta of pastaDatabase){
//         pastaDatabase.push(pasta);
//     }
//     return dogsByBreed;
// }


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
    // <button type="button">Remove</button>
    `;("")

    return div;
}

//här går varje pasta igenom min databas
function visiblePasta(){
    for ( let pasta of pastaDatabase ){
        let pastaElement = createDiv(pasta);
        let newDiv = document.getElementById("newDiv");
        newDiv.appendChild(pastaElement);
    }
}

visiblePasta();


