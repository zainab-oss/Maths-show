player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("questioner").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("answerer").innerHTML = "Answer Turn - " + player2_name;

function send() 
{
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);
    
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    nanswer = document.getElementById("input_check_box").value;
    console.log(nanswer);

    if (nanswer == actual_answer)
    {
        if (answer_turn == "player1")
        {
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
           update_player2_score = player2_score + 1;
           document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }

    if (question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("questioner").innerHTML = "Question Turn - " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("questioner").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("answerer").innerHTML = "Answer Turn - " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("answerer").innerHTML = "Answer Turn - " + player1_name;
    }

}