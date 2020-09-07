let language = 'english'

function openQuiz() {
    let quizLink = '';
    switch (language) {
        case 'english':
            quizLink = "quiz_english/World%20Ozone%20Day%20Quiz%20(Published)/index.html";
            break;
        case 'عربى':
            quizLink = "quiz_english/World%20Ozone%20Day%20Quiz%20(Published)/index.html";
            break;
        case 'русский':
            quizLink = "quiz_english/World%20Ozone%20Day%20Quiz%20(Published)/index.html";
            break;
        case 'Español':
            quizLink = "quiz_english/World%20Ozone%20Day%20Quiz%20(Published)/index.html";
            break;
        case 'Français':
            quizLink = "quiz_english/World%20Ozone%20Day%20Quiz%20(Published)/index.html";
            break;
        case 6:
            quizLink = "quiz_english/World%20Ozone%20Day%20Quiz%20(Published)/index.html";
    }

    console.log(quizLink);

    if (screen.width <= 699) {
        window.open(quizLink, '_blank');
    } else {
        location.href = quizLink;
    }
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
    var y = document.getElementById("quiz-show");
    y.style.visibility = "unset";
}

function showQuiz() {
    if (screen.width <= 699) {
        window.open('quiz_english/World%20Ozone%20Day%20Quiz%20(Published)/index.html', '_blank');
    } else {
        var z = document.getElementById("container");
        z.style.visibility = "unset";
        var y = document.getElementById("quiz-show");
        y.style.visibility = "hidden";
    }
}
