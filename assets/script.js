var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#timer");
var timeLeft = 60;
var totalPoints = 0;
var end = false;

var points = function() {
    totalPoints = totalPoints + 10;
    console.log("You have " + totalPoints + " points!");
}
var timer = function() {
    var timeInterval = setInterval(() => {
        if (end === false) {
            timerEl.textContent = timeLeft;
            timeLeft --;
            return timeLeft;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);
    
    console.log("TIMER STARTED")
    if (end === true) {
        
        timerEl.textContent = timeLeft;
    }

}

var highScores = function() {
    
    var highScoreContainer = document.createElement("div");
    highScoreContainer.className = "hs-container";
    mainEl.appendChild(highScoreContainer);

    var title = document.createElement("h1");
    title.className = "high-score-title";
    title.textContent = "High Score";
    highScoreContainer.appendChild(title);

    var initals = localStorage.getItem("initals");
    var score = localStorage.getItem("score");
    var leaderboardScore = document.createElement("p");
    leaderboardScore.className = "leaderboard-score";
    leaderboardScore.textContent = "1." + initals + " - " + score;
    highScoreContainer.appendChild(leaderboardScore);

    var leaderboard = document.createElement("div");
    leaderboard.className = "leaderboard";
    highScoreContainer.appendChild(leaderboard);
    
    var goBack = document.createElement("button");
    goBack.className = "go-back-btn";
    goBack.textContent = "Go Back";
    goBack.addEventListener("click", event => {
        totalPoints = 0;
        end = false;
        timeLeft = 60;
        highScoreContainer.remove();
        start();
    })
    leaderboard.appendChild(goBack);
    
    var clearHighScore = document.createElement("button");
    clearHighScore.className = "clear-highScore";
    clearHighScore.textContent = "Clear High Score";
    clearHighScore.addEventListener("click", event => {
        
        localStorage.removeItem("initals")
        localStorage.removeItem("score")
        leaderboardScore.remove();
    })
    
    leaderboard.appendChild(clearHighScore);
}

var enterScore = function() {

    var doneContainer = document.createElement("div");
    doneContainer.className = "done-container";
    mainEl.appendChild(doneContainer);

    var done = document.createElement("h1");
    done.textContent = "All Done!";
    done.className = "done-title";
    doneContainer.appendChild(done);
    
    var score = document.createElement("h4");
    score.textContent = "Your final score is " + totalPoints;
    score.className = "score";
    doneContainer.appendChild(score); 

    var inputContainer = document.createElement("div");
    inputContainer.className = "input-container";
    doneContainer.appendChild(inputContainer);

    var label = document.createElement("label");
    label.textContent = "Enter Initials:";
    label.className = "label";
    label.setAttribute("for", "input");
    inputContainer.appendChild(label);
    
    var initalInput = document.createElement("Input");
    initalInput.className = "score-input";
    initalInput.setAttribute("id", "input")
    initalInput.setAttribute("name", "input");
    initalInput.setAttribute("type", "text");
    inputContainer.appendChild(initalInput);

    var submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.className = "submit-btn";
    submit.addEventListener("click", event => {

        var initals = document.getElementById("input").value;
    
        localStorage.setItem("initals", initals);
    
        localStorage.setItem("score", totalPoints);
    
        doneContainer.remove();
    
        highScores();
    })
    
    inputContainer.appendChild(submit);
}

var questionFive = function(){

    var removeWrong = function() {;
        questionContainer.remove();
        enterScore();
        console.log("Wrong Answer");
        end = true;
    }
    
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

    
    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "HTML is a coding language used to create web pages";
    questionContainer.appendChild(question);


    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
    
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "True";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        points();
        questionContainer.remove();
        enterScore();
        console.log("Right Answer`");
        end = true;
    })
    
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "False";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })

var questionFour = function() {

    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionFive();
        console.log("Wrong Answer");
        return timeLeft;
    }
    
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "True or False: A web browser translates text-based HTML into a graphical web page";
    questionContainer.appendChild(question);

    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "False";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })
       
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "True";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        questionContainer.remove();
        questionFive();
        console.log("Right Answer");
        points();
    })
}

var questionThree = function() {
    
    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionFour();
        console.log("Wrong Answer");
    }
        
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "True or False: A hyperlink can be a word, phrase, or graphic";
    questionContainer.appendChild(question);

    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "False";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })
 
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "True";
    answerContainer.appendChild(answerFour);
    answerTwo.addEventListener("click", event => {
        questionContainer.remove();
        questionTwo();
        console.log("Right Answer");
        points();
    })
}

var questionFour = function() {
        
    var removeWrong = function() {
        questionThree();
        questionContainer.remove();
        timeLeft = timeLeft - 10;
    }
    
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "True or False: You must save a text file with a .html extention so a web browser can open it";
    questionContainer.appendChild(question);

    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "False";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    });
        
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "True";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        questionContainer.remove();
        questionThree();
        console.log("Right Answer");
        points();
    });
   
}

var questionOne = function() {
    
    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionTwo();
        console.log("Wrong Answer");
    }
        
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "True or false: A website's home page is typically named hompage.html";
    questionContainer.appendChild(question);

    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "True";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })
        
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "3. alerts";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        questionContainer.remove();
        questionTwo();
        console.log("Right Answer");
        points();
    })
}

var start = function() {
        
    var container = document.createElement("div");
    container.className = "home-container"
    mainEl.appendChild(container);

    var homeHeader = document.createElement("h1");
    homeHeader.className = "home-title";
    homeHeader.textContent = "Coding Quiz";
    container.appendChild(homeHeader);

    var homeParagraph = document.createElement("p");
    homeParagraph.className = "home-text-p";
    homeParagraph.textContent = "Answer the following questions within the time limit." +
    "Every incorrect answer results in a penalty of -10 points!"
    container.appendChild(homeParagraph);

    var startQuizBtn = document.createElement("button");
    startQuizBtn.className = "home-btn";
    startQuizBtn.textContent = "Start Quiz";
    container.appendChild(startQuizBtn);

    startQuizBtn.addEventListener("click", event => {
        timer();
        startQuizBtn.remove();
        homeHeader.remove();
        homeParagraph.remove();
        questionOne();
    });

    start();