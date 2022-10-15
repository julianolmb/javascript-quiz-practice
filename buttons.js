const buttonNext = document.getElementById("next");
buttonNext.addEventListener("click", next);
buttonNext.classList.add("show");

const buttonPrevious = document.getElementById("previous");
buttonPrevious.addEventListener("click", previous);

const buttonSubmit = document.getElementById("submit");
buttonSubmit.addEventListener("click", submit);

function hideButton(button) {
  button.classList.remove("show");
}

function showButton(button) {
  button.classList.add("show");
}

function checkHiddenButton() {
  if (step > 0) {
    showButton(buttonPrevious);
  }

  if (step < questions.length - 1) {
    showButton(buttonNext);
    hideButton(buttonSubmit);
  }

  if (step == 0) {
    hideButton(buttonPrevious);
  }

  if (step == questions.length - 1) {
    hideButton(buttonNext);
    showButton(buttonSubmit);
  }
}

function next() {
  if (writeAnswer()) {
    if (step + 1 < questions.length) {
      step++;
      refresh();
    }
    checkHiddenButton();
  }
}

function previous() {
  if (step > 0) {
    step--;
    refresh();
  }
  checkHiddenButton();
}

function submit() {
  if (writeAnswer()) {
    showScore();
    hideButton(buttonSubmit);
    hideButton(buttonPrevious);
  }
}
