let sayHello = document.getElementById("sayHello");
let sumOfTwoNumbers1 = document.getElementById("sumOfTwoNumbers1");
let sumOfTwoNumbers2 = document.getElementById("sumOfTwoNumbers2");
let nameOfPerson = document.getElementById("nameOfPerson")
let wakingUpTime = document.getElementById("wakingUpTime")
let numGreaterOne = document.getElementById("numGreaterOne")
let numGreaterTwo = document.getElementById("numGreaterTwo")
let OddNumOne = document.getElementById("OddNumOne")
let OddNumTwo = document.getElementById("OddNumTwo")
let reverseItWordOne = document.getElementById("reverseItNumOne")
let reverseItNumOne = document.getElementById("reverseItNumOne")
let yourQuestion = document.getElementById("yourQuestion")
let restaurantPicker = document.getElementById("restaurantPicker")


let charNameOne = document.getElementById("charNameOne")
let charNameTwo = document.getElementById("charNameTwo")
let aPlace = document.getElementById("aPlace")
let anAdjective = document.getElementById("anAdjective")
let aNoun = document.getElementById("aNoun")
let aOption = document.getElementById("aOption")
let aColor = document.getElementById("aColor")
let aReaction = document.getElementById("aReaction")
let aExpression = document.getElementById("aExpression")
let aWeather = document.getElementById("aWeather")
let aAnswer = document.getElementById("aAnswer")
let aReview = document.getElementById("aReview")
let summitOne = document.getElementById("summitOne")
let sumOfTwoNumbersBtn = document.getElementById("sumOfTwoNumbersBtn")

let User;

const SayHelloCall = async (User) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/SayHello/GreetUser/${User}`);
    const data = await promise.text();
    answerOne.innerText = data;
}
if(summitOne){
summitOne.addEventListener("click", function(){
    User = sayHello.sayHello;
    SayHelloCall(User)
    alert("Hello")
});
}


const SumOfTwoNumbers = async (Answer1 , Answer2) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/MiniChallengeTwo/GreaterOrLess/${Answer1}/${Answer2}`);
    const data = await promise.text();
    console.log(data)

    SumOfTwoNumbersDiv.innerText = data;
}
if(sumOfTwoNumbersBtn){
sumOfTwoNumbersBtn.addEventListener("click", function (){
    Answer1 = sumOfTwoNumbers1.value;
    Answer2 = sumOfTwoNumbers2.value;
    SumOfTwoNumbers(Answer1, Answer2)
});
}

