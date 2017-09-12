function submitAnswer(){
	 var total = 5;
	 var score = 0;

	 var q = [0];
	 
	 q.push(document.forms["quizForm"]["q1"].value);
	 q.push(document.forms["quizForm"]["q2"].value);
	 q.push(document.forms["quizForm"]["q3"].value);
	 q.push(document.forms["quizForm"]["q4"].value);
	 q.push(document.forms["quizForm"]["q5"].value);
	 
	for(i = 1;i <= total;i++){
		
	  if(q[i]==null){
		  alert("missed question no.",+i);
	  }
	 }
	 
	}
	//Answers
	 var answers = ["a","c","c","a","b"];
	 for(i = 1; i <= total;i++){
	    if(eval('q'+i) == answers[i-1]){
		  score++;
	     }
	 }
	 
	 var results = document.getElementById('results');
	 results.innerHTML = '<h3>You scored <span>'+score+'</span>out of<span>'+total+'</span></h3>';
	 
	alert('You scoreed '+score+'out of'+total);
	return false;
	 
	 
}