function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
   var output=[];
   if (n===1){
       output=[0];
       
   } else if (n===2){
        output=[0,1];
    } 
   else{
      output=[0,1];
   }
    for(var i=3; i<n; i++){
        console.log(output.length)
        output.push(output[output.length-2]+ output[output.length-1] +output[output.length-3]) // 0+1
            
        } 
  
    return output;

}

var output=fibonacciGenerator(3)
console.log(output)