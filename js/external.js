console.log("Hello from external JavaScript")

alert("Welcome to my Website")

var favoriteColor = prompt ( "What's your favorite color?")

alert("Great, " + favoriteColor + " is my favorite color too!")

var littleMermaid = parseInt(prompt("How many days have you had the Little Mermaid?"));

var brotherBear = parseInt(prompt("How many days have you had Brother Bear?"));

var hercules = parseInt(prompt("How many days have you had Hercules?"));

var totalOwed = (littleMermaid + brotherBear + hercules) * 3;

alert("You owe BlockBuster $" + totalOwed);

var hoursWorkedForGoogle = Number(prompt("How many hours did you work for Google?"));

var hoursWorkedForAmazon = Number(prompt("How many hours did you work for Amazon?"));

var hoursWorkedForFacebook = Number(prompt("How many hours did you work for Facebook?"));

var totalFromGoogle = hoursWorkedForGoogle * 400;

var totalFromAmazon = hoursWorkedForAmazon * 380;

var totalFromFacebook = hoursWorkedForFacebook * 350;

alert("You have made a total of $" + (totalFromGoogle + totalFromAmazon + totalFromFacebook) + " this week.");

var classIsFull = confirm("Is the class you are trying to join full?");

var hasScheduleConflicts = confirm("Do you have a class at 2:30 already?");

alert("You can join the class is a " + (!classIsFull && !hasScheduleConflicts) + " statement.");

var hasmoreThanTwoItems = confirm("Do you have more than two items in your cart?");

var isOfferValid = confirm("Is the offer still valid?");

var isPremiumMembers = confirm("Are you a premium member?");

var canUserUseOffer = (hasmoreThanTwoItems || isPremiumMembers) && isOfferValid;

alert("You can use this offer as a " + canUserUseOffer + " statement");








































