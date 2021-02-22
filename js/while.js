"use strict";

//While Loop Exercise:

var number = 2;

while(number <= 65536){
    console.log(number);
    number = number * 2;
}

//Do While Loop Exercise:

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("You have " + allCones + " cones to sell today");
do {
    var requestedCones = Math.floor(Math.random() * 5) + 1;

    if (requestedCones <= allCones){
        allCones = allCones - requestedCones;
        console.log("You sold " + requestedCones + " cones, and have " + allCones + "Cones left");
    }else{
        console.log("Sorry I don't have " + requestedCones + " cones, I only have " + allCones);
    }

}while (allCones > 0)
