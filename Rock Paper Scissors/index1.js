function rock_check(x) {
    check = ""
    if(x === "rock"){
        check = "TIE"
    }else if(x === "paper"){
        check = "YOU LOSE"
        
    }else{
        check = "YOU WIN"
        
    }
    return(check)
};
function paper_check(x) {
    check = ""
    if(x === "rock"){
        check = "YOU WIN"
        
    }else if(x === "paper"){
        check = "TIE"
    }else{
        check = "YOU LOSE"
        
    }
    return(check)
};
function scissor_check(x) {
    check = ""
    if(x === "rock"){
        check = "YOU LOSE"
        
    }else if(x === "paper"){
        check = "YOU WIN"
        
    }else{
        check = "TIE"
    }
    return(check)
};
var me = "";

$(".background").click(function (e) { 
    var x = $(this).html();
    var b = $(x).attr("id");
    var options = ["rock", "paper", "scissors"]
    var opp = Math.floor(Math.random() * 3);
    opponent = options[opp];
    localStorage.setItem("opp",opponent);
    if (b === "paper-inner"){
        me = "paper";
    }else if(b === "rock-inner"){
        me = "rock";
    }else{
        me = "scissors";
    };
    localStorage.setItem("my_pick", me)
    if (me === "rock"){
        localStorage.setItem("res", (rock_check(opponent)));
    }else if(me === "paper"){
        localStorage.setItem("res", (paper_check(opponent)));
    }else{
        localStorage.setItem("res", (scissor_check(opponent)));
    }
});
counter = localStorage.getItem("sc");






// cases = (rock,paper)(rock,scissors)(rock,rock)
// cases = (paper, paper)(paper, scissors)(paper, rock)
// cases = (scissors, paper)(scissors,rock)(scissors, scissors)
