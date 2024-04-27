// Sample questions data
const questions = {
    1 : "What 'D' term refers to a group of computers, printers and devices that are interconnected and governed as a whole? The word can also be used to describe a specified area of knowledge.",
    2 : "Name one of the three words represented by the acronym URL.",
    3 : "What is the short form for 'modulator-demodulator'?",
    4 : "Name the company that took its name from the Latin word for 'envy' and features product families GeForce, Quadro, and Tegra",
    5 : "Typically around 0.1 mm, a mickey is a unit for the smallest detectable movement of which piece of computer hardware?",
    6 : "In 2014, Google partnered with Game Freak and Nintendo as part of an April Fool's Day prank to create a new version of Google Maps populated by small creatures. This prank inspired what massively popular 2016 video game?",
    7 : "What North Carolina-based video game company created the 2018 breakout hit 'Fortnite'?",
    8 : "When the kids online say 'LoL', they're either laughing or referencing what online battle arena game that's been sponsored by Mastercard since 2018?",
    9 : "Sun, Moon, Diamond, Pearl, and SoulSilver have all been names of games in what iconic video game franchise?",
    10: "What did the computer eat on the moon?",
    11: "What do computers eat for a snack?",
    12: "What did the spider make on the computer?",
    13: "I’m a web that’s never woven, and I connect you to the world. What am I?",
    14: "I have a tail and two flat ears. I move with no feet.",
    15: "Who is known as the 'father of modern computers,?",
    16: "In what year was the first iPhone released?",
    17: "What is the process of converting data into a code to prevent unauthorized access called?",
    18: "What does the term 'RAM' stand for in computing?",
    19: "What does the acronym 'PDF' stand for?",
    20: "What is the name of the AI that defeated the world chess champion Garry Kasparov in 1997?",
    21: "What is the name of the framework developed by Google for implementing and deploying machine learning models at scale?",
    22: "Which programming language is commonly used for data analysis and data visualization in the field of data science?",
    23: "Name 2 tools used for creating data visualizations.",
    24: "What type of cybersecurity attack involves tricking individuals into providing sensitive information or performing actions they shouldn't?"

};

function displayQuestion() {
    let questionNumber = parseInt(document.getElementById('questionNumber').value);
    const questionDisplay = document.getElementById('question');

    if (questionNumber > 24 && questionNumber < 49) {
        questionNumber = questionNumber - 24;
    }

    if (questionNumber in questions) {
        questionDisplay.textContent = questions[questionNumber];
    } else {
        questionDisplay.textContent = "Question not found!";
    }
}

function clearQuestion() {
    document.getElementById('questionNumber').value = '';
    document.getElementById('question').textContent = '';
}
