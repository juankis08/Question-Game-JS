

// make the code private or invisible
(function(){ 


    function Question(question, answer, correct){
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() { 
        console.log(this.question)
    
        for(var i = 0; i< this.answer.length; i++){
            console.log(i + ': ' + this.answer[i])
    
        }
    }
    
    Question.prototype.checkAnswer = function(ans){
        if(ans === this.correct){
            console.log('Correct Answer')
        }else{
            console.log('Wrong Answer')
        }
    
    
    }
    
    
    var arrq1 = ['Yes', 'No']
    var arrq2 = ['john', 'michael', 'jonas ']
    var arrq3 = ['boring', 'Hard ', 'Fun', 'Tedious']
    
    var q1 = new Question('Is javaScript the coolest programming language in the world?', arrq1, 0 )
    
    var q2 = new Question('What is the name of this cource teacher?', arrq2, 2)
    
    var q3 = new Question('what does best describe coding?', arrq2, 2)
    
    var questions = [q1, q2, q3]
    
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    
    // pop up box that get user input
    var answer = parseInt(prompt('Please select the correct answer.'));
    questions[n].checkAnswer(answer)

}) ();


