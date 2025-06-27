/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   moveFour();
   turnLeft();
   moveFour();
}

function moveFour() {
 move();
 move();
 move();
 move();
}



/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/

//Excercise 2
function main(){
putBeeper();
diagonalMoves();
diagonalMoves();
diagonalMoves();
diagonalMoves();



}
      
function diagonalMoves() {
move();
turnLeft();
move();
putBeeper();
turnRight();

}      
   

//Excercise 3

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
   beepersRight();
   
   
   




}
      
function beepersRight() {
putBeeper();   
move();
move();
putBeeper();
move();
move();
putBeeper();

}      

function goUpTurnLeft(){
   turnLeft();
   move();
   turnLeft();
   
}


function beepersLeft(){
 move();
 putBeeper();
 move();
 move();
 putBeeper();
 move();
}
   
function goUpTurnRight(){
   turnRight();
   move();
   turnRight();
   
}
   