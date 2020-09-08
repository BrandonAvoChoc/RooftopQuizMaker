let language = 'english'

function openQuiz() {
    let quizLink = '';
    switch (language) {
        case 'english':
            quizLink = "quiz/en/index.html";
            break;
        case 'عربى':
            quizLink = "quiz/ar/index.html";
            break;
        case 'русский':
            quizLink = "quiz/ru/index.html";
            break;
        case 'Español':
            quizLink = "quiz/sp/index.html";
            break;
        case 'Français':
            quizLink = "quiz/fr/index.html";
            break;
        case '简体中文':
            quizLink = "quiz/ch/index.html";
            break;
        default:
            quizLink = "quiz/en/index.html";
    }

    location.href = quizLink;
}

function submitLanguage(event) {
    event.preventDefault();
    console.log(language);
    openQuiz();
}

function setLanguage(event) {
    event.preventDefault();
    language = event.target.value;
    console.log(event.target.value);
}

function hideQuiz() {
    var z = document.getElementById("container");
    z.style.visibility = "hidden";
}

// Show popover immediatly (as it's in an iframe and only drawing over white now)
function initQuiz() {
        if (screen.width < 699) {
            // Change to mobile friendly png
            var m = document.getElementById("landing-img");
            m.src = "../assets/landing-mobile.png";
        }
}
