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
function addNewDishToDatabase (database, pasta){
    database.push(pasta);
}





