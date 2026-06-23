const questions = [
{
text:"Your bank asks you to click a link immediately to avoid account suspension.",
answer:"phishing"
},
{
text:"You receive an email from your college's official domain about exam schedules.",
answer:"legitimate"
},
{
text:"A message says you've won ₹50,000 and must share OTP to claim it.",
answer:"phishing"
},
{
text:"Amazon sends order confirmation for a product you purchased.",
answer:"legitimate"
}
];

let current = 0;
let score = 0;

function loadQuestion(){
document.getElementById("question").innerText =
questions[current].text;
}

function checkAnswer(choice){

if(choice === questions[current].answer){
score++;
document.getElementById("result").innerText =
"✅ Correct!";
}
else{
document.getElementById("result").innerText =
"❌ Wrong!";
}

current++;

setTimeout(()=>{

if(current < questions.length){
loadQuestion();
document.getElementById("result").innerText="";
}
else{
document.getElementById("quiz-box").innerHTML =
`<h2>Quiz Completed!</h2>
<h3>Your Score: ${score}/${questions.length}</h3>`;
}

},1000);

}

loadQuestion();
