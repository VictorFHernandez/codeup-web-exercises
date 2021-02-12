"use strict";

function showMultiplicationTable(input){
    var i = 1
    while(i <= 10) {
        console.log(input * i);
        ++i;
    }
}

var random = Math.floor((Math.random() * 200) + 20);

for(var i = 0; i < 10; i++) {
    if (random % 2 === 0) {
        console.log(random + " is even");
    } else {
        console.log(random + " is odd");
    }
}

for(var q = 100; q >= 5; q-=5){
    console.log(q);
}