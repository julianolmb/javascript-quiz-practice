function questionBuild(question) {
  const questionsElement = document.getElementById("questions");
  questionsElement.innerHTML = "";

  const divElement = document.createElement("div");
  divElement.classList.add("answers-content");

  const pElement = document.createElement("p");
  pElement.innerText = question.title;

  for (let index in question.answers) {
    const inputElement = document.createElement("input");
    inputElement.id = question.answers[index].id;
    inputElement.type = "radio";
    inputElement.name = question.id;
    inputElement.value = question.answers[index].id;

    const labelElement = document.createElement("label");
    labelElement.for = question.answers[index].id;
    labelElement.innerHTML = question.answers[index].title;

    divElement.appendChild(inputElement);
    divElement.appendChild(labelElement);
  }

  questionsElement.appendChild(pElement);
  questionsElement.appendChild(divElement);
}

function buildScores(correctScores) {
  const questionsElement = document.getElementById("questions");
  questionsElement.innerHTML = "";

  const pElement = document.createElement("p");
  pElement.innerText = `Your score is ${correctScores} / ${questions.length}`;

  questionsElement.appendChild(pElement);
}
