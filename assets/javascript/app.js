//TO ADD
//Timer functions
//If/then statements for score keeping

(function() {

    //constants
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    //reload the page to start quiz anew
    function loadQuiz() {
        //storing the HTML output
        const output = [];

        //for each ? we need to store choices, answers, buttions
        //need to add HTML radio buttons too
        quizQuestions.forEach((currentQuestion, questionNumber) => ) {

            const answers = [];

            //radio buttons
            for (letter in currentQuestion.answers) {

                answers.push(
                    `<label>
						<input type="radio" name="questions${questionNumber}" value="${letter}">
						${letter} :
						${currentQuestion.answers[letter]}
					</label>`
                );
            }

            //add questions and answers to output

            output.push(
                `<div class="slide">
					<div class="question"> ${currentQuestion.question} </div>
					<div class="answers"> ${answers.join("")}</div>
				</div>`
            ); 
    	});
	}


    //show quiz after time runs out (or after submit?)
    function showResults() {};

    //display quiz right away
    buildQuiz();

    //when user hits submits, quiz results are shown
    submitButton.addEventListener('click', showResults);

    //lets user submit quiz to be graded
    function submitQuiz() {};


    const quizQuestions = [
        //question 1
        {
            question: "#1 - Who is Larry's manager?",

            answers: {
                a: "Jeff Green",
                b: "Ari Gold",
                c: "Doug Smith",
                d: "Jeff Brown"
            },
            correctAnswer = "a"
        },
        //question 2
        {
            question: "#2 - Which actor portrays Leon in Curb?",

            answers: {
                a: "Taye Diggs",
                b: "Michael C. Hall",
                c: "Jamie Foxx",
                d: "J.B. Smoove"
            },
            correctAnswer = "d"
        },
        //question 3
        {
            question: "#3 - In S6E2, the drycleaners accidentally give Larry's Yankees jersey to the wrong customer. Which Yankee player is it?",

            answers: {
                a: "Derek Jeter",
                b: "Micky Mantle",
                c: "Joe Pepitone",
                d: "Babe Ruth"
            },

            correctAnswer = "c"
        },
        //question 4
        {
            question: "#4 - In S4E2, which Hollywood actor does Larry gauge in the eye?",

            answers: {
                a: "Christian Bale",
                b: "Ben Stiller",
                c: "Adam Sandler",
                d: "Robert De Niro"
            },

            correctAnswer = "b"
        },
        //question 5
        {
            question: "#5 - Who replaces the answer to Question 4 in Larry's production of The Producers?",

            answers: {
                a: "David Schwimmer",
                b: "Matt LeBlanc",
                c: "Matthew Perry",
                d: "Chandler Bing"
            },

            correctAnswer = "a"
        },
        //question 6
        {
            question: "#6 - Which former Cheers star has a recurring role playing themself in Curb?",

            answers: {
                a: "John Ratzenberger",
                b: "Ted Danson",
                c: "Woody Harrelson",
                d: "Kelsey Grammar"
            },

            correctAnswer = "Ted Danson"
        },
        //question 7
        {
            question: "#7 - question?",

            answers: {
                a: "a",
                b: "b",
                c: "c",
                d: "d"
            },

            correctAnswer = ""
        },
        //question 8
        {
            question: "#8 - question?",

            answers: {
                a: "a",
                b: "b",
                c: "c",
                d: "d"
            },

            correctAnswer = ""
        },
        //question 9
        {
            question: "#9 - question?",

            answers: {
                a: "a",
                b: "b",
                c: "c",
                d: "d"
            },

            correctAnswer = ""
        },
        //question 10
        {
            question: "#10 - question?",

            answers: {
                a: "a",
                b: "b",
                c: "c",
                d: "d"
            },

            correctAnswer = ""
        }
    ];

})