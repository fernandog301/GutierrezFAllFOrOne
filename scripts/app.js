let sayHello = document.getElementById("sayHello");
let sumOfTwoNumbers1 = document.getElementById("sumOfTwoNumbers1");
let sumOfTwoNumbers2 = document.getElementById("sumOfTwoNumbers2");




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

let nameOfPerson = document.getElementById("nameOfPerson")
let wakingUpTime = document.getElementById("wakingUpTime")
let askingQuestionsBtn = document.getElementById("askingQuestionsBtn")

const askingQuestions = async (Name , WakeUpTime) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/MiniChallengeThree/Sentence/${Name}/${WakeUpTime}`);
    const data = await promise.text();
    askingQuestionsDiv.innerText = data;
}

if(askingQuestionsBtn){
askingQuestionsBtn.addEventListener("click", function (){
    Name = nameOfPerson.value
    WakeUpTime = wakingUpTime.value
    askingQuestions(Name, WakeUpTime)
})
}


let numGreaterOne = document.getElementById("numGreaterOne")
let numGreaterTwo = document.getElementById("numGreaterTwo")
let GreaterOrLessBtn = document.getElementById("GreaterOrLessBtn")

const GreaterOrLess = async (numberOne, numberTwo) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/MiniChallengeFour/GreaterOrLess/${numberOne}/${numberTwo}`);
    const data = await promise.text();

    GreaterOrLessDiv.innerText = data;
}

if(GreaterOrLessBtn){
    GreaterOrLessBtn.addEventListener("click", function () {
        numberOne = numGreaterOne.value;
        numberTwo = numGreaterTwo.value;
        GreaterOrLess(numberOne, numberTwo);
    })
}


// Odd Or Even
let oddOrEvenInput = document.getElementById("oddOrEven")
let oddOrEvenBtn = document.getElementById("oddOrEvenBtn")

const oddOrEven = async (numberThree) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/OddOrEven/CheckEvenOrOdd/${numberThree}`);
    const data = await promise.text();

    oddOrEvenDiv.innerText = data;
}

if(oddOrEvenBtn){
    oddOrEvenBtn.addEventListener("click", function () {
        numberThree = oddOrEvenInput.value;
        oddOrEven(numberThree);
    })
}
// End of Odd

// Start of Revers word
let reverseItWordOne = document.getElementById("reverseItWordOne")
let reverseItWordOneBtn = document.getElementById("reverseItWordOneBtn")

const reverseItWord = async (numberFour) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/ReverseItAlphanumeric/reverseItAlphanumeric/${numberFour}`);
    const data = await promise.text();

    reverseItWordOneDiv.innerText = data;
}

if(reverseItWordBtn){
    reverseItWordBtn.addEventListener("click", function () {
        numberOne = reverseItWordOne.value;
        reverseItWord(numberFour);
    })
}
// end rever word




let reverseItNumOne = document.getElementById("reverseItNumOne")



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
let madLibsBtn = document.getElementById("madLibsBtn")


const madLibs = async (charaOne, charaTwo,placeOne,adjectOne,nounOne,optionOne,colorOne,reactionOne,expressOne,WeatherOne,AnswerTwo,ReviewOne) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/MadLib/MadLib/${charaOne}/${charaTwo}/${placeOne}/${adjectOne}/${nounOne}/${optionOne}/${colorOne}/${reactionOne}/${expressOne}/${WeatherOne}/${AnswerTwo}/${ReviewOne}`);
    const data = await promise.text();

    madLibsDiv.innerText = data;
}

if(madLibsBtn){
    madLibsBtn.addEventListener("click", function () {
        charaOne = charNameOne.value;
        charaTwo = charNameTwo.value;
        placeOne = aPlace
        adjectOne = anAdjective
        nounOne = aNoun
        optionOne = aOption
        colorOne = aColor
        reactionOne = aReaction
        expressOne = aExpression
        WeatherOne = aWeather
        AnswerTwo = aAnswer
        ReviewOne = aReview
        madLibs(numberOne, numberTwo);
    })
}









let summitOne = document.getElementById("summitOne")
let sumOfTwoNumbersBtn = document.getElementById("sumOfTwoNumbersBtn")

// magic 8 ball
let yourQuestion = document.getElementById("yourQuestion")
let yourQuestionBtn = document.getElementById("yourQuestionBtn")

const Magic8Ball = async (Responses) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/EightBall/Magic/${Responses}`);
    const data = await promise.text();

    yourQuestionDiv.innerText = data;
}

if(yourQuestionBtn){
    yourQuestionBtn.addEventListener("click", function () {
        Responses = yourQuestion.value;
        GreaterOrLess(Responses);
    })
}
// end Magic 8 ball


// restaurantPicker 
let restaurantPickerInput = document.getElementById("restaurantPicker")
let restaurantPickerBtn = document.getElementById("restaurantPickerBtn")

const restaurantPicker = async () => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/RestaurantPicker/restaurantPicker/${playerChoice}`);
    const data = await promise.text();

    restaurantPickerDiv.innerText = data;
}

if(restaurantPickerBtn){
    restaurantPickerBtn.addEventListener("click", function () {
        playerChoice = restaurantPickerInput.value;
        restaurantPicker(playerChoice);
    })
}
// end of restaurant 