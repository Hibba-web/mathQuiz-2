    player1_name = localStorage.getItem("player1_name");
    player2_name = localStorage.getItem("player2_name");

    player1_score = 0 ; 
    player2_score = 0 ; 

    document.getElementById("player1_name&score").innerHTML = player1_name + " : " + player1_score; 
    document.getElementById("player2_name&score").innerHTML = player2_name + " : " + player2_score;

    document.getElementById("player_question&player").innerHTML = "Question Turn : " + player1_name;
    document.getElementById("player_answer&player").innerHTML = "Answer Turn : " + player2_name;

function send(){
    number1 = document.getElementById("input_no1").value; 
    number2 = document.getElementById("input_no2").value;
    actual_answer = parseInt(number1) * parseInt(number2); 

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>"
    input_box = "<input type='text' id= 'input_check_box'>"
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'>"
    row = question_number + input_box + check_button ; 

    document.getElementById("output").innerHTML= row;

    document.getElementById("input_no1").value= "";
    document.getElementById("input_no2").value= "";
}

