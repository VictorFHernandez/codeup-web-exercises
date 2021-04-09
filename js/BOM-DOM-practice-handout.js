console.log("Hello there, am I hooked up");

//TODO: When the #changeBoxSize button is clicked the box should double in size from what it was!

var changesizeBtn = document.getElementById("changeBoxSize");

changesizeBtn.addEventListener("click", function(e){
    console.log(e);
    var targetBox = document.getElementById("box");

    targetBox.style.height = "500px";
    targetBox.style.width = "500px";
})

//TODO: I have two CSS classes - toggleClass1 and toggleClass2 - that are currently unused. When the #toggleClass button is clicked, program a bit of JavaScript to toggle between those classes to see the background-color switch back and forth with each click. Bonus: Write your callback function in a variable and use it instead!

var toggleClassBtn = document.getElementById("toggleClass");

toggleClassBtn.addEventListener("click", function (e) {
    var targetBox = document.getElementById("box");


    //if "a", then do "b"
    //if "b", then do "a"
    //if neither - set "a" (which would start the process differently next click)
    if(targetBox.getAttribute("class") === "toggleClass1"){
        targetBox.setAttribute("class", "toggleClass2");
    } else if (targetBox.getAttribute("class") === "toggleClass2"){
        targetBox.setAttribute("class", "toggleClass1")
    } else {
        targetBox.setAttribute("class", "toggleClass1");
    }

})

//TODO: In the #boxInfo element, when the BOX is hovered over the HEIGHT and WIDTH of the box would appear in that HTML area [div]

var displayBoxInfo = document.getElementById("boxInfo");
var theBox = document.getElementById("box");

console.log(displayBoxInfo);
console.log(theBox);

//A "hover" is really a combo of TWO events: the mouse entering the area and then the mouse leaving the area (thus "mouseenter", "mouseleave" as events)
theBox.addEventListener("mouseenter", function(){
    displayBoxInfo.innerText = "The width of the box is: " + document.getElementById("box").style.width + ". The height of the box is: " + document.getElementById("box").style.height;

})

theBox.addEventListener("mouseleave", function(){

    displayBoxInfo.innerText = "";

})

//TODO: When the user types in to our #input and then clicks #inputBtn, what they typed into the input box should replace what was inside of the span #userName with the input box's contents
//i. grab our #input, #inputBtn, and our #userName in some way to use
//ii. WHEN inputBtn is clicked > #userName span innerText REPLACED w/ value #input

// var inputBtn = document.getElementById("inputBtn");
// var userInput = document.getElementById("input");
// var replaceSpan = document.getElementById("userName");
//
// inputBtn.addEventListener("click",function(){
//
//     var inputArr = userInput.value.split("");
//     inputArr[0] = inputArr[0].toUpperCase();
//     var upperCased = inputArr.join("");
//
//     replaceSpan.innerText = upperCased;
//
//     userInput.value = "";
// })


//TODO: Refactor the above work - after 5 seconds have passed from the user clicking #inputBtn and seeing #userName change, change the entire div of #helloUser to say "Let me know if you want to play a game. ."

var inputBtn = document.getElementById("inputBtn");
var userInput = document.getElementById("input");
var replaceSpan = document.getElementById("userName");

inputBtn.addEventListener("click",function(){
    var helloUserDiv = document.getElementById("helloUser");
    console.log(helloUserDiv.children);
    if (helloUserDiv.children > 0){
        helloUserDiv.innerHTML = "<div id=\"helloUser\">Hola, ni hao, guten tag, hello, bonjour to you, <span id=\"userName\">user</span>!</div>";}

    var inputArr = userInput.value.split("");
    inputArr[0] = inputArr[0].toUpperCase();
    var upperCased = inputArr.join("");

    replaceSpan.innerText = upperCased;

    userInput.value = "";

    //So: we need to grab #helloUser > setTimeout > cb function: replace innerText/innerHTML with string of "Let me know if you want to play a game. ."

    setTimeout(function(){
        helloUserDiv.innerText = "Let me know if you want to play a game . ."
    }, 5000)
})