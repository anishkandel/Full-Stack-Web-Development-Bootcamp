// You have writeen 182 characters and you have 42 characters left

var maxCount=280;
var tweet= prompt("Write your tweet")

var tweetCount=tweet.length;
var leftCount= maxCount-tweetCount;

alert("You have written "+ tweetCount+ " characters and you have " + leftCount+ " characters left" )


// shorthand

var tweet= prompt("Write your tweet")
alert("You have written "+ tweet.length+ " characters and you have " + (140-tweet.length) + " characters left" )



var maxCount=140;
var tweet= prompt("Write your tweet")
var tweetUnder140=tweet.slice(0,140);

alert(tweetUnder140);



// shortcode
alert(prompt("Compose your tweet:").slice(0,140));

var tweetCount=tweetUnder140.length;
var leftCount= maxCount-tweetCount;

alert("You have written "+ tweetCount+ " characters and you have " + leftCount+ " characters left" )



