let language = 'english'

function determineScreensize() {
    let quizLink = '';
    switch (language) {
        case 'english':
            quizLink = "draft%203/World%20Ozone%20Day%20Quiz%20(Published)/index.html";
            break;
        case 'عربى':
            quizLink = "draft%203/World%20Ozone%20Day%20Quiz%20(Published)/index.html";
            break;
        case 'русский':
            quizLink = "draft%203/World%20Ozone%20Day%20Quiz%20(Published)/index.html";
            break;
        case 'Español':
            quizLink = "draft%203/World%20Ozone%20Day%20Quiz%20(Published)/index.html";
            break;
        case 'Français':
            quizLink = "draft%203/World%20Ozone%20Day%20Quiz%20(Published)/index.html";
            break;
        case 6:
            quizLink = "draft%203/World%20Ozone%20Day%20Quiz%20(Published)/index.html";
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
    determineScreensize();
}

function setLanguage(event) {
    event.preventDefault();
    language = event.target.value;
    console.log(event.target.value);
}

function hideQuiz () {
    var z = document.getElementById("container");
    z.style.visibility = "hidden";
    var y = document.getElementById("quiz-show");
    y.style.visibility = "unset";
}

function showQuiz() {
    var z = document.getElementById("container");
    z.style.visibility = "unset";
    var y = document.getElementById("quiz-show");
    y.style.visibility = "hidden";
}
