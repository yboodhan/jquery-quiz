var quesNum = 0
var next = 0

$('.start').click(function() {
    $('#quesAndAns').css('visibility','visible')
    $('.next').css('visibility', 'visible').click(function() {
        next++
        console.log(next)
        $('.back').css('visibility', 'visible')
    })
})

$('.back').click(function() {
    next--
    console.log(next)
})

let answers = []





let questions = [{
    prompt: "What character is is featured in this meme?",
    answers: ["Sonic", "Spongebob", "Frodo", "Patrick"],
    correctAnswerIndex: 1
 }, {
    prompt: "What video game is this referenced from?",
    answers: ["Call of Duty", "Fifa", "GTA", "Fortnite"],
    correctAnswerIndex: 2
 }, {
    prompt: "What tv show is this character from?",
    answers: ["The Simpsons", "Rick & Morty", "Bob's Burgers", "Family Guy"],
    correctAnswerIndex: 0
 }, {
    prompt: "This character's name is ?",
    answers: ["Peter griffin", "Bender", "Fry", "Gary"],
    correctAnswerIndex: 2
 }, {
    prompt: "What  is the color of the cat?",
    answers: ["Black", "White", "Orange", "Pink"],
    correctAnswerIndex: 1
 }]
 
 console.log(questions)