function getMilk(dollar) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + (Math.floor(dollar/1.5)) + " bottles of milk")
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
getMilk(5);


//Excercise 2

function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
//Write your code here.

yearsLeft=90-age;
daysLeft=yearsLeft*365;
weeksLeft=52*yearsLeft;
monthLeft=12*yearsLeft;

console.log ( "You have " + daysLeft +" days, " + weeksLeft + " weeks, and " + monthLeft+ " months left." );  
/*************Don't change the code below**********/
}

lifeInWeeks(56);



//You have 12410 days, 1768 weeks, and 408 months left.

///////////////////////////////////////////

function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
//Write your code here.

yearsLeft=90-age;
daysLeft=yearsLeft*365;
weeksLeft=52*yearsLeft;
monthLeft=12*yearsLeft;

   
alert( "you have " + daysLeft +" days, " + weeksLeft + " weeks, and " + monthLeft+ " months left" );
/*************Don't change the code below**********/
}

var userAge=prompt(("What's your age ?"));

lifeInWeeks(userAge);

