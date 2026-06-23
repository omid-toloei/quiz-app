# Quiz App

A simple multiple-choice quiz app with a 30-second timer per question, built with vanilla JavaScript, HTML, and CSS.

## Features

- 5 multiple-choice questions, shuffled randomly each time
- 30-second timer per question (turns red in the last 5 seconds)
- Auto-advances to the next question when time runs out
- Score calculated out of 20
- Pass/fail message: score ≥ 10 → "You are accepted", otherwise "You are rejected"

## Project Structure

```
.
├── index.html
├── javascript/
│   └── app.js
└── styles/
    └── style.css
```

## Run Locally

Just open `index.html` in your browser. No build step or dependencies required.

## Notes

- Questions and answers are defined in the `questionsInfo` array in `app.js` — edit this array to add/remove/change questions.
- File paths in `index.html` expect `app.js` inside a `javascript/` folder and `style.css` inside a `styles/` folder.
