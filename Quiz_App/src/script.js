let score = 0;
const options = document.querySelector('.options');

const q1_option1 = document.querySelector('.q1_option1');
const q1_option2 = document.querySelector('.q1_option2');
const q1_option3 = document.querySelector('.q1_option3');
const q1_option4 = document.querySelector('.q1_option4');
//!----------------------------------------------------!//
const q2_option1 = document.querySelector('.q2_option1');
const q2_option2 = document.querySelector('.q2_option2');
const q2_option3 = document.querySelector('.q2_option3');
const q2_option4 = document.querySelector('.q2_option4');
//!----------------------------------------------------!//
const q3_option1 = document.querySelector('.q3_option1');
const q3_option2 = document.querySelector('.q3_option2');
const q3_option3 = document.querySelector('.q3_option3');
const q3_option4 = document.querySelector('.q3_option4');
//!----------------------------------------------------!//
const q4_option1 = document.querySelector('.q4_option1');
const q4_option2 = document.querySelector('.q4_option2');
const q4_option3 = document.querySelector('.q4_option3');
const q4_option4 = document.querySelector('.q4_option4');
//!----------------------------------------------------!//
const q5_option1 = document.querySelector('.q5_option1');
const q5_option2 = document.querySelector('.q5_option2');
const q5_option3 = document.querySelector('.q5_option3');
const q5_option4 = document.querySelector('.q5_option4');
//!----------------------------------------------------!//
const q6_option1 = document.querySelector('.q6_option1');
const q6_option2 = document.querySelector('.q6_option2');
const q6_option3 = document.querySelector('.q6_option3');
const q6_option4 = document.querySelector('.q6_option4');
//!----------------------------------------------------!//
const q7_option1 = document.querySelector('.q7_option1');
const q7_option2 = document.querySelector('.q7_option2');
const q7_option3 = document.querySelector('.q7_option3');
const q7_option4 = document.querySelector('.q7_option4');
//!----------------------------------------------------!//
const q8_option1 = document.querySelector('.q8_option1');
const q8_option2 = document.querySelector('.q8_option2');
const q8_option3 = document.querySelector('.q8_option3');
const q8_option4 = document.querySelector('.q8_option4');
//!----------------------------------------------------!//
const q9_option1 = document.querySelector('.q9_option1');
const q9_option2 = document.querySelector('.q9_option2');
const q9_option3 = document.querySelector('.q9_option3');
const q9_option4 = document.querySelector('.q9_option4');
//!----------------------------------------------------!//
const q10_option1 = document.querySelector('.q10_option1');
const q10_option2 = document.querySelector('.q10_option2');
const q10_option3 = document.querySelector('.q10_option3');
const q10_option4 = document.querySelector('.q10_option4');
//!----------------------------------------------------!//

function question1() {
  //` Wrong Answers
  q1_option3.style.border = 'none';
  q1_option3.style.backgroundColor = 'lightcoral';
  q1_option2.style.border = 'none';
  q1_option2.style.backgroundColor = 'lightcoral';
  q1_option4.style.border = 'none';
  q1_option4.style.backgroundColor = 'lightcoral';
  //h Right Answer
  q1_option1.style.border = 'none';
  q1_option1.style.backgroundColor = 'green';
}
function handleClick() {
  score = score + 10;
  document.querySelector('.score').innerHTML = score;
  document
    .querySelector('.q1_option1')
    .removeEventListener('click', handleClick);
}
document.querySelector('.q1_option1').addEventListener('click', handleClick);

function question2() {
  //` Wrong Answers
  q2_option3.style.border = 'none';
  q2_option3.style.backgroundColor = 'lightcoral';
  q2_option2.style.border = 'none';
  q2_option2.style.backgroundColor = 'lightcoral';
  q2_option4.style.border = 'none';
  q2_option4.style.backgroundColor = 'lightcoral';
  //h Right Answer
  q2_option1.style.border = 'none';
  q2_option1.style.backgroundColor = 'green';
}
function handleClick() {
  score = score + 10;
  document.querySelector('.score').innerHTML = score;
  document
    .querySelector('.q2_option1')
    .removeEventListener('click', handleClick);
}
document.querySelector('.q2_option1').addEventListener('click', handleClick);

function question3() {
  //` Wrong Answers
  q3_option3.style.border = 'none';
  q3_option3.style.backgroundColor = 'lightcoral';
  q3_option2.style.border = 'none';
  q3_option2.style.backgroundColor = 'lightcoral';
  q3_option4.style.border = 'none';
  q3_option4.style.backgroundColor = 'lightcoral';
  //h Right Answer
  q3_option1.style.border = 'none';
  q3_option1.style.backgroundColor = 'green';
}
function handleClick() {
  score = score + 10;
  document.querySelector('.score').innerHTML = score;
  document
    .querySelector('.q3_option1')
    .removeEventListener('click', handleClick);
}
document.querySelector('.q3_option1').addEventListener('click', handleClick);

function question4() {
  //` Wrong Answers
  q4_option3.style.border = 'none';
  q4_option3.style.backgroundColor = 'lightcoral';
  q4_option1.style.border = 'none';
  q4_option1.style.backgroundColor = 'lightcoral';
  q4_option4.style.border = 'none';
  q4_option4.style.backgroundColor = 'lightcoral';
  //h Right Answer
  q4_option2.style.border = 'none';
  q4_option2.style.backgroundColor = 'green';
}
function handleClick() {
  score = score + 10;
  document.querySelector('.score').innerHTML = score;
  document
    .querySelector('.q4_option1')
    .removeEventListener('click', handleClick);
}
document.querySelector('.q4_option1').addEventListener('click', handleClick);

function question5() {
  //` Wrong Answers
  q5_option3.style.border = 'none';
  q5_option3.style.backgroundColor = 'lightcoral';
  q5_option1.style.border = 'none';
  q5_option1.style.backgroundColor = 'lightcoral';
  q5_option2.style.border = 'none';
  q5_option2.style.backgroundColor = 'lightcoral';
  //h Right Answer
  q5_option4.style.border = 'none';
  q5_option4.style.backgroundColor = 'green';
}
function handleClick() {
  score = score + 10;
  document.querySelector('.score').innerHTML = score;
  document
    .querySelector('.q5_option4')
    .removeEventListener('click', handleClick);
}
document.querySelector('.q5_option4').addEventListener('click', handleClick);

function question6() {
  //` Wrong Answers
  q6_option3.style.border = 'none';
  q6_option3.style.backgroundColor = 'lightcoral';
  q6_option4.style.border = 'none';
  q6_option4.style.backgroundColor = 'lightcoral';
  q6_option2.style.border = 'none';
  q6_option2.style.backgroundColor = 'lightcoral';
  //h Right Answer
  q6_option1.style.border = 'none';
  q6_option1.style.backgroundColor = 'green';
}
function handleClick() {
  score = score + 10;
  document.querySelector('.score').innerHTML = score;
  document
    .querySelector('.q6_option1')
    .removeEventListener('click', handleClick);
}
document.querySelector('.q6_option1').addEventListener('click', handleClick);

function question7() {
  //` Wrong Answers
  q7_option3.style.border = 'none';
  q7_option3.style.backgroundColor = 'lightcoral';
  q7_option1.style.border = 'none';
  q7_option1.style.backgroundColor = 'lightcoral';
  q7_option2.style.border = 'none';
  q7_option2.style.backgroundColor = 'lightcoral';
  //h Right Answer
  q7_option4.style.border = 'none';
  q7_option4.style.backgroundColor = 'green';
}
function handleClick() {
  score = score + 10;
  document.querySelector('.score').innerHTML = score;
  document
    .querySelector('.q7_option1')
    .removeEventListener('click', handleClick);
}
document.querySelector('.q7_option1').addEventListener('click', handleClick);

function question8() {
  //` Wrong Answers
  q8_option3.style.border = 'none';
  q8_option3.style.backgroundColor = 'lightcoral';
  q8_option4.style.border = 'none';
  q8_option4.style.backgroundColor = 'lightcoral';
  q8_option2.style.border = 'none';
  q8_option2.style.backgroundColor = 'lightcoral';
  //h Right Answer
  q8_option1.style.border = 'none';
  q8_option1.style.backgroundColor = 'green';
}
function handleClick() {
  score = score + 10;
  document.querySelector('.score').innerHTML = score;
  document
    .querySelector('.q8_option1')
    .removeEventListener('click', handleClick);
}
document.querySelector('.q8_option1').addEventListener('click', handleClick);

function question9() {
  //` Wrong Answers
  q9_option1.style.border = 'none';
  q9_option1.style.backgroundColor = 'lightcoral';
  q9_option4.style.border = 'none';
  q9_option4.style.backgroundColor = 'lightcoral';
  q9_option2.style.border = 'none';
  q9_option2.style.backgroundColor = 'lightcoral';
  //h Right Answer
  q9_option3.style.border = 'none';
  q9_option3.style.backgroundColor = 'green';
}
function handleClick() {
  score = score + 10;
  document.querySelector('.score').innerHTML = score;
  document
    .querySelector('.q9_option3')
    .removeEventListener('click', handleClick);
}
document.querySelector('.q9_option3').addEventListener('click', handleClick);

function question10() {
  //` Wrong Answers
  q10_option3.style.border = 'none';
  q10_option3.style.backgroundColor = 'lightcoral';
  q10_option4.style.border = 'none';
  q10_option4.style.backgroundColor = 'lightcoral';
  q10_option2.style.border = 'none';
  q10_option2.style.backgroundColor = 'lightcoral';
  //h Right Answer
  q10_option1.style.border = 'none';
  q10_option1.style.backgroundColor = 'green';
}
function handleClick() {
  score = score + 10;
  document.querySelector('.score').innerHTML = score;
  document
    .querySelector('.q10_option1')
    .removeEventListener('click', handleClick);
}
document.querySelector('.q10_option1').addEventListener('click', handleClick);
