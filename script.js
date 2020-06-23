var startBtn = document.querySelector(".startBtn");
var startTag = document.querySelector(".start");
var questionTag = document.querySelector(".question");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var answers = document.querySelector(".answers");
var yesOrNo = document.querySelector(".yesOrNo");
var timer = document.querySelector(".timer");
var scorer = document.querySelector(".score");
var questions = [{q:"What type bender is Katara?", a1:"air" , a2:"water", a3:"earth", a4:"fire", c: "water"}, {q:"What does Sokka's girlfriend turn into?", a1:"a fish" , a2:"the sun", a3:"the moon", a4:"a bear", c:"the moon"}, {q:"What type of earth does Toph learn to bend?", a1:"magma" , a2:"diamond", a3:"metal", a4:"mercury", c:"metal"}, {q:"Who was the avatar befor Aang?", a1:"Roku" , a2:"Kyoshi", a3:"Sokka", a4:"Korra", c:"Roku"}, {q:"Who taught Zuko and Aang to firebend?", a1:"Iroh" , a2:"Dragons", a3:"The Fire Lord", a4:"The Sun", c: "Dragons"}];
var time = 60;
var questionNum = Math.floor(Math.random() * questions.length);
var score = 0;

function startQuiz(event) {
    startBtn.style.display = "none";
    startTag.style.display = "none";
    answer1.style.display = "block";
    answer2.style.display = "block";
    answer3.style.display = "block";
    answer4.style.display = "block";
    questionTag.style.display = "block";
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
            answer2.style.display = "none";
            answer3.style.display = "none";
            answer4.style.display = "none";
            questionTag.style.display = "none";
            scorer.style.display = "block";
            scorer.textContent = "Your score is: " + score;
        }

    }, 1000);
}

function question(event) {
    console.log(questions[questionNum]["c"])
    console.log(event.target.textContent)
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
    console.log(questions)
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

