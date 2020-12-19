$(document).ready(function() {
var magic8Ball = {};
magic8Ball.listOfAnswers = ["yes", "no", "maybe", "try again", "it could happen", "you never know!"];

  $("#answer").hide ();

magic8Ball.questionMagic8Ball = function(question)
{
var randomNumber = Math.random();
var randomNumberArray = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberArray);
var answer = this.listOfAnswers [randomIndex];

  $("#answer").text(answer);


console.log(question);
console.log(answer);
};

var onClick = function() {

  $("#answer").hide ();

  $("#answer").fadeIn(4000);

  $("#8ball").attr ("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

  $("#8ball").effect("shake");

 setTimeout( function ()
   {
   var askQuestion = prompt("ASK ME ANYTHING!" , "Will 2021 be a good year?");
    magic8Ball.questionMagic8Ball("question");
  }, 500);


};

$("#questionButton").click(onClick);

});
