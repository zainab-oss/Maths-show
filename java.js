function nextpage() 
{
    player1 = document.getElementById("player1_name").value;
    player2 = document.getElementById("player2_name").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location.replace("quizpage.html");
}