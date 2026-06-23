let questionsInfo = [
  {
    id: 0,
    question: "What is the capital of France?",
    answer: "Paris",
    option1: "London",
    option2: "Paris",
    option3: "Berlin",
    option4: "Rome",
  },
  {
    id: 1,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    option1: "Earth",
    option2: "Venus",
    option3: "Mars",
    option4: "Jupiter",
  },
  {
    id: 2,
    question: "How many days are there in a week?",
    answer: "7",
    option1: "5",
    option2: "6",
    option3: "7",
    option4: "8",
  },
  {
    id: 3,
    question: "What color do you get by mixing red and blue?",
    answer: "Purple",
    option1: "Green",
    option2: "Orange",
    option3: "Purple",
    option4: "Yellow",
  },
  {
    id: 4,
    question: "Which animal is called the King of the Jungle?",
    answer: "Lion",
    option1: "Tiger",
    option2: "Elephant",
    option3: "Lion",
    option4: "Bear",
  },
];

let numOfAllQuestions = document.querySelector("#numOfAllQuestions");
numOfAllQuestions.innerHTML = questionsInfo.length;

let guideSection = document.querySelector(".guide-section");
let questionsSection = document.querySelector(".questions-section");
let startQuizBtn = document.querySelector("#startQuizBtn");
startQuizBtn.addEventListener("click", () => {
  guideSection.style.display = "none";
  questionsSection.style.display = "block";
  showQuestion();
});

let randomIndexes = [];

questionsInfo.forEach((element) => {
  randomIndexes.push(element.id);
});

for (let i = randomIndexes.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));

  [randomIndexes[i], randomIndexes[j]] = [randomIndexes[j], randomIndexes[i]];
}

const randomQuestionsInfo = [];

randomIndexes.forEach((index) => {
  randomQuestionsInfo.push(questionsInfo[index]);
});

let currentQuestionsIndex = 0;
let myQuestionInfo = randomQuestionsInfo[currentQuestionsIndex];

let fullScore = 20;
let trueAnswer = myQuestionInfo.answer;
const questionScore = 20 / questionsInfo.length;

let questionCounter = 1;

function showQuestion() {
  if (currentQuestionsIndex >= questionsInfo.length) {
    showResults();
    return;
  }

  let numOfQuestionsLeft = document.querySelector("#numOfQuestionsLeft");

  let timeRemaining = document.querySelector("#timeRemaining");
  let timeRemainingParent = document.querySelector("#showTime");

  const myQuestionInfo = randomQuestionsInfo[currentQuestionsIndex];
  // show question
  let showQuestionH2 = document.querySelector("#showQuestionH2");
  showQuestionH2.innerHTML = myQuestionInfo.question;
  currentQuestionsIndex++;

  let time = 30;
  let timer = setInterval(() => {
    time--;

    if (time > 9) {
      timeRemaining.innerHTML = time;
    } else {
      timeRemaining.innerHTML = "0" + time;
    }

    if (time <= 5 && time > 0) {
      timeRemainingParent.style.color = "red";
    } else if (time <= 0) {
      if (questionCounter < questionsInfo.length) {
        clearInterval(timer);
        questionCounter++;
        numOfQuestionsLeft.innerHTML = questionCounter;
        showQuestion();
      } else if (questionCounter >= questionsInfo.length) {
        clearInterval(timer);
        showResults();
      }
      timeRemainingParent.style.color = "black";
    }
  }, 1_000);

  let showOption1 = document.querySelector("#showOption1");
  showOption1.style.display = "inline-block";
  showOption1.innerHTML = myQuestionInfo.option1;
  showOption1.onclick = () => {
    if (myQuestionInfo.option1 == myQuestionInfo.answer) {
      clearInterval(timer);
      showQuestion();
      questionCounter++;
      numOfQuestionsLeft.innerHTML = questionCounter;
    } else {
      fullScore -= questionScore;
      clearInterval(timer);
      showQuestion();
      questionCounter++;
      numOfQuestionsLeft.innerHTML = questionCounter;
    }
  };

  let showOption2 = document.querySelector("#showOption2");
  showOption2.style.display = "inline-block";
  showOption2.innerHTML = myQuestionInfo.option2;
  showOption2.onclick = () => {
    if (myQuestionInfo.option2 == myQuestionInfo.answer) {
      clearInterval(timer);
      showQuestion();
      questionCounter++;
      numOfQuestionsLeft.innerHTML = questionCounter;
    } else {
      fullScore -= questionScore;
      clearInterval(timer);
      showQuestion();
      questionCounter++;
      numOfQuestionsLeft.innerHTML = questionCounter;
    }
  };

  let showOption3 = document.querySelector("#showOption3");
  showOption3.style.display = "inline-block";
  showOption3.innerHTML = myQuestionInfo.option3;
  showOption3.onclick = () => {
    if (myQuestionInfo.option3 == myQuestionInfo.answer) {
      clearInterval(timer);
      showQuestion();
      questionCounter++;
      numOfQuestionsLeft.innerHTML = questionCounter;
    } else {
      fullScore -= questionScore;
      clearInterval(timer);
      showQuestion();
      questionCounter++;
      numOfQuestionsLeft.innerHTML = questionCounter;
    }
  };

  let showOption4 = document.querySelector("#showOption4");
  showOption4.style.display = "inline-block";
  showOption4.innerHTML = myQuestionInfo.option4;
  showOption4.onclick = () => {
    if (myQuestionInfo.option4 == myQuestionInfo.answer) {
      clearInterval(timer);
      showQuestion();
      questionCounter++;
      numOfQuestionsLeft.innerHTML = questionCounter;
    } else {
      fullScore -= questionScore;
      clearInterval(timer);
      showQuestion();
      questionCounter++;
      numOfQuestionsLeft.innerHTML = questionCounter;
    }
  };
}


function showResults() {
  let resultSection = document.querySelector(".result-section");
  let showScoreH2 = document.querySelector(".score");
  let appMessageAboutScore = document.querySelector("#appMessageAboutScore");

  questionsSection.style.display = "none";
  resultSection.style.display = "flex";

  showScoreH2.innerHTML = fullScore;

  if(fullScore >= 10) {
    appMessageAboutScore.style.color = "green";
    appMessageAboutScore.innerHTML = "You are accepted";
  } else {
    appMessageAboutScore.style.color = "red";
    appMessageAboutScore.innerHTML = "You are rejected";
  }
}