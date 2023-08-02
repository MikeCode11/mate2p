
var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name;
document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2_name;

var question_turn = "player1";
var answer_turn = "player2";

function send() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var actual_answer = parseInt(number1) * parseInt(number2);
  var input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
  var check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";

  document.getElementById("output").innerHTML = input_box + check_button;
}

function check() {
  var get_answer = document.getElementById("input_check_box").value;
  var answer = get_answer.toLowerCase();

  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var actual_answer = parseInt(number1) * parseInt(number2);

  if (answer == actual_answer) {
    console.log("La respuesta es correcta: " + answer);
    if (answer_turn == "player1") {
      var update_player1_score = player1_score + 1;
      document.getElementById("player1_score").innerHTML = update_player1_score;
    } else {
      var update_player2_score = player2_score + 1;
      document.getElementById("player2_score").innerHTML = update_player2_score;
    }
  }

  if (question_turn == "player1") {
    question_turn = "player2";
    document.getElementById("player_question").innerHTML = "El turno de preguntar es: " + player2_name;
  } else {
    question_turn = "player1";
    document.getElementById("player_question").innerHTML = "El turno de preguntar es: " + player1_name;
  }

  if (answer_turn == "player1") {
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML = "El turno de responder es: " + player2_name;
  } else {
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML = "El turno de responder es: " + player1_name;
  }

  document.getElementById("output").innerHTML = "";
}