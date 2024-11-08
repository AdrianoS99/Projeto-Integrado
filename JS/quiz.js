const questions = [
    { image: "../Img/Ishihara_num74.jpg", answer: "74", correct: true, count: 0 },
    { image: "../Img/Ishihara_num3.jpg", answer: "3" , correct: true, count: 0},
    { image: "../Img/Ishihara_num12.jpg", answer: "12", correct: true, count: 0 },
    { image: "../Img/Ishihara_num45.jpg", answer: "45", correct: true, count: 0 },
    { image: "../Img/Ishihara_num8.jpg", answer: "8", correct: true, count: 0 },
    { image: "../Img/Ishihara_num5.jpg", answer: "5", correct: true, count: 0 },
    { image: "../Img/Ishihara_num1.jpg", answer: "1", correct: true, count: 0 },
    { image: "../Img/Ishihara_num35.jpg", answer: "35", correct: true, count: 0 },
    { image: "../Img/Ishihara_num52.jpg", answer: "52", correct: true, count: 0 },
    { image: "../Img/Ishihara_num6.jpg", answer: "6", correct: true, count: 0 }
];

let currentQuestion = 0;
let total =questions.length;
let erro = 0;

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const resultContainer = document.getElementById('result-container');

    if (userAnswer === questions[currentQuestion].answer) {
        resultContainer.textContent = "Correto!";
        resultContainer.style.color = "green";


        var button = document.getElementById('bt1');
        button.textContent = 'Próximo';
        button.onclick = nextAnswer;

    } else {
        
        if (questions[currentQuestion].count == 0){
            questions[currentQuestion].count = 1;
            questions[currentQuestion].correct = false;
        }


        resultContainer.textContent = `Incorreto! A resposta correta é ${questions[currentQuestion].answer}.`;
        resultContainer.style.color = "red";
    }

}

function nextAnswer() {
    currentQuestion++;
    
    var button = document.getElementById('bt1');
    button.textContent = 'Verificar Resposta';
    button.onclick = checkAnswer;

    if (currentQuestion === questions.length) {
        var button = document.getElementById('bt1');
        button.textContent = 'Resultado';
        button.onclick = nextEnd;
        document.getElementById('result-container').textContent = 'Finalizado o teste.';      
    } else {
        loadNextQuestion();
    }
}

function nextEnd() {
    let correctCount = 0;

    questions.forEach(question => {
        if (question.correct) {
            correctCount++;
        }
    });
    const totalQuestions = questions.length;
    const accuracyPercentage = (correctCount / totalQuestions) * 100;
    const percenteText = `Percentual de acertos: ${accuracyPercentage.toFixed(0)}%`;
    const endText = `Teste finalizado. Você acertou: ${correctCount} de 10 questões. | ${percenteText}`;

    const formattedText = endText.replace('|', '<br>');

    document.getElementById('popup-text').innerHTML = formattedText;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


function loadNextQuestion() {
    document.getElementById('img-teste').src = questions[currentQuestion].image;
    document.getElementById('answer').value = '';
    document.getElementById('result-container').textContent = '';
}

loadNextQuestion();