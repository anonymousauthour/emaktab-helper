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
    let currentQuestionDisplay = null;

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

        currentQuestionDisplay = document.createElement("div");
        answerBox.appendChild(currentQuestionDisplay);

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
            displayQuestionAndAnswer(questionData);
        };
        return button;
    }

    function displayQuestionAndAnswer(questionData) {
        if (currentQuestionDisplay) {
            currentQuestionDisplay.innerHTML = `
                <div style="padding: 10px; border: 1px solid #ddd; margin-bottom: 10px; border-radius: 5px; background-color: #f9f9f9;">
                    <b>Вопрос:</b> ${questionData.question}
                </div>
                <div style="padding: 10px; border: 1px solid #ddd; border-radius: 5px; background-color: #f9f9f9;">
                    <b>Ответ:</b> ${questionData.answer}
                </div>
            `; // **Добавил DIV контейнеры со стилями для вопроса и ответа**
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
