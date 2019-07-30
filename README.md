# Group Assignment: jQuery Quiz

For this lab you will be in small groups (2-3 people). Your goal is to create a functional internet quiz! The topic can be whatever you'd like–maybe keep it PG-13 in order to share with the class though! 😄

## Pre-Requisites

Before attempting this assignment, students should have some knowledge of:

* DOM Manipulation
* The jQuery library
* JavaScript objects and arrays
* Looping over JavaScript arrays

## Requirements:

* At least 5 questions
* A result or score is displayed at the end
* Radio buttons (if used) are reset after submitting an answer
* Don't let a user continue if they didn't select an answer
* Present your quiz to the class

Here's a big hint: You need to represent your question and answer data as an array of objects.

Your array of question objects could potentially look like the code below. It doesn't need to look exactly like this and you are encouraged to deviate as your requirements demand, but it's here to get you started if you need:

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
  > Hint: If you've set up your data correctly, it should just be a matter of adding more data!
* Mix up the question order for each person that takes the quiz. 
  > Hint: use the built-in sort and Math.random for this
* Split the question data and the quiz logic into two separate files
  > Hint: Make sure the questions file is the first script you include in your HTML. 

## Deliverable

Be prepared to share your results with the class! Focus on basic usability first, but make some efforts toward presentability once that is done. You and your group members will be receiving homework credit for making your presentation in class.

Once you are done with the assignment, reflect on why it was useful to make an array of question objects. What would your code have looked like without it?
