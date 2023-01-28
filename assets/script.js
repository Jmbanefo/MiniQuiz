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
const moveon = document.querySelector(".next")
const disClock = document.querySelector(".secs")
//Scorebox & Initialize timer
const record = document.querySelector("#highscore")
const endscore = document.querySelector("#yours")
const alphaScore = document.querySelector("#topscore")
const myId = document.querySelector("#yourId")
const final = document.querySelector("#toptier")
const kingbtn = document.querySelector(".enter")
let score = 0
let timercount = 60
//Array of question objects
const questions = [
    {
        question: "How do you select a class or id on HTML from Javascript?",
        choice1: "I have no idea",
        choice2: "I will never know",
        choice3: "document.querySelector",
        choice4: "Give up",
    },

    {
        question: "How do you display text on HTML from Javascript?",
        choice1: "variable.innerHTML",
        choice2: "I tried",
        choice3: "buttons buttons buttons",
        choice4: "Lost me",

    },

    {
        question: "How do you set information into local storage?",
        choice1: "Can i think about it?",
        choice2: "localStorage.setItem",
        choice3: "ask google",
        choice4: "I can't do it",

    },
    
    {
        question: "How do you pull information from local storage?",
        choice1: "localStorage.getItem",
        choice2: "I can do more",
        choice3: "Patience is a virture",
        choice4: "nope",

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

let last = localStorage.getItem("TopScore")
myId.innerHTML = last;
let tier1 = localStorage.getItem("Score")
toptier.innerHTML = tier1

start.addEventListener("click", iStart)
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
        let option = questions[0].choice1;
        let option2 = questions[0].choice2; 
        let option3 = questions[0].choice3;
        let option4 = questions[0].choice4; 
        // put it in the button you want it in
        title.innerHTML = questionTitle
        questionEL1.innerHTML = option;
        questionEL2.innerHTML = option2; 
        questionEL3.innerHTML = option3; 
        questionEL4.innerHTML = option4
        
        
        let counter = 0
        function display() {
           
           if(counter < 3){
            counter++ 
            
            questionTitle = questions[counter].question
            option = questions[counter].choice1;
            option2 = questions[counter].choice2; 
            option3 = questions[counter].choice3;
            option4 = questions[counter].choice4; 

            title.innerHTML = questionTitle
            questionEL1.innerHTML = option;
            questionEL2.innerHTML = option2; 
            questionEL3.innerHTML = option3; 
            questionEL4.innerHTML = option4
           }
           else {
            quizsection.style.display = "none"
            clearInterval(timer);
           }
        }

    function checkme(e) {
        // userchoice
        userchoice = e.target.id
        console.log("User choice: " + userchoice)

            
    if(counter===0){
        if(userchoice == questionEL3.id){
                score++; 
                display();
                console.log("Good guess " + score)}
            else { 
                display();
                timercount = timercount - 5;
            console.log("You answered incorrectly")}
    }
    else if(counter===1){
        if(userchoice == questionEL1.id){
                score++; 
                display();
                console.log("Good guess " + score)}
            else { 
                display();
                timercount = timercount - 5;
            console.log("You answered incorrectly")}
    }
    else if(counter===2){
        if(userchoice == questionEL2.id){
                score++; 
                display();
                console.log("Good guess " + score)}
            else { 
                display();
                timercount = timercount - 5;
            console.log("You answered incorrectly")}
    }
    else if(counter===3){
        if(userchoice == questionEL1.id){
                score++; 
                display();
                console.log("Good guess " + score)}
            else { 
                display();
                timercount = timercount - 5;
            console.log("You answered incorrectly")}
    }

    endscore.innerHTML = score
}
 
questionEL1.addEventListener("click", checkme)
questionEL2.addEventListener("click", checkme)
questionEL3.addEventListener("click", checkme)
questionEL4.addEventListener("click", checkme)
moveon.addEventListener("click", display)
}

//Need Local Storage create new page? 
// get item & put item  - Json parse makes object that looks like string 
function recordKeeper() {

    var king = document.querySelector("#topscore").value;

    
    if (!king) { 
        return;
    }
    myId.textContent = king + " ~ " +  " Yours vs High: " + score;
    king = localStorage.getItem("yourId");

}


kingbtn.addEventListener("click", function(event) {
    event.preventDefault();
  
        var king = document.querySelector("#topscore").value;
            if (king === "") {
                return;
            }
            else{
            localStorage.setItem("TopScore", king)
            localStorage.setItem("Score", score)
            recordKeeper();
            }
  });












