// function getMilk(dollar,) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   var numberOfbottles=(Math.floor(dollar/1.5))
//   console.log("buy " + numberOfbottles + " bottles of milk")
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");

//   return dollar % 1.5;
// }
// var change=getMilk(4);
// console.log("your change is " + change)


// //////////////////////////////////////////////////////////


function getMilk(dollar, costPerBottles) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  console.log("buy " + calcBottles(dollar, costPerBottles)+ " bottles of milk")

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(dollar, costPerBottles);
}

function calcBottles(startingMoney, costPerBottles){
        var numberOfbottles=Math.floor(startingMoney/costPerBottles)  //5 /1
        return numberOfbottles; //calcbottles =5
}

function calcChange(startingAmount, costPerBottles ){
    var change=startingAmount % costPerBottles
    return change; //0
}

console.log("Hello sir, here is your "+ getMilk(5, 1) + " change")

//getmilk value=return value of change




//Excerise


//BMI Calculator


function bmiCalculator(weight, height){
    var bmi=Math.floor(weight/(Math.pow(height, 2)));
    return bmi;
    
}
console.log(bmiCalculator(65, 1.8))



/////
function bmiCalculator(weight, height){
    var bmiCalc=Math.round(weight/height**2);
    return bmiCalc;
    
}

var bmi=bmiCalculator(64,1.8);
console.log(bmiCalculator)
