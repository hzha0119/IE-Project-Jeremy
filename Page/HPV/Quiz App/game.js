const question = document.getElementById("question");
//const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const choiceStart = document.getElementById("choice");

let currentQuestion = {};
let acceptingAnswers =false;
let score=0;
let questionCounter = 0;
//let availableQuestions = [];

let questions = [];

let selections = [];
let currentValue;

fetch("questions.json")
  .then( res => {
    return res.json();
  })
  .then( loadedQuestions => {
    console.log(loadedQuestions);
    questions = loadedQuestions;
    startGame();
  })
  .catch( err => {
      console.error(err);
  });


startGame = () => {
    questionCounter = 0;
    score = 0;
    answerQuestion();
}

answerQuestion = () => {
    const MAX_QUESTIONS = questions.length;
    if(questionCounter >= MAX_QUESTIONS){
        localStorage.setItem("mostRecentStore", score);
        //go to the end page
        return window.location.assign('finish.html');
    }
    
    generate_questions(questionCounter, MAX_QUESTIONS);

    questionCounter++;

    //availableQuestions.splice(0, 1);
    acceptingAnswers = true;
    

    document.getElementById("button").addEventListener("click", (e) => {
        if (questionCounter > 0)  {questionCounter = questionCounter - 1}
        score = 0;
        console.log(questionCounter);
        progressText.innerText = 'Question: ' + (questionCounter + 1) + '/' + MAX_QUESTIONS;
        progressBarFull.style.width = `${((questionCounter + 1) / MAX_QUESTIONS) * 100}%`;
        scoreText.innerHTML = 0;
    })

    var thisSelections = document.getElementsByClassName("choice-text");
    var thisValue = select_choice(thisSelections);
};

generate_questions = (questionCounter, MAX_QUESTIONS) => {
    //update the progress bar
    progressText.innerText = 'Question: ' + (questionCounter + 1) + '/' + MAX_QUESTIONS;
    progressBarFull.style.width = `${((questionCounter + 1) / MAX_QUESTIONS) * 100}%`;

    // currentQuestion = availableQuestions[questionIndex]; 
    var choices = questions[questionCounter];
    question.innerText = choices["question"];

    var alpheList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var choiceText = [];
    for(var choiceIndex in choices["choices"]){
        thisChoice = choices["choices"][choiceIndex];
        var choiceList = `<div class="choice-container">` +
        `<p class="choice-prefix">${alpheList[choiceIndex]}</p>` +
        `<p class="choice-text" data-number="${choiceIndex - 0 + 1}">${thisChoice["choice"]}</p>` +
        `</div>`;
        choiceText.push(choiceList);
        //console.log(choiceList);
    };

    choiceStart.innerHTML = choiceText.join(" ");
}

select_choice = (selections) => {
    Array.from(selections).forEach((choice) => {
        //console.log(choice);
        choice.addEventListener("click", (e) => {
            if(!acceptingAnswers) return;

            acceptingAnswers = false;
            const selectedChoice = e.target;
            //console.log(e.target);
            const selectedAnswer = selectedChoice.dataset["number"];
            
            const classToApply = 
                selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

            selectedChoice.parentElement.classList.add(classToApply);
            setTimeout( () => {
                selectedChoice.parentElement.classList.remove(classToApply);
                answerQuestion();
            }, 500)
            
            //My Algirithm
            incrementScore(selectedAnswer - 0);
            currentValue = selectedAnswer;
        });
    });
    return currentValue
}

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

//startGame();