fetch("./questions.json")
  .then((response) => response.json())
  .then((response) => init(response));

let questions = [];
let step = 0;

function init(data) {
  questions = data;
  questionBuild(data[step]);
}

function refresh() {
  questionBuild(questions[step]);
}

function getAnswer() {
  const answers = document.querySelectorAll("input");
  let answer = undefined;
  for (let index in answers) {
    if (answers[index].checked) {
      answer = answers[index].value;
    }
  }
  return answer;
}

function writeAnswer() {
  const answer = getAnswer();
  if (answer) {
    questions[step].answer = answer;
    return true;
  }
  return false;
}

function showScore() {
  fetch("./template.json")
    .then((response) => response.json())
    .then((response) => compareAnswers(response));

  function compareAnswers(template) {
    let count = 0;
    const answers = [];

    // for (let index in questions) {
    //   answers.push({
    //     questions: questions[index].title,
    //     correct: template.includes(questions[index].answer),
    //   });
    // }

    // answers.forEach((answer) => {
    //   if (answer.correct) {
    //     count++;
    //   }
    // });

    for (let index in questions) {
      if (template.includes(questions[index].answer)) {
        count++;
      }
    }
    buildScores(count);
  }
}
