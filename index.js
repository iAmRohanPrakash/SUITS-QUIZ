var readLineSync = require("readline-sync");

var score = 0;
var currentUserScore;
var bestScore = 3;

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
  question : `What's your name
              a)Rohan
              b)Sam
              c)Akash
              Your choice : `,
  answer : "a"
},
{
  question : `What's your age
              a)22
              b)21
              c)23
              Your choice : `,
  answer : "b"
},
{
  question : `What's your favourite dish
              a)Chilli Chicken
              b)Butter Chichen
              c)Tandoori Chicken 
              Your choice : `,
  answer : "c"
},
{
  question : `Where do you live
              a)Ajmer
              b)Kanpur
              c)Pune 
              Your choice : `,
  answer : "b"
},
{
  question : `What's your profile
              a)Developer
              b)Designer
              c)Analyst 
              Your choice : `,
  answer : "a"
}];

for(var i = 0; i<questionSet.length; i++){
  questionSet[i];
  game(questionSet[i].question,questionSet[i].answer);
}

var currentUserScore = score;
console.log("Your final score is " + score);

if (bestScore < currentUserScore) {

  console.log("You just made the high score");

} 

