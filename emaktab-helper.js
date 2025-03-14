// exam_helper.js - This file is loaded remotely by the Tampermonkey script.

(function() {
    'use strict';

    // -----------------------------------------------------------------------
    // Configuration - **MODIFY THIS SECTION**
    // -----------------------------------------------------------------------

    const categorizedAnswers = {
        "Алгебра": [
            { question: "Вопрос 1 по Алгебре?", answer: "D" },
            { question: "Вопрос 2 по Алгебре?", answer: "A" },
            { question: "Вопрос 3 по Алгебре?", answer: "B" },
            { question: "Вопрос 4 по Алгебре?", answer: "C" },
            { question: "Вопрос 5 по Алгебре?", answer: "A" },
            { question: "Вопрос 6 по Алгебре?", answer: "B" },
            { question: "Вопрос 7 по Алгебре?", answer: "C" },
            { question: "Вопрос 8 по Алгебре?", answer: "D" },
            { question: "Вопрос 9 по Алгебре?", answer: "A" },
            { question: "Вопрос 10 по Алгебре?", answer: "B" },
            { question: "Вопрос 11 по Алгебре?", answer: "C" },
            { question: "Вопрос 12 по Алгебре?", answer: "D" },
            { question: "Вопрос 13 по Алгебре?", answer: "A" },
            { question: "Вопрос 14 по Алгебре?", answer: "B" },
            { question: "Вопрос 15 по Алгебре?", answer: "C" },
            { question: "Вопрос 16 по Алгебре?", answer: "D" }
        ],
        "Химия": [
            { question: "Вопрос 1 по Химии?", answer: "A" },
            { question: "Вопрос 2 по Химии?", answer: "C" },
            { question: "Вопрос 3 по Химии?", answer: "B" },
            { question: "Вопрос 4 по Химии?", answer: "D" },
            { question: "Вопрос 5 по Химии?", answer: "A" },
            { question: "Вопрос 6 по Химии?", answer: "C" },
            { question: "Вопрос 7 по Химии?", answer: "B" },
            { question: "Вопрос 8 по Химии?", answer: "D" },
            { question: "Вопрос 9 по Химии?", answer: "A" },
            { question: "Вопрос 10 по Химии?", answer: "C" },
            { question: "Вопрос 11 по Химии?", answer: "B" },
            { question: "Вопрос 12 по Химии?", answer: "D" },
            { question: "Вопрос 13 по Химии?", answer: "A" },
            { question: "Вопрос 14 по Химии?", answer: "C" },
            { question: "Вопрос 15 по Химии?", answer: "B" },
            { question: "Вопрос 16 по Химии?", answer: "D" }
        ]
    };

    // -----------------------------------------------------------------------
    // End of Configuration
    // -----------------------------------------------------------------------

    let answerBox = null;
    let isAnswerBoxVisible = false;
    let questionPopup = null; // **Новая переменная для поп-আপ окна**


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
        answerBox.style.lineHeight = "1.3";
        answerBox.style.display = "none";
        answerBox.style.maxWidth = "350px";
        answerBox.style.wordWrap = "break-word";

        let answerHTML = "";

        for (const subject in categorizedAnswers) {
            if (categorizedAnswers.hasOwnProperty(subject)) {
                answerHTML += "<b>" + subject + ":</b><br>";
                const questions = categorizedAnswers[subject];
                for (let i = 0; i < questions.length; i++) {
                    const questionData = questions[i];
                    const questionNumber = i + 1;
                    const buttonPrefix = (subject === "Химия") ? "х" : "";
                    const buttonText = buttonPrefix + questionNumber;
                    const button = createQuestionButton(questionNumber, questionData, buttonText);
                    answerHTML += button.outerHTML + "  ";
                    if (questionNumber % 8 === 0) {
                        answerHTML += "<br>";
                    }
                }
                answerHTML += "<br>";
            }
        }

        answerBox.innerHTML += answerHTML;
        document.body.appendChild(answerBox);
    }

    function createQuestionButton(questionNumber, questionData, buttonText) {
        const button = document.createElement("button");
        button.textContent = buttonText;
        button.style.padding = "5px 8px";
        button.style.margin = "1px";
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#f0f0f0";
        button.style.border = "1px solid #ccc";
        button.style.borderRadius = "3px";
        button.style.fontSize = "12px";

        button.onclick = function() {
            showQuestionPopup(questionData); // **Вызываем функцию для показа поп-ап окна**
        };
        return button;
    }

    function showQuestionPopup(questionData) {
        if (questionPopup) {
            questionPopup.remove(); // Удаляем старое поп-ап окно, если есть
        }

        questionPopup = document.createElement("div");
        questionPopup.style.position = "fixed";
        questionPopup.style.top = "50px"; // Позиционируем немного выше answerBox
        questionPopup.style.left = "10px";
        questionPopup.style.backgroundColor = "white";
        questionPopup.style.border = "1px solid #ccc";
        questionPopup.style.padding = "20px";
        questionPopup.style.maxWidth = "400px";
        questionPopup.style.zIndex = "10000";
        questionPopup.style.fontFamily = "sans-serif";
        questionPopup.style.fontSize = "16px";
        questionPopup.style.lineHeight = "1.5";
        questionPopup.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)"; // Добавляем тень

        questionPopup.innerHTML = `
            <div style="margin-bottom: 15px;">
                <b>Вопрос:</b><br>${questionData.question}
            </div>
            <div>
                <b>Ответ:</b> ${questionData.answer}
            </div>
            <button id="close-popup-button" style="position: absolute; top: 10px; right: 10px; border: none; background: none; cursor: pointer; font-size: 18px;">
                X
            </button>
        `; // **Добавляем HTML для вопроса, ответа и кнопки "X"**

        document.body.appendChild(questionPopup);

        const closeButton = questionPopup.querySelector('#close-popup-button');
        closeButton.onclick = function() {
            questionPopup.remove(); // Закрытие поп-ап окна по клику на "X"
            questionPopup = null; // Сбрасываем переменную questionPopup
        };
    }


    function toggleAnswerBox() {
        if (!answerBox) {
            createAnswerBox();
        }

        isAnswerBoxVisible = !isAnswerBoxVisible;
        answerBox.style.display = isAnswerBoxVisible ? "block" : "none";

        if (!isAnswerBoxVisible && questionPopup) { // Если закрываем answerBox, закрываем и поп-ап
            questionPopup.remove();
            questionPopup = null;
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'z' || event.key === 'Z') {
            toggleAnswerBox();
        }
    });

    createAnswerBox();

})();
