var choice1 = document.getElementById("johannesburg");
var choice2 = document.getElementById("kinshasa");
var choice3 = document.getElementById("lagos");
var choice4 = document.getElementById("cairo");
var checkBtn = document.getElementById("check-btn");
var multipleChoiceResult = document.getElementById("multiple-choice-result");
var freeResponseResult = document.getElementById("free-response-result");

// multiple choice question
choice1.addEventListener("click", function(){
    multipleChoiceResult.innerHTML = "Sorry, try again";
    choice1.style.backgroundColor = "red";
})

choice2.addEventListener("click", function(){
    multipleChoiceResult.innerHTML = "";
    multipleChoiceResult.innerHTML = "Correct! Kinshasa has a population of 14.9 million.";
    choice2.style.backgroundColor = "#c0f760";

})
choice3.addEventListener("click", function(){
    multipleChoiceResult.innerHTML = "";
    multipleChoiceResult.innerHTML = "Incorrect, try again";
    choice3.style.backgroundColor = "red";

})
choice4.addEventListener("click", function(){
    multipleChoiceResult.innerHTML = "";
    multipleChoiceResult.innerHTML = "Incorrect, try again";
    choice4.style.backgroundColor = "red";

})

// free response question
checkBtn.addEventListener("click", function(){
    var userInput = document.getElementById("user-input").value;
    if(userInput == "switzerland" || userInput == "Switzerland"){
        freeResponseResult.innerHTML = "Correct!";
        
    }
    else{
        freeResponseResult.innerHTML = "Sorry, try again";
    }
})
