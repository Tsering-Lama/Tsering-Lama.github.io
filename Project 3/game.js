var btn = document.getElementById('btn');
var resetbtn = document.getElementById('resetbtn');
var msg = document.getElementById('outputText');
var sNum = Math.trunc((Math.random()*100+1));
var score= 10;
document.getElementById("scoreNum").textContent = score;
const hnum=[];
document.getElementById("hnum").innerHTML = hnum;


    function checkNumber(){
      var input = document.getElementById('userInput').value;
      if(input == sNum){
        msg.innerHTML="You guessed right "+ ", "+ " it was "+ sNum;
        msg.style.color="green";
        score=score+1;
        console.log('Your final score is:', score);
      }
      else if(input>sNum && input<100 && score>0){
        msg.innerHTML="You guessed too high";
        score= score-1;
        hnum.push(Number(input));


      }
      else if(input<sNum && input>1 && score>0){
        msg.innerHTML="You guessed too low";
        score=score-1;
        hnum.push(Number(input));
      }
      else if(input<1 && score>0){
        msg.innerHTML="Higher, it has to be between 1 and 100";
        score=score-1;
        hnum.push(Number(input));
      }
      else if(isNaN(input)){
        msg.innerHTML="It is not a number! Enter a Number!";
      }
      else if(score==0){
        msg.innerHTML="Sorry! You lost.";
        location.resetbtn;
      }
      else{
        msg.innerHTML="It has to be between 1 and 100";
      }
    }
    btn.addEventListener('click', checkNumber);
    resetbtn.addEventListener('click', function(){
      location.reload();
    })

