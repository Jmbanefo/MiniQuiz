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
let score = 0
let timercount = 60
//Array of question objects
const questions = [
    {
        question: "How does this even work?",
        choice1: "I have no idea",
        choice2: "I will never know",
        choice3: "I am working to figure that out",
        choice4: "Give up",
        answer: "I am working to figure that out",
    },

    {
        question: "Did you figure it out?",
        choice1: "Absolutely",
        choice2: "I tried",
        choice3: "Patience is a virture",
        choice4: "Lost me",
        answer: "Absolutely"
    },

    {
        question: "Have you got the grit?",
        choice1: "I was born in the dark",
        choice2: "I wish I did",
        choice3: "I'm a noodle",
        choice4: "I can't do it",
        answer: "Absolutely"
    },
    
    {
        question: "Are you satisfied?",
        choice1: "Definitely",
        choice2: "I can do more",
        choice3: "Patience is a virture",
        choice4: "nope",
        answer: "Definitely"
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


    // get the choice you want to put in button Question 2
    let questionTitle2 = questions[1].question
    let choice01 = questions[1].choice1;
    let choice02 = questions[1].choice2; 
    let choice03 = questions[1].choice3;
    let choice04 = questions[1].choice4; 


                    //Old adding on 
                    // title.innerHTML = questionTitle2
                    // questionEL1.innerHTML = choice01;
                    // questionEL2.innerHTML = choice02; 
                    // questionEL3.innerHTML = choice03; 
                    // questionEL4.innerHTML = choice04; 

    function checkme(e) {
        // userchoice
        userchoice = e.target.id
        console.log("User choice: " + userchoice)
        // Answers
        console.log("You want this: " + questionEL3.id)

            if(userchoice == questionEL3.id){
                score++; 
                console.log("Good guess " + score)
     
            //    New Question 
            }
            else { 
            console.log("You answered incorrectly")
    
        }
        endscore.innerHTML = score
        
    }




    
questionEL1.addEventListener("click", checkme)
questionEL2.addEventListener("click", checkme)
questionEL3.addEventListener("click", checkme)
questionEL4.addEventListener("click", checkme)
moveon.addEventListener("click", display)
}

//Need to continue with buttons

//Need Local Storage create new page? 
// get item & put item  - Json parse makes object that looks like string 
function recordKeeper() {

}

// Start button
start.addEventListener("click", iStart)
// Other Buttons







