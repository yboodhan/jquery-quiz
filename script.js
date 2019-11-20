let questions = [{
    prompt: "What character is is featured in this meme?",
    answers: ["Sonic", "Spongebob", "Frodo", "Patrick"],
    correctAnswerIndex: 1
 }, {
    prompt: "What video game is this referenced from?",
    answers: ["Call of Duty", "Fifa", "GTA", "Fortnite"],
    correctAnswerIndex: 2
 }, {
    prompt: "What TV show is this character from?",
    answers: ["The Simpsons", "Rick & Morty", "Bob's Burgers", "Family Guy"],
    correctAnswerIndex: 0
 }, {
    prompt: "Who this character?",
    answers: ["Peter Griffin", "Bender", "Fry", "Gary"],
    correctAnswerIndex: 2
 }, {
    prompt: "What  is the color of the cat?",
    answers: ["Black", "White", "Orange", "Pink"],
    correctAnswerIndex: 1
 }]
 
var quesNum = 0
var next = 0
let userAnswers = []

//after clicking start, make quiz and next button visible
$('.start').click(function() {
    $('#quesAndAns').css('visibility','visible')
    $('.next').css('visibility', 'visible')
})


//add event listener to next button that changes next value
$('.next').click(function() {
    next++
    console.log(next)
})

//add event listener to back button that changes next value
$('.back').click(function() {
    next--
    console.log(next)
})

//show back button only after ques 1



//add event listener to each answer choice
//add user choice to index of array matching question number
$('.ansChoice').each(function() {
    $(this).click(function() {
        var index = $('.ansChoice').index($(this))
        userAnswers[next] = index
        console.log(index + " is index")
        console.log(userAnswers)
    })
})
 
 console.log(questions)