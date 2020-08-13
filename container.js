function myFunction() {
    var x = document.getElementById("quizIframe");
    var y = document.getElementById("icon-close");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "unset";
    } else {
        x.style.visibility = "hidden";
        y.style.visibility = "hidden";
    }
    var z = document.getElementById("button-show");
    z.style.visibility = "unset";
    z.style.float = "unset"
}

function showPageQuiz() {
    var x = document.getElementById("quizIframe");
    x.style.visibility = "unset";
    var y = document.getElementById("icon-close");
    y.style.visibility = "unset";
    var z = document.getElementById("button-show");
    z.style.visibility = "hidden";
    z.style.float = "right";
}

function determineScreensize() {
    if (screen.width <= 699) {
        var x = document.getElementById("quizIframe");
        x.style.visibility = "hidden";
        var z = document.getElementById("button-show");
        z.style.visibility = "unset";
        z.style.float = "unset";
        var z = document.getElementById("icon-close");
        z.style.visibility = "hidden";
    } else {
        var z = document.getElementById("button-show");
        z.style.visibility = "hidden";
        z.style.float = "right";
        var q = document.getElementById("icon-close");
        q.style.visibility = "hidden";
    }
}
