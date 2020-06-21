var startBtn = document.querySelector(".startBtn");
var startTag = document.querySelector(".start");
var questionTag = document.querySelector(".question");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var questions = [{q:"question?", a1:"answer" , a2:"answer", a3:"answer", a4:"answer"}, {q:"question?", a1:"answer" , a2:"answer", a3:"answer", a4:"answer"}, {q:"question?", a1:"answer" , a2:"answer", a3:"answer", a4:"answer"}, {q:"question?", a1:"answer" , a2:"answer", a3:"answer", a4:"answer"}, {q:"question?", a1:"answer" , a2:"answer", a3:"answer", a4:"answer"}];

function startQuiz(event) {
    startBtn.style.display = "none";
    startTag.style.display = "none";
    answer1.style.display = "block";
    answer2.style.display = "block";
    answer3.style.display = "block";
    answer4.style.display = "block";
    var timerInterval = setInterval(function() {
        var num = Math.floor(Math.random() * 5)
        answer1.textContent = questions[num].a1;
        answer2.textContent = questions[num].a2;
        answer3.textContent = questions[num].a3;
        answer4.textContent = questions[num].a4;
    }, 1000);
}

startBtn.addEventListener("click", startQuiz);