function myFunction() {
    var x = document.getElementById("quizIframe");
    var y = document.getElementById("icon-close");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
    }
}
