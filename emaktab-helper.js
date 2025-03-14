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
    let buttonsContainer = null; // **Новая переменная для контейнера кнопок**


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
        console.log("currentQuestionDisplay created:", currentQuestionDisplay);
        answerBox.appendChild(currentQuestionDisplay); // **Добавляем currentQuestionDisplay ПЕРВЫМ**

        buttonsContainer = document.createElement("div"); // **Создаем контейнер для кнопок**
        console.log("buttonsContainer created:", buttonsContainer); // *** DEBUGGING ***
        answerBox.appendChild(buttonsContainer); // **Добавляем buttonsContainer ВТОРЫМ**
        console.log("answerBox children after append:", answerBox.children);


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

        buttonsContainer.innerHTML = answerHTML; // **Добавляем HTML КНОПОК в buttonsContainer, а НЕ в answerBox напрямую!**
        document.body.appendChild(answerBox);
    }

    function createQuestionButton(questionNumber, questionData, buttonText) {
        console.log("createQuestionButton called:", questionNumber, questionData, buttonText);
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
            console.log("Button clicked for question:", questionNumber);
            displayQuestionAndAnswer(questionData);
        };
        return button;
    }

    function displayQuestionAndAnswer(questionData) {
        console.log("displayQuestionAndAnswer called:", questionData);
        if (currentQuestionDisplay) {
            console.log("currentQuestionDisplay is:", currentQuestionDisplay);

            // *** РАДИКАЛЬНЫЕ СТИЛИ для максимальной видимости! ***
            currentQuestionDisplay.style.position = "fixed";     // Фиксированное позиционирование
            currentQuestionDisplay.style.top = "0";            // Прижать к верху экрана
            currentQuestionDisplay.style.left = "0";           // Прижать к левому краю экрана
            currentQuestionDisplay.style.width = "98%";         // Занять почти всю ширину экрана
            currentQuestionDisplay.style.height = "50%";        // Занять половину высоты экрана
            currentQuestionDisplay.style.padding = "20px";       // Большой padding
            currentQuestionDisplay.style.border = "5px solid red";   // Толстая КРАСНАЯ граница
            currentQuestionDisplay.style.backgroundColor = "lightyellow"; // Ярко-ЖЕЛТЫЙ фон
            currentQuestionDisplay.style.color = "blue";          // ЯРКО-СИНИЙ текст
            currentQuestionDisplay.style.fontSize = "20px";      // Крупный шрифт
            currentQuestionDisplay.style.zIndex = "10000";      // Самый высокий z-index

            currentQuestionDisplay.innerHTML = `
                <b>Вопрос:</b> ${questionData.question}<br><br>
                <b>Ответ:</b> ${questionData.answer}
            `;

            console.log("currentQuestionDisplay.innerHTML set to:", currentQuestionDisplay.innerHTML);


        } else {
            console.error("currentQuestionDisplay is NULL or undefined!");
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
