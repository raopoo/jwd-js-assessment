/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    setInterval(countDown, 1000);
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
  });
  //Function for timer
  let startingMin = 1;
  let time = startingMin * 60;
  const cdDisplay = document.querySelector("#time");
  const countDown = () => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    sec = sec < 1 ? '0' + sec : sec;
    cdDisplay.innerHTML =`${min}:${sec}`;
    time--;
    time =  time < 0 ? 0 : time;
    if(time === 0){
      calculateScore();
    }
};


  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia?',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'What is the capital of New Zeland?',
      o: ['Auckland', 'Queenstown', 'Wellington', 'Christchurch'],
      a: 2,
    },
    {
      q: 'What is the most populated state in Australia?',
      o: ['New South Wales', 'Victoria', 'South Australia', 'Queensland'],
      a: 0,
    }
  ];
 

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };
  
  // Calculate the score
  const calculateScore = () => {
    //alert("calculateScore() is called");
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i <= 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        let scoreDisp = document.querySelector('#score');
        let liElement = document.querySelector("#"+ li);
        let radioElement = document.querySelector("#"+ r);

         if (quizItem.a === i) {
          //change background color of li element here
          liElement.style.backgroundColor = "blue";
        }
        // if (radioElement.checked) {
        //  // code for task 1 goes here
        //  score++;     
        //  scoreDisp.innerHTML = `You have scored ${score}`;      
        // }
      }
    });
};  
 // call the displayQuiz function
displayQuiz();
  //Call the event listner for submit button
let submitBtn = document.querySelector("#btnSubmit");
  submitBtn.addEventListener('click', e => {
   //alert("submit was clicked");
    calculateScore();
  });

//Reset button even listner
let resetBtn = document.querySelector("#btnReset")
resetBtn.addEventListener('click',e => {
  displayQuiz();
 });
});