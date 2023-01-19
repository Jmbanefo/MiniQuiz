const start = document.querySelector("#begin")
const Bye = document.querySelector("#welcome")

const Qt1 = document.querySelector(".option")
const Title = document.querySelector("#quest")
const info1 = document.querySelector(".explainBox")
const info2 = document.querySelector("#info")
const QtBox = document.querySelector(".quizbox")




const questions =  [
    {Question: "How does this even work?", 
    Choice1: "I have no idea",
    Choice2: "I will never know",
    Choice3: "I am working to figure that out", 
    Choice4: "Gvie up", 
    Answer: 3},

    {Question: "How does this even work?", 
    Choice1: "I have no idea",
    Choice2: "I will never know",
    Choice3: "I am working to figure that out", 
    Choice4: "Gvie up",  
    Answer: 1, 
    }


]

function iStart(){
    console.log("clicked")
    start.style.display = "none";
    Bye.innerHTML = "";
    info1.style.display = "none"
    info2.style.display = "none"


    Qt1.innerHTML = questions[1]

}    
   



    
    // info1.classList.remove("explainBox")
    // info2.classList.remove(".info") I chnaged this from Class to ID
    // QtBox.classList.remove("quizbox")
    // QtBox
    // document.getElementById("info").innerHtml = "READY?!?!?"






start.addEventListener("click",iStart)