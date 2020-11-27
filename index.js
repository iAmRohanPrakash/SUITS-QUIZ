var readLineSync = require("readline-sync");

var score = 0;
var currentUserScore;
var bestScore = 3;

console.log(`How Well Do You Know the TV show 'Suits'`);
console.log("*****************************************")


var game = (question,answer) => {
  var playerAnswer = readLineSync.question(question);
  if(playerAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Well done, right answer");
    score++
  } else {
    console.log("Sorry, that was wrong");
  }
  console.log("Your current score is : " + score);
  console.log("**********************************")
}

var questionSet = [{
  question : `Suits is set in a fictional law firm in?

              a)Atlanta
              b)New York City
              c)Chicago
              d)Canada

              Your choice : `,
  answer : "b"
},
{
  question : `Who is the female shark in charge of the 'Suits' law firm?

              a)Rachel Zane
              b)Donna Paulsen
              c)Jessica Person
              d)Katrina Bennett

              Your choice : `,
  answer : "c"
},
{
  question : `_____ is the firm's expert on all financial matters?

              a)Charles Forstman
              b)Robert Zane
              c)Mike Ross
              d)Louis Litt

              Your choice : `,
  answer : "d"
},
{
  question : `Harvey's unusual middle name is _______?

              a)Eugene
              b)Martha
              c)Reginald
              d)Sidwell

              Your choice : `,
  answer : "c"
},
{
  question : `Who plays Harvey Specter?

              a)Paul Schulze
              b)Eric Palladino
              c)Gabriel Macht
              d)Glenn Plummer

              Your choice : `,
  answer : "c"
}];

for(var i = 0; i<questionSet.length; i++){
  questionSet[i];
  game(questionSet[i].question,questionSet[i].answer);
}

var currentUserScore = score;
console.log("Your final score is " + score);

if (bestScore < currentUserScore) {

  console.log("Great!That's a High Score");

} 

