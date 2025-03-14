// exam_helper.js - This file is loaded remotely by the Tampermonkey script.

(function() {
    'use strict';

    // -----------------------------------------------------------------------
    // Configuration - **MODIFY THIS SECTION**
    // -----------------------------------------------------------------------

    const categorizedAnswers = {
        "Алгебра": [  // Теперь массив ОБЪЕКТОВ, а не просто букв
            { question: "Вопрос 1 по Алгебре?", answer: "D" },
            { question: "Вопрос 2 по Алгебре?", answer: "A" },
            { question: "Вопрос 3 по Алгебре?", answer: "B" },
            { question: "Вопрос 4 по Алгебре?", answer: "C" }
        ],
        "Химия": [   // И здесь тоже массив ОБЪЕКТОВ
            { question: "Вопрос 1 по Химии?", answer: "A" },
            { question: "Вопрос 2 по Химии?", answer: "C" },
            { question: "Вопрос 3 по Химии?", answer: "B" },
            { question: "Вопрос 4 по Химии?", answer: "D" }
        ]
    };

    // **УДАЛЕНО: QUESTION_SELECTOR_TEMPLATE больше не нужен**


    // -----------------------------------------------------------------------
    // End of Configuration
    // -----------------------------------------------------------------------

    let answerBox = null;
    let isAnswerBoxVisible = false;
    let currentQuestionDisplay = null; // Элемент для отображения вопроса и ответа

    function createAnswerBox() {
        answerBox = document.createElement("div");
        answerBox.style.position = "fixed";
        answerBox.style.bottom = "10px";
        answerBox.style.left = "10px";
        answerBox.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        answerBox.style.padding = "10px";
        answerBox.style.border = "1px solid #ccc";
        answerBox.style.zIndex = "9999";
        answerBox.style.fontFamily = "sans-serif";
        answerBox.style.fontSize = "14px";
        answerBox.style.lineHeight = "1.5";
        answerBox.style.display = "none";
        answerBox.style.maxWidth = "400px"; // Увеличил maxWidth для вопросов и ответов
        answerBox.style.wordWrap = "break-word";

        let answerHTML = "";

        currentQuestionDisplay = document.createElement("div"); // Создаем элемент для вопроса и ответа
        answerBox.appendChild(currentQuestionDisplay); // Добавляем его в answerBox

        for (const subject in categorizedAnswers) {
            if (categorizedAnswers.hasOwnProperty(subject)) {
                answerHTML += "<b>" + subject + ":</b><br>";
                const questions = categorizedAnswers[subject]; // Теперь это массив ОБЪЕКТОВ вопросов
                for (let i = 0; i < questions.length; i++) {
                    const questionData = questions[i]; // Получаем объект вопроса
                    const questionNumber = i + 1;
                    const button = createQuestionButton(subject, questionNumber, questionData); // Создаем кнопку для вопроса
                    answerHTML += button.outerHTML + "  ";
                }
                answerHTML += "<br><br>";
            }
        }

        answerBox.innerHTML += answerHTML; // Добавляем кнопки в answerBox (после элемента для вопроса и ответа)
        document.body.appendChild(answerBox);
    }

    function createQuestionButton(subject, questionNumber, questionData) {
        const button = document.createElement("button");
        button.textContent = `${subject} ${questionNumber}`; // Текст кнопки - предмет и номер вопроса
        button.style.padding = "5px 10px";
        button.style.margin = "2px";
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#f0f0f0";
        button.style.border = "1px solid #ccc";
        button.style.borderRadius = "3px";
        button.style.fontSize = "13px";

        button.onclick = function() {
            displayQuestionAndAnswer(questionData); // Функция для отображения вопроса и ответа
        };
        return button;
    }

    function displayQuestionAndAnswer(questionData) {
        if (currentQuestionDisplay) {
            currentQuestionDisplay.innerHTML = `
                <b>Вопрос:</b> ${questionData.question}<br><br>
                <b>Ответ:</b> ${questionData.answer}
            `; // Отображаем вопрос и ответ в элементе currentQuestionDisplay
        }
    }


    function toggleAnswerBox() {
        if (!answerBox) {
            createAnswerBox();
        }

        isAnswerBoxVisible = !isAnswerBoxVisible;
        answerBox.style.display = isAnswerBoxVisible ? "block" : "none";
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'z' || event.key === 'Z') {
            toggleAnswerBox();
        }
    });

    createAnswerBox();

})();
