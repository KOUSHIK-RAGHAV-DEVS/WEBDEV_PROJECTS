var playing = false;
var score;
var action;
var timeremaining;
document.getElementById("startreset").onclick = function () {
	if (playing == true) {
		location.reload();
	} else {
		score = 0;
		playing = true;
		document.getElementById("scorevalue").innerHTML = score;
		show("timerem");
		timeremaining = 60;
		document.getElementById("timerem").innerHTML = timeremaining;
		document.getElementById("startreset").innerHTML = "Reset Game";
		startcountdown();
		generateqa();
	}
}
for(i=1;i<5;i++){document.getElementById("box"+i).onclick = function(){
	if(playing ==  true){
		if(this.innerHTML == correctanswer){
			score++;
			document.getElementById("scorevalue").innerHTML = score;
			hide("wrong");
			show("correct");
			setTimeout(function(){hide("correct")},1000);
			generateqa();
			
			
		}
		else{
			show("wrong");
			hide("correct");
			setTimeout(function(){hide("wrong")},1000);
			
			
		}
	}
}}
function startcountdown(){
	action = setInterval(function(){
		timeremaining -= 1;
		document.getElementById("timerem").innerHTML=timeremaining;
		if(timeremaining == 0){
			stopcountdown();
			show("gameover");
	
		document.getElementById("gameover").innerHTML = "<p> Game over!! </p> Your score :"+score+".</p>";
		hide("time");
		hide("correct");
		hide("wrong");
		document.getElementById("startreset").innerHTML = "Start Game";
		
		
		}
	},1000);
	show("time")
}
function stopcountdown(){
	clearInterval(action);
		
}
function hide(ID) {
	document.getElementById(ID).style.display = "none";
}
function show(ID) {
	document.getElementById(ID).style.display = "block";}
function generateqa() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
     correctanswer = x * y;
    document.getElementById("question").innerHTML = x + "X" + y;
    var correctposition = 1 + Math.round(3 * Math.random());

    document.getElementById("box" + correctposition).innerHTML = correctanswer;
	var answers = [correctanswer];

    for (var i = 1; i < 5; i++) {
        if (i !== correctposition) { var wronganswer;
									do{
										var wronganswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
									}while(answers.indexOf(wronganswer) > -1){
										document.getElementById("box" + i).innerHTML = wronganswer;
										answers.push(wronganswer);
									}
          
        
        }
    }
}
