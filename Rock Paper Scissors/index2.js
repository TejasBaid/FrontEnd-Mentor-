var opponent= localStorage.getItem("opp")
var result = localStorage.getItem("res");
var my_pick = localStorage.getItem("my_pick")
var rock = "images/icon-rock.svg"
var paper = "images/icon-paper.svg"
var scissors = "images/icon-scissors.svg"
var rockB = "rock-bgB"
var paperB = "paper-bgB"
var scissorsB = "scissors-bgB"
var counter = 0;

if (result == "YOU WIN"){
    counter ++
}else if(result == "YOU LOSE"){
    counter --
}




$(".result").text(result);

if (my_pick === "paper"){
    $(".backgroundM").addClass(paperB);
    $(".iconM").attr("src", paper);

}else if (my_pick === "rock"){
    $(".backgroundM").addClass(rockB);
    $(".iconM").attr("src", rock);

}else if (my_pick === "scissors"){
    $(".backgroundM").addClass(scissorsB);
    $(".iconM").attr("src", scissors);

}
if (opponent === "paper"){
    $(".backgroundC").addClass(paperB);
    $(".iconC").attr("src", paper);

}else if (opponent === "rock"){
    $(".backgroundC").addClass(rockB);
    $(".iconC").attr("src", rock);

}else if (opponent === "scissors"){
    $(".backgroundC").addClass(scissorsB);
    $(".iconC").attr("src", scissors);

}
