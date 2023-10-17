// დავალება

// ● შექმენი <button> და <div> ელემენტები და
// მიანიჭეთ საკუთარი უნიკალური id
// ● <div> - ში ჩაწერე პატარა random ტექსტი
// ● ღილაკზე დაჭერის შემთხვევაში დამალე
// <div> ელემენტი

const div = document.createElement('div');
div.innerHTML = `<p>This is some dummy paragraph text</p>`

const button = document.createElement('button');
button.innerText = 'Hide'

document.body.append(div, button)

button.addEventListener('click', () => {
    div.style.display = 'none';
})


// ● შექმენი შემდეგი სტრუქტურა JS -ის
// გამოყენებით და დაამატე DOM-ში:
// <div id=”card”>
// <h2>Gandalf</h2>
// <a href=”#”>Go to profile</a>
// </div>

const divTask2 = document.createElement('div');
divTask2.setAttribute('id', 'card');

const headingTask2 = document.createElement('h2');
headingTask2.innerText = 'Gandalf';

const anchorTask2 = document.createElement('a');
anchorTask2.setAttribute('href', '#');
anchorTask2.innerText = 'Go to profile';

divTask2.append(headingTask2, anchorTask2);
document.body.appendChild(divTask2);

// ● შექმენი quiz თამაში
// ● დაწერე რამდენიმე მოკლე შეკითხვა
// თავისი სავარაუდო პასუხებით
// ● სწორ პასუხზე დაჭერის შემთხვევაში
// გაამწვანე პასუხი
// ● არასწორი პასუხის შემთხვევაში გააწითლე
// ● ბონუს დავალება:
// გამოიტანე ეკრანზე ქულების რაოდენობა
// ➔ სწორი პასუხის შემთხვევაში დაამატე 1
// ქულა
// ➔ არასწორის შემთხვევაში უცვლელი რჩება


const questions = [
    {
      question: "What year did the Titanic sink in the Atlantic Ocean on 15 April, on its maiden voyage from Southampton?",
      answers: ["1912", "1920", "1945", "1908"],
      correctAnswer: "1912"
    },
    {
      question: "What is the title of the first ever Carry On film made and released in 1958?",
      answers: ["Carry On Camping", "Carry On Doctor", "Carry On Sergeant", "Carry On Cleo"],
      correctAnswer: "Carry On Sergeant"
    },
    {
      question: "What is the name of the biggest technology company in South Korea?",
      answers: ["LG Electronics", "Hyundai", "Samsung", "SK Hynix"],
      correctAnswer: "Samsung"
    },
    {
      question: "Which singer fronted the 1970s pop group Showaddywaddy?",
      answers: ["David Bowie", "Elton John", "Freddie Mercury", "Dave Bartram"],
      correctAnswer: "Dave Bartram"
    }
];

let currentQuestion = 0;
let points = 0;

const pointsHeader = document.createElement('h3');
pointsHeader.innerText = `Points: ${points}`;

const questionDiv = document.createElement('div');
questionDiv.id = 'question';
document.body.append(questionDiv, pointsHeader);


const nextQuestionButton = document.createElement('button');
nextQuestionButton.id = 'nextQuestion';
nextQuestionButton.innerText = 'Next Question';
document.body.appendChild(nextQuestionButton);

function renderQuestion() {
    const currentQuestionObj = questions[currentQuestion];
    questionDiv.innerHTML = `<div><h2>${currentQuestionObj.question}</h2></div>`;
    currentQuestionObj.answers.forEach(answer => {
       const answerButton = document.createElement('button');
       answerButton.innerText = answer;
       answerButton.addEventListener('click', () => {
         if (answer === currentQuestionObj.correctAnswer) {
           answerButton.style.backgroundColor = 'green';
           points++;
           pointsHeader.innerText = `Points: ${points}`;
        } else {
           answerButton.style.backgroundColor = 'red';
        }
           document.querySelectorAll('#question button').forEach(button => button.disabled = true);
      });
      questionDiv.appendChild(answerButton);
    });
}

renderQuestion();

nextQuestionButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
       renderQuestion();
    } else {
       questionDiv.innerHTML = `<div><h2>Quiz is over, you have ${points} points.</h2></div>`;
       pointsHeader.remove();
       nextQuestionButton.remove();
    }
  });