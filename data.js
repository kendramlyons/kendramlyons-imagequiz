let q1 = {picture: 'q1.png', choices: ['c1', 'c2', 'c3'], answer: 'c2'}; 
let q2 = {picture: 'q2.png', choices: ['c1', 'c2', 'c3'], answer: 'c2'}; 
let q3 = {picture: 'q3.png', choices: ['c1', 'c2', 'c3'], answer: 'c2'}; 
let q4 = {picture: 'q4.png', choices: ['c1', 'c2', 'c3'], answer: 'c2'}; 
let q5 = {picture: 'q5.png', choices: ['c1', 'c2', 'c3'], answer: 'c2'}; 
let q6 = {picture: 'q6.png', choices: ['c1', 'c2', 'c3'], answer: 'c2'}; 

let quiz1 = {name: 'Quiz 1', id: 1, picture: 'quiz1.png', questions: [q1, q2, q3]};
let quiz2 = {name: 'Quiz 2', id: 2, picture: 'quiz2.png', questions: [q4, q5, q6]};

let quizzes = [quiz1, quiz2];

module.exports.quizzes = quizzes; 
