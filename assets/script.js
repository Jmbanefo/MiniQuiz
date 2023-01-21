// Start button & Info Box
const start = document.querySelector("#begin")
const info1 = document.querySelector(".explainBox")
const welTitle = document.querySelector("#welcome")
const info2 = document.querySelector("#info")
// Questions & Quiz box
const title = document.querySelector("#quest")
const questionEL1 = document.querySelector("#opt1")
const questionEL2 = document.querySelector("#opt2")
const questionEL3 = document.querySelector("#opt3")
const questionEL4 = document.querySelector("#opt4")
const quizsection = document.querySelector(".quizbox")
const disClock = document.querySelector(".secs")
//Scorebox & Initialize timer
const record = document.querySelector("#highscore")
const alphaScore = document.querySelector("#topscore")
let score = 0
let timercount = 60


const questions = [
    {
        question: "How does this even work?",
        choice1: "I have no idea",
        choice2: "I will never know",
        choice3: "I am working to figure that out",
        choice4: "Give up",
        answer: 3,
    },

    {
        question: "Did you figure it out?",
        choice1: "Absolutely",
        choice2: "I tried",
        choice3: "Patience is a virture",
        choice4: "Lost me",
        answer: 1,
    }
]
    function clock() {
        timer = setInterval(function () {
            console.log(timercount)
            timercount--;
            if (timercount >= 0) {
                disClock.innerHTML = timercount
                // Then check for win
            } else {
                clearInterval(timer)
                alert("GAME OVER")
                console.log(score)
            }}, 1000)
}

    function iStart() {
        console.log("clicked")
        clock();
        start.style.display = "none";
        welTitle.innerHTML = "";
        info1.style.display = "none"
        info2.style.display = "none"
        quizsection.style.display = "flex"

    // get the choice you want to put in button Question 1
    let questionTitle = questions[0].question
    let choice1 = questions[0].choice1;
    let choice2 = questions[0].choice2; 
    let choice3 = questions[0].choice3;
    let choice4 = questions[0].choice4; 
    // get the choice you want to put in button Question 2
    let questionTitle2 = questions[1].question
    let choice01 = questions[1].choice1;
    let choice02 = questions[1].choice2; 
    let choice03 = questions[1].choice3;
    let choice04 = questions[1].choice4; 
    // put it in the button you want it in
    title.innerHTML = questionTitle
    questionEL1.innerHTML = choice1;
    questionEL2.innerHTML = choice2; 
    questionEL3.innerHTML = choice3; 
    questionEL4.innerHTML = choice4

        
    function checkme() {

        if(choice3){
        console.log("Good guess")
        score++; 
        console.log(score)
        //    New Question 
        title.innerHTML = questionTitle2
        questionEL1.innerHTML = choice01;
        questionEL2.innerHTML = choice02; 
        questionEL3.innerHTML = choice03; 
        questionEL4.innerHTML = choice04; 
        }
    
    
        else { 
        console.log("You answered incorrectly")
        title.innerHTML = questionTitle2
        //    New Question 
        questionEL1.innerHTML = choice01;
        questionEL2.innerHTML = choice02; 
        questionEL3.innerHTML = choice03; 
        questionEL4.innerHTML = choice04; 
    }
}



    
questionEL1.addEventListener("click", checkme)
questionEL2.addEventListener("click", checkme)
questionEL3.addEventListener("click", checkme)
questionEL4.addEventListener("click", checkme)
}

//Need to continue with buttons

//Need Local Storage create new page? 
function recordKeeper() {

}

// Start button
start.addEventListener("click", iStart)
// Other Buttons







