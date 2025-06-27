let i=1;
while (i<100){
    console.log("count using while loop: "+i );
    i++;
}


for (let i=0; i<100; i++){
    console.log("count using for loop : "+i)
}


//// Loop through arrays;

let fruits = ["apple", "banana", "cherry"];

for (i=0; i<fruits.length;i++){
    console.log("using for "+fruits[i])
}


// Using for...of (easy and clean):
for(let fruit of fruits){
    console.log("using for ..of" +" "+fruit)
}

// Using forEach():
 fruits.forEach(function(fruit){
  console.log("using for each "+fruit)
 })


 //1. 🧠 Print even numbers from 1 to 20

// Expected Output: 2 4 6 ... 20
let n=20
console.log("even num using for loop: ")
for (let i=2; i<=n; i++ ){
    if(i%2==0){
    console.log(+i)}
}


let item=2;
 console.log("even number using while loop: ")
while(item<=20){
   if(item%2==0){
    console.log(+item)
   }
   item++; 
}


//Loop through this array and print items in UPPERCASE:
let names = ["anish", "kandel", "dego", "kady"];

for (let upperCase of names){
   console.log(upperCase.toUpperCase())
}

//Sum of numbers from 1 to n

let numFromUser=20;
numList=[];
for(i=1; i<=numFromUser; i++){
    numList.push(i)
}

console.log(numList)

let sum=0
for(let i=0; i<numList.length; i++){
    sum=sum+numList[i]
}

console.log(sum)




// Ask user for a number `n`, and calculate 1+2+...+n