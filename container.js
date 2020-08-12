function myFunction() {
    var x = document.getElementById("quizIframe");
    var y = document.getElementById("icon-close");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
    }
    var z = document.getElementById("button-show");
    z.style.display = "unset";
}

function showPageQuiz() {
    var x = document.getElementById("quizIframe");
    x.style.display = "block";
    var y = document.getElementById("icon-close");
    y.style.display = "unset";
    var z = document.getElementById("button-show");
    z.style.display = "none";
}

function determineScreensize() {
    if (screen.width <= 699) {
        var x = document.getElementById("quizIframe");
        x.style.display = "none";
        var y = document.getElementById("icon-close");
        y.style.display = "none";
        var z = document.getElementById("button-show");
        z.style.display = "unset";
    } else {
        var y = document.getElementById("icon-close");
        y.style.display = "none";
        var z = document.getElementById("button-show");
        z.style.display = "none";
    }
}
