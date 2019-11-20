var next = 0
var userAnswers = []
var scored = 0

let questions = [{
    prompt: 'What character is featured in this meme?',
    answers: ['Sonic', 'Spongebob', 'Frodo', 'Patrick'],
    correctAnswerIndex: 1,
    img: './img/headout.jpg'
 }, {
    prompt: 'What video game is this reference from?',
    answers: ['Call of Duty', 'Fifa', 'GTA', 'Fortnite'],
    correctAnswerIndex: 2,
    img: './img/go.jpg'
 }, {
    prompt: 'What TV show is this character from?',
    answers: ['The Simpsons', 'Rick & Morty', 'Bob\'s Burgers', 'Family Guy'],
    correctAnswerIndex: 0,
    img: './img/simpsons.jpg'
 }, {
    prompt: 'Who this character?',
    answers: ['Peter Griffin', 'Bender', 'Fry', 'Gary'],
    correctAnswerIndex: 2,
    img: './img/huh.png'
 }, {
    prompt: 'What  is the color of the cat?',
    answers: ['Black', 'White', 'Orange', 'Pink'],
    correctAnswerIndex: 1,
    img: './img/woman.jpg'
 }]
 

//after clicking start, make quiz and next button visible
$('.start').click(function() {
    $('#quesAndAns').css('visibility','visible')
    $('.next').css('visibility', 'hidden')
    $('.start').css('visibility', 'hidden')
    next = 0
    $('#message').text('')
    quiz()
})

$('.submit').click(function() {
    //tell user score at the end
    score()
    //on submit, give score, make start button available again
    $('.start').css('visibility', 'visible').text('Play Again')
    $('.submit').css('visibility', 'hidden')
    $('.back').css('visibility', 'hidden')
})

//add event listener to each answer choice
//add user choice to index of array matching question number
$('.ansChoice').each(function() {
    $(this).click(function() {
        var index = $('.ansChoice').index($(this))
        userAnswers[next] = index
        if (userAnswers.length >= (next+1) && (next < 4)) {
            $('.next').css('visibility', 'visible')
            
        } else if (userAnswers.length >= (next+1) && (next == 4)){
            $('.submit').css('visibility', 'visible')
        }
    })
})

//set question to prompt, need to vary depending on question number
const quiz = () => {
    //display content based on question
    $('#ques').text(questions[next].prompt)
    $('.ansChoice').each(function() {
        $(this).text(questions[next].answers[$('.ansChoice').index($(this))])
    })
    $('img').attr('src', questions[next].img)
    $('#tracker').text('Question '+ (next+1) + " of 5")
    //show back button only after ques 1, submit button after question 5, and next after 1
    if (next == 0) {
        $('.back').css('visibility', 'hidden')
    } else if (next == 4) {
        $('.next').css('visibility', 'hidden')
    } else {
        $('.submit').css('visibility', 'hidden')
    }

    $('.next').css('visibility', 'hidden')
}

//add event listener to back button that changes next value
$('.back').click(function() {
    next--
    $('.next').css('visibility', 'visible')
    quiz()
})

//add event listener to next button that changes next value
//once back/next is chosen, new next value, run to get content
//dont allow to continue without answer (turn event listener for button off and activate on click)
$('.next').click(function() {
    next++
    $('.back').css('visibility', 'visible')
    quiz()
})

const score = () => {
    for (let i = 0; i < userAnswers.length; i++) {
        console.log(userAnswers[i])
        console.log(questions[i].correctAnswerIndex)
        if (userAnswers[i] == questions[i].correctAnswerIndex) {
            scored++

        }
    }
    $('#message').text('You scored ' + scored + ' out of 5.')
}