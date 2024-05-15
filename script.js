// Sample questions. DONT touch this data
const questions = [
    {
        text: "Which language is primarily used for web app development?",
        options: ["C#", "Python", "JavaScript", "Swift"],
        correct: 2
    },
    {
        text: "Which of the following is a relational database management system?",
        options: ["Oracle", "Scala", "Perl", "Java"],
        correct: 0
    },
    {
        text: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 2
    },
    {
        text: "What does CSS stand for?",
        options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
        correct: 0
    },
    {
        text: "Which of the following is not an object-oriented programming language?",
        options: ["Java", "C#", "Scala", "C"],
        correct: 3
    },
    {
        text: "Which tool is used to ensure code quality in JavaScript?",
        options: ["JSLint", "TypeScript", "Babel", "Webpack"],
        correct: 0
    },
    {
        text: "What is the primary use of the Git command 'clone'?",
        options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
        correct: 1
    },
    {
        text: "What does API stand for in the context of programming?",
        options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
        correct: 1
    },
    {
        text: "Javascript is a single threaded programming language",
        options: ["True", "False"],
        correct: 0
    },
    {
        text: "API calls in Javascript can be done using the following method",
        options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
        correct: 2
    },
];

const question = document.querySelector("#question")
const option = document.querySelector("#answer-list")
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");
let currentIndex = 0;
let score = 0;
let questionIndex =1;
function loadQuestion() {
    const questionsList = questions[currentIndex];
    question.textContent = questionIndex+". "+questionsList.text;
    option.innerHTML = '';
     for(let i=0 ; i<questionsList.options.length;i++){
        const li = document.createElement("li")
    const radio = document.createElement("input")
    const optionText = document.createElement("label")
    radio.setAttribute("type", "radio");
    radio.setAttribute("name","answer");
    radio.setAttribute("value",currentIndex);


    optionText.textContent = questionsList.options[i];
     li.appendChild(radio);
     li.appendChild(optionText);
     option.appendChild(li);
     }
     nextButton.hidden = true;
     submitButton.hidden = false;

    
    }
submitButton.addEventListener("click", () => {
    // Implement the logic when the user clicks on submit button. The answer selected by the user should be validated here with the correct option

    const alert = document.querySelector('input[name="answer"]:checked');

    if (!alert) {
        alert("Please select any option!");
        return;
    }

    if (parseInt(alert.value) === questions[currentIndex].correct) {
                score++;
            }
        
            const correctAnswer = questions[currentIndex].correct;
            option.children[correctAnswer].style.backgroundColor = "lightgreen";
        
            nextButton.hidden = false;
            submitButton.hidden = true;

});

nextButton.addEventListener("click", () => {
    // Implement the logic for showing the next question in the questions array. Basic DOM manipulation methods are required here.
    // Also check for quiz completion here as well

    currentIndex++;
    questionIndex++;

    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
        score = 0;
        currentIndex = 0;
        questionIndex = 1;
        loadQuestion();
    }

});

loadQuestion();
//Load the first question on startup










