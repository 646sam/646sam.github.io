// Initialising global variables
// If no difficulty is selected, easy mode is the default 
var easyMode = true;
var mediumMode = false;
var hardMode = false;
var questionAnswer;
var number1;
var number2;
var operator;
var questionOutput;
var correctAnswerCounter = 0;
var incorrectAnswerCounter = 0;
var incorrectAnswers = "";

// If easy difficult button is clicked on, user gets an alert message confirming the selection
function easyDifficulty() {
    difficultyBorderColours("easy");
    easyMode = true;
}

// If medium difficult button is clicked on, user gets an alert message confirming the selection
function mediumDifficulty() {
    difficultyBorderColours("medium");
    mediumMode = true;
    // If medium difficulty is selected, easy mode (default) is returned to the non selected state
    easyMode = false;
}

// If hard difficult button is clicked on, user gets an alert message confirming the selection
function hardDifficulty() {
    difficultyBorderColours("hard");
    hardMode = true;
    // If hard difficulty is selected, easy mode (default) is returned to the non selected state
    easyMode = false;
}

function difficultyBorderColours(difficultySelected) {
    var easy = document.getElementById("easyMode");
    var medium = document.getElementById("mediumMode");
    var hard = document.getElementById("hardMode");

    if (difficultySelected == "easy") {
        easy.style.border = "3px solid #3dff7e";
        medium.style.borderColor = "#CA9C6C";
        hard.style.borderColor = "#CA9C6C";
        easy.style['text-decoration'] = 'underline';
        medium.style['text-decoration'] = 'none';
        hard.style['text-decoration'] = 'none';
    } else if (difficultySelected == "medium") {
        easy.style.borderColor = "#CA9C6C";
        medium.style.border = "3px solid #3dff7e";
        hard.style.borderColor = "#CA9C6C";
        easy.style['text-decoration'] = 'none';
        medium.style['text-decoration'] = 'underline';
        hard.style['text-decoration'] = 'none';
    } else {
        easy.style.borderColor = "#CA9C6C";
        medium.style.borderColor = "#CA9C6C";
        hard.style.border = "3px solid #3dff7e";
        easy.style['text-decoration'] = 'none';
        medium.style['text-decoration'] = 'none';
        hard.style['text-decoration'] = 'underline';

    }

}

function timerOn() {
    timerOnId.style.border = "3px solid #3dff7e";
    timerOffId.style.border = "3px solid #CA9C6C";
    timerOnId.style['text-decoration'] = 'underline';
    timerOffId.style['text-decoration'] = 'none';
}


function timerOff(buttonId) {
    timerOnId.style.borderColor = "#CA9C6C";
    timerOffId.style.border = "3px solid #3dff7e";
    timerOffId.style['text-decoration'] = 'underline';
    timerOnId.style['text-decoration'] = 'none';
}



function showQuestion(buttonId) {
    buttonId.style.display = 'none';
}


function startQuiz() {
    setUpNewQuiz();

    number1 = getRandomNumberBasedOnDifficulty();
    number2 = getRandomNumberBasedOnDifficulty();
    operator = getRandomSignBasedOnDifficulty();
    questionOutput = generateQuestion(number1, number2, operator);
    questionAnswer = generateAnswer(number1, number2, operator);
    document.getElementById("q1").innerHTML = questionOutput;


}




function question1() {

    let usersAnswer = document.getElementById("id-q1").value;
    document.getElementById("q1Answer").innerHTML = outputMessageToUser(questionOutput, questionAnswer, usersAnswer);

    if (document.getElementById("q1Answer").innerHTML.includes("Well done!") == true) {
        answeredCorrectly();
        document.getElementById("q1Answer").style.background = "#3dff7e";
        number1 = getRandomNumberBasedOnDifficulty();
        number2 = getRandomNumberBasedOnDifficulty();
        operator = getRandomSignBasedOnDifficulty();
        questionOutput = generateQuestion(number1, number2, operator);
        questionAnswer = generateAnswer(number1, number2, operator);
        document.getElementById("q2").innerHTML = questionOutput;
        correctAnswerCounter++;
    } else {
        answeredIncorrectly();
        document.getElementById("q1Answer").style.background = "#ff335c";
        incorrectAnswerCounter++;
        incorrectAnswers += "Question 1: " + questionOutput; // + //NEW LINE HERE;
    }

    document.getElementById("brForQ1").innerHTML = '<br>';
    document.getElementById("showOutput1").style.display = "block";
}


function question2() {

    let usersAnswer = document.getElementById("id-q2").value;
    document.getElementById("q2Answer").innerHTML = outputMessageToUser(questionOutput, questionAnswer, usersAnswer);

    if (document.getElementById("q2Answer").innerHTML.includes("Well done!") == true) {
        answeredCorrectly();
        document.getElementById("q2Answer").style.background = "#3dff7e";
        number1 = getRandomNumberBasedOnDifficulty();
        number2 = getRandomNumberBasedOnDifficulty();
        operator = getRandomSignBasedOnDifficulty();
        questionOutput = generateQuestion(number1, number2, operator);
        questionAnswer = generateAnswer(number1, number2, operator);
        document.getElementById("q3").innerHTML = questionOutput;
        correctAnswerCounter++;
    } else {
        answeredIncorrectly();
        document.getElementById("q2Answer").style.background = "#ff335c";
        incorrectAnswerCounter++;
        incorrectAnswers += "/n" + questionOutput + "/n";
    }

    document.getElementById("brForQ2").innerHTML = '<br>';
    document.getElementById("showOutput2").style.display = "block";

}


function question3() {

    let usersAnswer = document.getElementById("id-q3").value;
    document.getElementById("q3Answer").innerHTML = outputMessageToUser(questionOutput, questionAnswer, usersAnswer);

    if (document.getElementById("q3Answer").innerHTML.includes("Well done!") == true) {
        answeredCorrectly();
        document.getElementById("q3Answer").style.background = "#3dff7e";
        number1 = getRandomNumberBasedOnDifficulty();
        number2 = getRandomNumberBasedOnDifficulty();
        operator = getRandomSignBasedOnDifficulty();
        questionOutput = generateQuestion(number1, number2, operator);
        questionAnswer = generateAnswer(number1, number2, operator);
        document.getElementById("q4").innerHTML = questionOutput;
        correctAnswerCounter++;
    } else {
        answeredIncorrectly();
        document.getElementById("q3Answer").style.background = "#ff335c";
        incorrectAnswerCounter++;
        incorrectAnswers += "/n" + questionOutput + "/n";
    }

    document.getElementById("brForQ3").innerHTML = '<br>';
    document.getElementById("showOutput3").style.display = "block";

}


function question4() {

    let usersAnswer = document.getElementById("id-q4").value;
    document.getElementById("q4Answer").innerHTML = outputMessageToUser(questionOutput, questionAnswer, usersAnswer);

    if (document.getElementById("q4Answer").innerHTML.includes("Well done!") == true) {
        answeredCorrectly();
        document.getElementById("q4Answer").style.background = "#3dff7e";
        number1 = getRandomNumberBasedOnDifficulty();
        number2 = getRandomNumberBasedOnDifficulty();
        operator = getRandomSignBasedOnDifficulty();
        questionOutput = generateQuestion(number1, number2, operator);
        questionAnswer = generateAnswer(number1, number2, operator);
        document.getElementById("q5").innerHTML = questionOutput;
        correctAnswerCounter++;
    } else {
        answeredIncorrectly();
        document.getElementById("q4Answer").style.background = "#ff335c";
        incorrectAnswerCounter++;
        incorrectAnswers += "/n" + questionOutput + "/n";
    }

    document.getElementById("brForQ4").innerHTML = '<br>';
    document.getElementById("showOutput4").style.display = "block";

}

function question5() {
    let usersAnswer = document.getElementById("id-q5").value;
    document.getElementById("q5Answer").innerHTML = outputMessageToUser(questionOutput, questionAnswer, usersAnswer);
    if (document.getElementById("q5Answer").innerHTML.includes("Well done!") == true) {
        answeredCorrectly();
        document.getElementById("q5Answer").style.background = "#3dff7e";
        correctAnswerCounter++;
    } else {
        answeredIncorrectly();
        document.getElementById("q5Answer").style.background = "#ff335c";
        incorrectAnswerCounter++;
        incorrectAnswers += "/n" + questionOutput + "/n";
    }



    document.getElementById("brForQ5").innerHTML = '<br>';
    document.getElementById("showOutput5").style.display = "block";

}


function feedBack() {

    var noCorrectAnswers = "Whoops, unfortunately you answered "
    var atLeastOneCorrectAnswer = "Well Done! You ansered "

    if (correctAnswerCounter < 1) {
        alert(noCorrectAnswers + correctAnswerCounter + " correctly, and " + incorrectAnswerCounter + " incorrectly. The question(s) you answered incorrectly were: \n" + incorrectAnswers);
    } else {
        alert(atLeastOneCorrectAnswer + correctAnswerCounter + " correctly, and " + incorrectAnswerCounter + " incorrectly. " + "The question(s) you answered incorrectly were: \n" + incorrectAnswers);
    }
}



// implement show answer here
function outputMessageToUser(question, answer, usersAnswer) {
    var outputMessage;

    if (usersAnswer == questionAnswer) {
        outputMessage = "Well done! " + question + ", is equal to " + usersAnswer + ". Good job!";
    } else {
        outputMessage = "Whoops! " + question + ", does not equal " + usersAnswer + ". Give it another try!";
    }
    return outputMessage;
}



function generateAnswer(number1, number2, operator) {
    let answer;
    if (operator == "+") {
        answer = number1 + number2;
    } else if (operator == "-") {
        answer = number1 - number2;
    } else if (operator == "*") {
        answer = number1 * number2;
    } else {
        answer = number1 / number2;
    }
    return answer;
}



// Function to get a random number based on the difficulty selected by the user
function getRandomNumberBasedOnDifficulty() {
    // Initialising variables, lowest and highest values for each difficulty
    let randomNumber;
    var easyModeLowestNumber = 0;
    var easyModeHighestNumber = 15;
    var mediumModeLowestNumber = -5;
    var mediumModeHighestNumber = 25;
    var hardModeLowestNumber = -20;
    var hardModeHighestNumber = 50;

    // Depending on the difficulty selected, the function will choose a random number based on the lowest 
    // and highest allowed values (the range)
    if (easyMode == true) {
        randomNumber = Math.floor(Math.random() * easyModeHighestNumber) - easyModeLowestNumber;
    } else if (mediumMode == true) {
        randomNumber = Math.floor(Math.random() * mediumModeHighestNumber) - mediumModeLowestNumber;

    } else {
        randomNumber = Math.floor(Math.random() * hardModeHighestNumber) - hardModeLowestNumber;

    }

    return randomNumber;
}

// Function to get a random number based on the difficulty selected by the user
function getRandomSignBasedOnDifficulty() {
    // Initialising variables, and the operators for each difficulty
    let randomSign;
    var easySigns = ["+", "-"];
    var mediumSigns = ["+", "-", "*"];
    var hardSigns = ["+", "-", "*", "/"];


    // Depending on the difficulty selected, the function will choose an operator from the list 
    if (easyMode == true) {
        randomSign = easySigns[Math.floor(Math.random() * easySigns.length)];
    } else if (mediumMode == true) {
        randomSign = mediumSigns[Math.floor(Math.random() * mediumSigns.length)];

    } else {
        randomSign = hardSigns[Math.floor(Math.random() * hardSigns.length)];

    }

    return randomSign;
}

function generateQuestion(firstNumber, secondNumber, chosenSign) {
    let question;

    question = firstNumber + " " + chosenSign + " " + secondNumber

    return question;
}

function setUpNewQuiz() {

    document.getElementById("hideQuestion1").style.display = "none";
    document.getElementById("hideQuestion2").style.display = "block";
    document.getElementById("hideQuestion3").style.display = "block";
    document.getElementById("hideQuestion4").style.display = "block";
    document.getElementById("hideQuestion5").style.display = "block";


    document.getElementById("showOutput1").style.display = "none";
    document.getElementById("showOutput2").style.display = "none";
    document.getElementById("showOutput3").style.display = "none";
    document.getElementById("showOutput4").style.display = "none";
    document.getElementById("showOutput5").style.display = "none";


    document.getElementById("q1Answer").innerHTML = "";
    document.getElementById("id-q1").value = null;

    document.getElementById("q2").innerHTML = "";
    document.getElementById("q2Answer").innerHTML = null;
    document.getElementById("id-q2").value = null;

    document.getElementById("q3").innerHTML = "";
    document.getElementById("q3Answer").innerHTML = "";
    document.getElementById("id-q3").value = null;

    document.getElementById("q4").innerHTML = "";
    document.getElementById("q4Answer").innerHTML = null;
    document.getElementById("id-q4").value = null;

    document.getElementById("q5").innerHTML = "";
    document.getElementById("q5Answer").innerHTML = "";
    document.getElementById("id-q5").value = null;

}

function answeredCorrectly() {
    var audio = new Audio('audios/correctAnswer.mp3');
    audio.play();
}

function answeredIncorrectly() {
    var audio = new Audio('audios/incorrectAnswer.mp3');
    audio.play();

}