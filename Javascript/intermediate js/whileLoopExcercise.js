// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.


// var bottleCount=99;

// function bottleCalc(){

//     while  (bottleCount>=0){

//         var bottleWord='bottles';
//         if (bottleCount>1)
//         console.log(bottleCount + " bottles of beer on the wall, " + bottleCount 
//             + " bottles of beer.Take one down and pass it around, " +(bottleCount-1) + " bottles of beer on the wall")  
//         if (bottleCount===1){
//             var bottleWord='bottle';
//         console.log(bottleCount +" "+ bottleWord +"  of beer on the wall, " + bottleCount +" "
//             +bottleWord+ " of beer.Take one down and pass it around, no more "+bottleWord +" of beer on the wall") 
//         }    
//          if (bottleCount==0){
//              var bottleWord='bottle';
//         console.log("no more "+ bottleWord +" of beer on the wall, no more "+bottleWord +" of beer.Take one down and pass it around, no more " +bottleWord+ " of beer on the wall")  
//     }           
//     bottleCount--    
//     }
    
// }


// bottleCalc();



// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }


var bottleCount=99;

function bottleCalc(){

    while  (bottleCount>=0){
        var bottleWord='bottles';

        if (bottleCount===1){
             bottleWord='bottle';}

        console.log(bottleCount +" " + bottleWord+ "  of beer on the wall," )
        console.log( bottleCount  +" " + bottleWord+ " of beer.")
        console.log("Take one down and pass it around, ") 



    bottleCount--;

    if (bottleCount===0){
        bottleCount="no more";
        bottleWord= "no more"
    }
        console.log( bottleCount  +"beer on the wall  "+  bottleWord+ " of beer on the wall.")
    }
    
}


bottleCalc();