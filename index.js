var readLineSync = require('readline-sync');
var chalk = require('chalk');

var name = readLineSync.question("Enter your name: ");

console.log("Welcome to Charlie Chaplin Quiz " + name);

var quizData = [{
  question: "What was Charlie Chaplin’s middle name?",
  option1 : "Spencer",
  option2 : "Tracey",
  answer  : "A",
},
{
  question: "What was the nickname of Charlie Chaplin's most famous movie character?",
  option1 : "The Kid",
  option2 : "The Tramp",
  answer  : "B",
},
{
  question: "Which historical figure did Charlie Chaplin satirize in his film The Great Dictator?",
  option1 : "Hitler",
  option2 : "Lincoln",
  answer  : "A",
},
{
  question: "In what film did Charlie Chaplin portray a banker who marries and murders rich women?",
  option1 : "Modern Times",
  option2 : "Monsieur Verdoux",
  answer  : "B",
},
{
  question: "What is the title of the only film in which Charlie Chaplin and Buster Keaton appeared together?",
  option1 : "Limelight",
  option2 : "City Lights",
  answer  : "A",
},
{
  question: "In what year did Charlie Chaplin receive an honorary Oscar?",
  option1 : "1972",
  option2 : "1974",
  answer  : "A",
}]
var score = 0;
function quiz(details){
  var que = details;
  console.log(que.question + "\nA: " + que.option1 + "\nB: " +  que.option2);
  
  var userAnswer = readLineSync.question();
  if(userAnswer.toLowerCase()===details.answer.toLowerCase()){
    console.log(chalk.green("Right."));
    score++;
  } else {
    console.log(chalk.red("Wrong."));
  }
}
for(var i = 0; i < quizData.length; i++){
  quiz(quizData[i]);
  console.log("\n");
}
console.log("Your Final score: " + score);

var scoreList = [{
  name: "Yash",
  score: 2,
},
{
  name: "Vasu",
  score: 3,
}]

scoreList.push(
  {
    name: name,
    score: score
});
function highScore(a, b){
  if(a.score > b.score) return -1;
  else if(a.score < b.score) return 1;
  else return 0;
}
console.log(chalk.magenta("----------Leader Board----------"));
scoreList.sort(highScore);
for(var i = 0; i < scoreList.length; i++){
  console.log(scoreList[i].name + " " + scoreList[i].score);
}

