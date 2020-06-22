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
var questions = [{q:"What type bender is Katara?", a1:"air" , a2:"water", a3:"earth", a4:"fire", c: "water"}, {q:"What does Sokka's girlfriend turn into?", a1:"a fish" , a2:"the sun", a3:"the moon", a4:"a bear", c:"the moon"}, {q:"question?", a1:"answer" , a2:"answer", a3:"answer", a4:"answer"}, {q:"question?", a1:"answer" , a2:"answer", a3:"answer", a4:"answer"}, {q:"question?", a1:"answer" , a2:"answer", a3:"answer", a4:"answer"}];
var time = 60;
var questionNum = Math.floor(Math.random() * questions.length);

function startQuiz() {
    startBtn.style.display = "none";
    startTag.style.display = "none";
    answer1.style.display = "block";
    answer2.style.display = "block";
    answer3.style.display = "block";
    answer4.style.display = "block";
    answer1.textContent = questions[questionNum].a1;
    answer2.textContent = questions[questionNum].a2;
    answer3.textContent = questions[questionNum].a3;
    answer4.textContent = questions[questionNum].a4;
    var timerInterval = setInterval(function() {
        time--;
        timer.textContent = time;
    }, 1000);
}

function question(event) {
    console.log(questions[questionNum]["c"])
    console.log(event.target.textContent)
    if (event.target.textContent === questions[questionNum]["c"]){
        yesOrNo.style.display = "block";
        yesOrNo.textContent = "Correct!";
    }
    else {
        yesOrNo.style.display = "block";
        yesOrNo.textContent = "Wrong!";
        time = time - 3;
    }
    var newNum = Math.floor(Math.random() * questions.length);
    //yesOrNo.style.display = "none";
    answer1.textContent = questions[newNum].a1;
    answer2.textContent = questions[newNum].a2;
    answer3.textContent = questions[newNum].a3;
    answer4.textContent = questions[newNum].a4;
}

startBtn.addEventListener("click", startQuiz);
answers.addEventListener("click", question);

