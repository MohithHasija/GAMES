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
  
  if((l[0][0]=="x" && l[0][1]=="x" && l[0][2]=="x")){
    document.getElementById("results").innerHTML="THE WINNER IS X"
	document.getElementById("all1").style.backgroundColor="#4BB543"
	document.getElementById("all2").style.backgroundColor="#4BB543"
	document.getElementById("all3").style.backgroundColor="#4BB543"
  }

  else if((l[0][2]=="x" && l[1][1]=="x" && l[2][0]=="x")){
  	document.getElementById("results").innerHTML="THE WINNER IS X"
	document.getElementById("all7").style.backgroundColor="#4BB543"
	document.getElementById("all5").style.backgroundColor="#4BB543"
	document.getElementById("all3").style.backgroundColor="#4BB543"
  }

  else if((l[0][0]=="x" && l[1][1]=="x" && l[2][2]=="x")){
  	document.getElementById("results").innerHTML="THE WINNER IS X"
	document.getElementById("all1").style.backgroundColor="#4BB543"
	document.getElementById("all5").style.backgroundColor="#4BB543"
	document.getElementById("all9").style.backgroundColor="#4BB543"
  }

  else if((l[0][2]=="x" && l[1][2]=="x" && l[2][2]=="x")){
  	document.getElementById("results").innerHTML="THE WINNER IS X"
	document.getElementById("all3").style.backgroundColor="#4BB543"
	document.getElementById("all6").style.backgroundColor="#4BB543"
	document.getElementById("all9").style.backgroundColor="#4BB543"
  }

  else if((l[0][1]=="x" && l[1][1]=="x" && l[2][1]=="x")){
  	document.getElementById("results").innerHTML="THE WINNER IS X"
	document.getElementById("all2").style.backgroundColor="#4BB543"
	document.getElementById("all5").style.backgroundColor="#4BB543"
	document.getElementById("all8").style.backgroundColor="#4BB543"
  }

  else if((l[0][0]=="x" && l[1][0]=="x" && l[2][0]=="x")){
  	document.getElementById("results").innerHTML="THE WINNER IS X"
	document.getElementById("all1").style.backgroundColor="#4BB543"
	document.getElementById("all4").style.backgroundColor="#4BB543"
	document.getElementById("all7").style.backgroundColor="#4BB543"
  }

  else if((l[2][0]=="x" && l[2][1]=="x" && l[2][2]=="x")){
  	document.getElementById("results").innerHTML="THE WINNER IS X"
	document.getElementById("all7").style.backgroundColor="#4BB543"
	document.getElementById("all8").style.backgroundColor="#4BB543"
	document.getElementById("all9").style.backgroundColor="#4BB543"
  }

  else if((l[1][0]=="x" && l[1][1]=="x" && l[1][2]=="x") ){
  	document.getElementById("results").innerHTML="THE WINNER IS X"
	document.getElementById("all4").style.backgroundColor="#4BB543"
	document.getElementById("all5").style.backgroundColor="#4BB543"
	document.getElementById("all6").style.backgroundColor="#4BB543"
  }








  else if((l[0][0]=="o" && l[0][1]=="o" && l[0][2]=="o")){
    document.getElementById("results").innerHTML="THE WINNER IS O"
	document.getElementById("all1").style.backgroundColor="#4BB543"
	document.getElementById("all2").style.backgroundColor="#4BB543"
	document.getElementById("all3").style.backgroundColor="#4BB543"
  }

  else if((l[0][2]=="o" && l[1][1]=="o" && l[2][0]=="o")){
  	document.getElementById("results").innerHTML="THE WINNER IS O"
	document.getElementById("all7").style.backgroundColor="#4BB543"
	document.getElementById("all5").style.backgroundColor="#4BB543"
	document.getElementById("all3").style.backgroundColor="#4BB543"
  }

  else if((l[0][0]=="o" && l[1][1]=="o" && l[2][2]=="o")){
  	document.getElementById("results").innerHTML="THE WINNER IS O"
	document.getElementById("all1").style.backgroundColor="#4BB543"
	document.getElementById("all5").style.backgroundColor="#4BB543"
	document.getElementById("all9").style.backgroundColor="#4BB543"
  }

  else if((l[0][2]=="o" && l[1][2]=="o" && l[2][2]=="o")){
  	document.getElementById("results").innerHTML="THE WINNER IS O"
	document.getElementById("all3").style.backgroundColor="#4BB543"
	document.getElementById("all6").style.backgroundColor="#4BB543"
	document.getElementById("all9").style.backgroundColor="#4BB543"
  }

  else if((l[0][1]=="o" && l[1][1]=="o" && l[2][1]=="o")){
  	document.getElementById("results").innerHTML="THE WINNER IS O"
	document.getElementById("all2").style.backgroundColor="#4BB543"
	document.getElementById("all5").style.backgroundColor="#4BB543"
	document.getElementById("all8").style.backgroundColor="#4BB543"
  }

  else if((l[0][0]=="o" && l[1][0]=="o" && l[2][0]=="o")){
  	document.getElementById("results").innerHTML="THE WINNER IS O"
	document.getElementById("all1").style.backgroundColor="#4BB543"
	document.getElementById("all4").style.backgroundColor="#4BB543"
	document.getElementById("all7").style.backgroundColor="#4BB543"
  }

  else if((l[2][0]=="o" && l[2][1]=="o" && l[2][2]=="o")){
  	document.getElementById("results").innerHTML="THE WINNER IS O"
	document.getElementById("all7").style.backgroundColor="#4BB543"
	document.getElementById("all8").style.backgroundColor="#4BB543"
	document.getElementById("all9").style.backgroundColor="#4BB543"
  }

  else if((l[1][0]=="o" && l[1][1]=="o" && l[1][2]=="o") ){
  	document.getElementById("results").innerHTML="THE WINNER IS O"
	document.getElementById("all4").style.backgroundColor="#4BB543"
	document.getElementById("all5").style.backgroundColor="#4BB543"
	document.getElementById("all6").style.backgroundColor="#4BB543"
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

	document.getElementById("all1").style.backgroundColor="white"
	document.getElementById("all2").style.backgroundColor="white"
	document.getElementById("all3").style.backgroundColor="white"

	document.getElementById("all4").style.backgroundColor="white"
	document.getElementById("all5").style.backgroundColor="white"
	document.getElementById("all6").style.backgroundColor="white"

	document.getElementById("all7").style.backgroundColor="white"
	document.getElementById("all8").style.backgroundColor="white"
	document.getElementById("all9").style.backgroundColor="white"
}

function play(){

  x=prompt("Enter The Word:")
  document.getElementById('letter').style.visibility="visible"
  document.getElementById("movie").style.display="none"
  x=x.toLowerCase()
  count=0
  if(x==""){
    alert("Movie cannot be null, Enter again")
    x=prompt("Enter The Movie:")
  	document.getElementById("movie").style.display="none"
  	x=x.toLowerCase()

  	if(x==""){
    alert("Movie cannot be null, Enter again")
    x=prompt("Enter The Movie:")
  	document.getElementById("movie").style.display="none"
  	x=x.toLowerCase()
  }



  }

  if(x!=""){
  	  document.getElementById("secret").innerHTML=x	
      f= x.length
      for(i=0;i<f;i++){
        
	        if(x[i]!=" "){
		          if(x[i]=="a" || x[i]=="e" || x[i]=="i"  || x[i]=="o" || x[i]=="u"){
		            	document.getElementById("show").innerHTML=document.getElementById("show").innerHTML + x[i] +" " 
		          }

		          else{
			            document.getElementById("show").innerHTML=document.getElementById("show").innerHTML + "_ " 
			            count=count+1
			            document.getElementById("count1").innerHTML=count	
		          }

             }
        
        	else{
          	document.getElementById("show").innerHTML=document.getElementById("show").innerHTML+"<br> <br>" 
        	}
        
      }

    }
    document.getElementById("showme").style.visibility="visible"
}
  

function counting(string,t){
  send_count=0
	for (var i = 0; i < string.length; i++) {
		
		if(string[i]==t){
			send_count=send_count+1
		}
	}
	return send_count
}

function myfunction(word,l){

	
				for (var i = 0; i < word.length; i++) {
					if(l.includes(word[i])){

						document.getElementById("show").innerHTML=document.getElementById("show").innerHTML+" "+word[i]
						console.log(document.getElementById("show").innerHTML)
					}
					else{
						document.getElementById("show").innerHTML=document.getElementById("show").innerHTML+" "+ "_"
						console.log(document.getElementById("show").innerHTML)
					}
				}
				document.getElementById("show").innerHTML=document.getElementById("show").innerHTML+"<br>"
}

function search(){
	won=0
	i=0
	temp=["a","e","i","o","u"]
	l=["a","e","i","o","u"]
	word=document.getElementById("secret").innerHTML
	count1=document.getElementById("count1").innerHTML
	guess_count=0
	document.getElementById("show").innerHTML=""

	
	while(i<7){

		guess=prompt("Enter letter:")
		if(l.includes(guess)){
			alert("Already entered")
		}

		else{

			l.push(guess)
			if(word.includes(guess)){
											
				guess_count=guess_count+counting(word,guess)
				myfunction(word,l)
				
			}

			else{
				i=i+1
			}

			if(guess_count>=count1){
				document.getElementById("message").innerHTML="YOU WON"
				won=1
				break
			}
		}	

	}

	if(won==0){
		document.getElementById("message").innerHTML="YOU LOSE"
	}
	document.getElementById("seeans").innerHTML="The word is " + word 
	document.getElementById('letter').style.display="none"

}
