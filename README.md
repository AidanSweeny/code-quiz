# code-quiz
For this assignment we were tasked with creating a quiz of our choosing. The quiz would rotate through questions and tell you if a question was right or wrong. At the end it would tell you your score, and then you could log your score under highscores. To implement this I started by creating the questions for my quiz in an object, where the keys were question, answer1-4, and c for correct answer. I then created all of the html elements that made up the page. This consisted of buttons, forms, text components, and an unordered list. Next, I created dom pointers to all of those elements so that they could be referenced in the html document. This was done as shown below: 
```
var answer1 = document.querySelector(".answer1");
```
I then started by making an event listener for the start button. Within the start function I reinitialized the variables for the questions, the score, and the timer, so that if the start again button gets clicked, it will still work correctly. I then accessed the stylesheet so that I could edit the display and set the correct elements to block or none. I also set the text content of the answer buttons to a random question. After the answers were generated I started an Interval timer, where I decreased the time by 1 every iteration through. I then created a function that would be activated on the click of one of the answers. I then used the following line to confirm if was the right or wrong answer: 
```
if (event.target.textContent === questions[questionNum]["c"]){
```
If the answer was correct I incremented the score by ten points, and if wrong I decremented it by 5 points. I then looped over this section by the length of the array of questions. I removed one of the questions everytime through the loop. 

Other than some transitioning details, the next part is the highscore list. To do this I created a button to an input form. This form allowed the user to input their initials, and then it would save their score and input the list if the user clicks the highscore button in the top left corner. After this I added styling to the CSS stylesheet, so that the buttons and text were displayed the way I wanted. Below is a demonstration of the game in use:

![](code-quiz.gif)

## Getting Started

To get this project running, one must copy the files from the class repository.

### Prerequisites

To have this project run, one must download VS Code off the appstore, and create a GitHub account. Git is also required to run this program, which can be downloaded 

```
$ brew install git. 
```
Homebrew can also be downloaded by inputting the following command in the terminal:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Installing

To install this project one must go through the GitHub website in order to clone this project. Clicking on the cone or download button and then copying the link that comes from that. One can then go into the Terminal application, and use the following command to copy the files:
`
git clone URL
`
This should then be moved to your desktop, or somewhere else on your computer. This will allow access to the html and css files. Opening the html file in a default browser will allow one to observe the website.

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* [See Live Site](https://aidansweeny.github.io/code-quiz/)

## Authors

* Aidan Sweeny

- [Link to Github](https://github.com/AidanSweeny)
- [Link to LinkedIn](https://www.linkedin.com/in/aidan-sweeny-81075030/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Berkley Coding Bootcamp

