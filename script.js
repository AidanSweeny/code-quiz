var startBtn = document.querySelector(".startBtn");
var startTag = document.querySelector(".start");
var questionTag = document.querySelector(".question");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var answers = document.querySelector(".answers");
var yesOrNo = document.querySelector(".yesOrNo");
var scorers = document.querySelector(".scorers");
var close = document.querySelector(".close");
var initialBtn = document.querySelector(".initialBtn");
var timer = document.querySelector(".timer");
var scorer = document.querySelector(".score");
var highScore = document.querySelector(".highScores");
var namer = document.querySelector("#name");
var viewHighScores = document.querySelector(".viewHighScores");
var highScores = {};
var questions = [{q:"What type bender is Katara?", a1:"air" , a2:"water", a3:"earth", a4:"fire", c: "water"}, 
{q:"What does Sokka's girlfriend turn into?", a1:"a fish" , a2:"the sun", a3:"the moon", a4:"a bear", c:"the moon"}, 
{q:"What type of earth does Toph learn to bend?", a1:"magma" , a2:"diamond", a3:"metal", a4:"mercury", c:"metal"}, 
{q:"Who was the avatar befor Aang?", a1:"Roku" , a2:"Kyoshi", a3:"Sokka", a4:"Korra", c:"Roku"}, 
{q:"Who taught Zuko and Aang to firebend?", a1:"Iroh" , a2:"Dragons", a3:"The Fire Lord", a4:"The Sun", c: "Dragons"}, 
{q:"What do you say to make Appa fly?", a1:"hoo-ha" , a2:"yee-ha", a3:"yipee", a4:"yip-yip", c: "yip-yip"},
{q:"What does Aang use to heal Sokka and Katara when they are sick?", a1:"cough syrup" , a2:"frozen frogs", a3:"candy", a4:"burnt leaves", c: "frozen frogs"},
{q:"What does Sokka make his sword from?", a1:"metal" , a2:"wood", a3:"stone", a4:"meteorite", c: "meteorite"}, 
{q:"What is the organization that Iroh is a part of?", a1:"The Jasmine Dragon" , a2:"The Gold Leaf", a3:"The White Lotus", a4:"Fire Benders Anonymous", c: "The White Lotus"}, 
{q:"Who must Aang let go of to unlock the Avatar state?", a1:"Sokka" , a2:"Toph", a3:"Roku", a4:"Katara", c: "Katara"}];
var time = 60;
var questionNum = Math.floor(Math.random() * questions.length);
var score = 0;

function startQuiz(event) {
    questions = [{q:"What type bender is Katara?", a1:"air" , a2:"water", a3:"earth", a4:"fire", c: "water"}, 
{q:"What does Sokka's girlfriend turn into?", a1:"a fish" , a2:"the sun", a3:"the moon", a4:"a bear", c:"the moon"}, 
{q:"What type of earth does Toph learn to bend?", a1:"magma" , a2:"diamond", a3:"metal", a4:"mercury", c:"metal"}, 
{q:"Who was the avatar befor Aang?", a1:"Roku" , a2:"Kyoshi", a3:"Sokka", a4:"Korra", c:"Roku"}, 
{q:"Who taught Zuko and Aang to firebend?", a1:"Iroh" , a2:"Dragons", a3:"The Fire Lord", a4:"The Sun", c: "Dragons"}, 
{q:"What do you say to make Appa fly?", a1:"hoo-ha" , a2:"yee-ha", a3:"yipee", a4:"yip-yip", c: "yip-yip"},
{q:"What does Aang use to heal Sokka and Katara when they are sick?", a1:"cough syrup" , a2:"frozen frogs", a3:"candy", a4:"burnt leaves", c: "frozen frogs"},
{q:"What does Sokka make his sword from?", a1:"metal" , a2:"wood", a3:"stone", a4:"meteorite", c: "meteorite"}, 
{q:"What is the organization that Iroh is a part of?", a1:"The Jasmine Dragon" , a2:"The Gold Leaf", a3:"The White Lotus", a4:"Fire Benders Anonymous", c: "The White Lotus"}, 
{q:"Who must Aang let go of to unlock the Avatar state?", a1:"Sokka" , a2:"Toph", a3:"Roku", a4:"Katara", c: "Katara"}];
    score = 0;
    time = 60;
    startBtn.style.display = "none";
    viewHighScores.style.display = "none";
    scorer.style.display = "none";
    initialBtn.style.display = "none";
    namer.style.display = "none";
    startTag.style.display = "none";
    answer1.style.display = "block";
    answer2.style.display = "block";
    answer3.style.display = "block";
    answer4.style.display = "block";
    timer.style.display = "block";
    questionTag.style.display = "block";
    highScore.style.display = "none";
    timer.textContent = time;
    questionTag.textContent = questions[questionNum].q;
    answer1.textContent = questions[questionNum].a1;
    answer2.textContent = questions[questionNum].a2;
    answer3.textContent = questions[questionNum].a3;
    answer4.textContent = questions[questionNum].a4;
    var timerInterval = setInterval(function() {
        time--;
        timer.textContent = time;
        if(time <= 0 || questions.length === 0){
            event.preventDefault();
            clearInterval(timerInterval);
            startTag.style.display = "block";
            startTag.textContent = "Game Over"
            answer1.style.display = "none";
            viewHighScores.style.display = "block";
            answer2.style.display = "none";
            answer3.style.display = "none";
            answer4.style.display = "none";
            questionTag.style.display = "none";
            timer.style.display = "none";
            scorer.style.display = "block";
            startBtn.textContent = "Start Again";
            startBtn.style.display = "block";
            scorer.textContent = "Your score is: " + score;
            highScore.style.display = "block";
        }

    }, 1000);
}

function question(event) {
    if (event.target.textContent === questions[questionNum]["c"]){
        yesOrNo.style.display = "block";
        yesOrNo.textContent = "Correct!";
        score = score + 10;
        setTimeout(function(){yesOrNo.style.display = "none"}, 1000);
    }
    else {
        yesOrNo.style.display = "block";
        yesOrNo.textContent = "Wrong!";
        score = score - 5;
        setTimeout(function(){yesOrNo.style.display = "none"}, 1000);
        time = time - 3;
    }

    questions.splice(questionNum,1);
    var newNum = Math.floor(Math.random() * questions.length);
    if(questions.length === 0){
        return;
    }
    questionTag.textContent = questions[newNum].q;
    answer1.textContent = questions[newNum].a1;
    answer2.textContent = questions[newNum].a2;
    answer3.textContent = questions[newNum].a3;
    answer4.textContent = questions[newNum].a4;
    questionNum = newNum;
}

startBtn.addEventListener("click", startQuiz);
answers.addEventListener("click", question);
highScore.addEventListener("click", function(){
    startBtn.style.display = "none";
    initialBtn.style.display = "block";
    highScore.style.display = "none";
    namer.style.display = "block";
});
initialBtn.addEventListener("click", function(){
    highScores[namer.value] = score;
    initialBtn.style.display = "none";
    namer.style.display = "none";
    startBtn.textContent = "Start Again?";
    startBtn.style.display = "block";
    scorer.style.display = "none";

});

viewHighScores.addEventListener("click", function(){
    close.style.display = "block";
    initialBtn.style.display = "none";
    namer.style.display = "none";
    startBtn.style.display = "none";
    startTag.style.display = "none";
    scorer.style.display = "none";
    var keys = Object.keys(highScores);
    var values = Object.values(highScores);
    for (var i=0; i<Object.keys(highScores).length; i++){
        var li = document.createElement("li");
        li.textContent ="Initials: " + keys[i]+ " Score: " + values[i];
        scorers.appendChild(li);
    }
});

close.addEventListener("click", function(){
    startBtn.style.display = "block";
    startTag.style.display = "block";
    scorers.style.display = "none";
    close.style.display = "none";
});