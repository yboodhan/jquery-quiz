# Group Assignment: jQuery Quiz

For this lab you will be in small groups (2-3 people). Your goal is to create a functional internet quiz! The topic can be whatever you'd like–maybe keep it PG-13 in order to share with the class though! :)

## Pre-Requisites

Before attempting this assignment, students should have some knowledge of:

* DOM Manipulation
* The jQuery library

## Requirements:

* At least 5 questions
* A result or score is displayed at the end
* Radio buttons (if used) are reset after submitting an answer
* Don't let a user continue if they didn't select an answer!

Hint: You need to represent your question and answer data as an array of objects. 

Your array of question objects could potentially look like this:

```js
let questions = [{
  prompt: "Who is the prime minister of Canada?",
  answers: ["Justin Trudeau", "Wayne Gretski", "Tim Horton", "Mike"],
  correctAnswerIndex: 0
}, {
  prompt: "Which of the following is a strongly-typed language?",
  answers: ["JavaScript", "Ruby", "Java", "Python"],
  correctAnswerIndex: 2
}];
```

## BONUS:

* Implement a back button. This will require you to track which questions have been answered and which have not!
  > Hint: Store the user's answer as part of each question object.
* Be able to dynamically add more questions without changing your code logic.
* Mix up the question order for each person that takes the quiz. 
  > Hint: use the built-in sort and Math.random for this


