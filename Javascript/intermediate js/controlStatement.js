//control statement & combining comparators

var loveScore=Math.random()*100;
loveScore=Math.floor(loveScore)+1

if (loveScore>70){
    console.log("Your love is " + loveScore +" % and you are the lovebirds" )    
}

if (loveScore>30 && loveScore<=70){
    console.log("Your love is " + loveScore +" % and you guys are in the right track" )  
}

if(loveScore<=30){
    console.log("Your love is " + loveScore +" % you may have just started to love each other")
}




////Excercise

function bmiCalculator (weight, height) {
    var bmi= weight/(Math.pow(height, 2));
    bmi=Math.round(interpretation)
    return bmi;
}

var bmi=bmiCalculator(65, 1.8);
console.log(bmi)


if (bmi<18.5){
    console.log("Your BMI is " + bmi+", so you are underweight.")
}

if (bmi>=18.5 && bmi<= 24.9){
    console.log("Your BMI is " +bmi+", so you have a normal wieght.")
}

if(bmi>24.9){
    console.log("Your BMI is "+bmi+", so you are overweight.")
}


//////////////////////////

function bmiCalculator (weight, height) {
    var bmi= Math.round(weight/(height*height));

if (bmi<18.5){
    return("Your BMI is " +bmi+", so you are underweight.")
}

if (bmi>=18.5 && bmi<= 24.9){
    return("Your BMI is " +bmi+", so you have a normal weight.")
}

if(bmi>24.9){
    return("Your BMI is "+bmi+", so you are overweight.")
}

}
console.log(bmiCalculator(65, 1.8))

