"use strict";

// For Loop Exercise 1:

function showMultiplicationTable(input){
   for (var i = 1; i <= 10; i++){
       console.log(input + " x " + i + " = " + (input * i));
   }
}

// For Loop Exercise 2:

for(var i = 0; i < 10; i++) {
    var random = Math.floor((Math.random() * 180) + 20);
    if (random % 2 === 0) {
        console.log(random + " is even");
    } else {
        console.log(random + " is odd");
    }
}

// For Loop Exercise 3:

for(var outerLoop = 1; outerLoop <= 9; outerLoop++){
    var output = "";
    for (var innerLoop = 1; innerLoop <= outerLoop; innerLoop++){
        output = output + outerLoop;
    }
    console.log(output);
}

// For Loop Exercise 4:

for(var q = 100; q >= 5; q-=5){
    console.log(q);
}


