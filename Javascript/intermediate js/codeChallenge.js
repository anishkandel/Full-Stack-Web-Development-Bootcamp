///Excercise


function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.


var lengthList=names.length;
var randomNum=Math.random()*lengthList;
console.log(randomNum)

randomNum=Math.floor(randomNum);
console.log(randomNum)


var randomPayer=names[randomNum];
return(randomPayer+" will pay the final bill")

    
    



/******Don't change the code below*******/    
}
var payer=whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"])
console.log(payer)

