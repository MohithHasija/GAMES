function game(urchoice){
				compchoice=Math.floor(Math.random()*3)
				
				l=["Stone","Paper","Scissor"]
				if (compchoice==urchoice){
					document.getElementById("stone").innerHTML=l[urchoice]
					document.getElementById("paper").innerHTML="Its a tie"
					document.getElementById("scissor").innerHTML=l[compchoice]
				}
				else if ((urchoice==0 && compchoice==2) || (urchoice==1 && compchoice==0) || (urchoice==2 && compchoice==1)) {
					document.getElementById("stone").innerHTML=l[urchoice]
					document.getElementById("paper").innerHTML="YOU WON!!"
					document.getElementById("scissor").innerHTML=l[compchoice]
				}
				else{
					document.getElementById("stone").innerHTML=l[urchoice]
					document.getElementById("paper").innerHTML="YOU Lose!!"
					document.getElementById("scissor").innerHTML=l[compchoice]
				}
		}



function check(){
	document.getElementById("count").innerHTML=Math.floor(document.getElementById("count").innerHTML)+1
  	x=document.getElementById("count").innerHTML
  l=[
    [
    document.getElementById("all1").value.toLowerCase(),
    document.getElementById("all2").value.toLowerCase(),
    document.getElementById("all3").value.toLowerCase()
     ],
     [
       document.getElementById("all4").value.toLowerCase(),
       document.getElementById("all5").value.toLowerCase(),
       document.getElementById("all6").value.toLowerCase()
     ],
    [
      document.getElementById("all7").value.toLowerCase(),
      document.getElementById("all8").value.toLowerCase(),
      document.getElementById("all9").value.toLowerCase()
    ]
  ]
  console.log(l)
  if((l[0][0]=="x" && l[0][1]=="x" && l[0][2]=="x") 
     || (l[1][0]=="x" && l[1][1]=="x" && l[1][2]=="x") 
     || (l[2][0]=="x" && l[2][1]=="x" && l[2][2]=="x")
     || (l[0][0]=="x" && l[1][0]=="x" && l[2][0]=="x")
     || (l[0][1]=="x" && l[1][1]=="x" && l[2][1]=="x")
     || (l[0][2]=="x" && l[1][2]=="x" && l[2][2]=="x")
     || (l[0][0]=="x" && l[1][1]=="x" && l[2][2]=="x")
     || (l[0][2]=="x" && l[1][1]=="x" && l[2][0]=="x")
    ){
    document.getElementById("results").innerHTML="THE WINNER IS X"
  }
  
  else if((l[0][0]=="o" && l[0][1]=="o" && l[0][2]=="o") 
          || (l[1][0]=="o" && l[1][1]=="o" && l[1][2]=="o")
          || (l[2][0]=="o" && l[2][1]=="o" && l[2][2]=="o")
          || (l[0][0]=="o" && l[1][0]=="o" && l[2][0]=="o")
          || (l[0][1]=="o" && l[1][1]=="o" && l[2][1]=="o")
          || (l[0][2]=="o" && l[1][2]=="o" && l[2][2]=="o")
          || (l[0][0]=="o" && l[1][1]=="o" && l[2][2]=="o")
          || (l[0][2]=="o" && l[1][1]=="o" && l[2][0]=="o")
         ){
    document.getElementById("results").innerHTML="THE WINNER IS O"
  }

  else if(x==9){
  	document.getElementById("results").innerHTML="IT'S A TIE"
  }
  
}		

function reset(){
	document.getElementById("all1").value=""
	document.getElementById("all2").value=""
	document.getElementById("all3").value=""

	document.getElementById("all4").value=""
	document.getElementById("all5").value=""
	document.getElementById("all6").value=""

	document.getElementById("all7").value=""
	document.getElementById("all8").value=""
	document.getElementById("all9").value=""
	
	document.getElementById("count").innerHTML=0

	document.getElementById("results").innerHTML=""
}
