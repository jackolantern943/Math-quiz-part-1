score = 0;

function addUser() {
    window.location = "activity_2.html";
} 

function saveScore() {
    localStorage.setItem("score", score);
}

function nextPage() {
    window.location = "activity_2.html";
}