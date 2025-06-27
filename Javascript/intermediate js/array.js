var gauestList=["anish", "kandel", "shree", "kady", "dego"]

function nameCheck(guestName){
    //convert into the lowercase to make not case sensitive
    guestName=guestName.toLowerCase()

    if (gauestList.includes(guestName)){
        return("Welcome to the party")
    }else{
        return("you are not in the list")
    }
}

var check= nameCheck("Anish")
console.log(check)



/////

var gauestList=["anish", "kandel", "shree", "kady", "dego"]
var guestName=prompt("What is your name").toLowerCase()

if (gauestList.includes(guestName)){
    console.log("Welcome")
}else{
    console.log("Try next time")
}