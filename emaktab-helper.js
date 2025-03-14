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
    // UI & Functionality - **DO NOT MODIFY BELOW UNLESS YOU KNOW WHAT YOU ARE DOING**
    // -----------------------------------------------------------------------

    let helperWindow = null;
    let popupWindow = null;
    let currentQuestionData = null;

    function createHelperWindow() {
        helperWindow = document.createElement('div');
        helperWindow.id = 'examHelperWindow';
        helperWindow.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            background-color: rgba(220, 220, 220, 0.9);
            border: 1px solid #888;
            padding: 5px;
            z-index: 1000; /* Ensure it's on top */
            display: none; /* Hidden by default */
            font-size: 14px;
            max-height: 200px; /* Compact height */
            overflow-y: auto; /* Scroll if content overflows */
        `;
        document.body.appendChild(helperWindow);

        // Add question buttons for each category
        for (const category in categorizedAnswers) {
            const categoryDiv = document.createElement('div');
            categoryDiv.textContent = category + ": ";
            helperWindow.appendChild(categoryDiv);
            categorizedAnswers[category].forEach((questionData, index) => {
                const button = document.createElement('button');
                button.textContent = (index + 1); // Question number
                button.style.cssText = `
                    margin: 2px;
                    padding: 2px 5px;
                    font-size: 12px;
                `;
                button.onclick = () => showPopupQuestion(category, index);
                categoryDiv.appendChild(button);
            });
        }
    }

    function createPopupWindow() {
        popupWindow = document.createElement('div');
        popupWindow.id = 'examPopupWindow';
        popupWindow.style.cssText = `
            position: fixed;
            bottom: 20px; /* Positioned above helper window */
            left: 10px; /* Slightly offset from helper window */
            background-color: rgba(240, 240, 240, 0.95);
            border: 1px solid #888;
            padding: 15px;
            z-index: 1001; /* Above helper window */
            display: none; /* Hidden by default */
            max-width: 500px;
            max-height: 300px;
            overflow-y: auto;
            font-size: 16px;
        `;
        document.body.appendChild(popupWindow);
    }

    function showPopupQuestion(category, questionIndex) {
        currentQuestionData = categorizedAnswers[category][questionIndex];
        if (popupWindow) {
            popupWindow.textContent = `${currentQuestionData.question} Ответ: ${currentQuestionData.answer}`;
            popupWindow.style.display = 'block';
        }
    }

    function hidePopupWindow() {
        if (popupWindow) {
            popupWindow.style.display = 'none';
        }
    }

    function toggleHelperWindow() {
        if (helperWindow) {
            helperWindow.style.display = helperWindow.style.display === 'none' ? 'block' : 'none';
            hidePopupWindow(); // Close popup when toggling helper
        }
    }

    // Event listeners
    document.addEventListener('keydown', function(event) {
        if (event.key === 'z') {
            toggleHelperWindow();
        } else if (event.key === 'x') {
            hidePopupWindow();
        }
    });

    // Initialize UI
    createHelperWindow();
    createPopupWindow();

})();

    // -----------------------------------------------------------------------
    // End of Configuration
    // -----------------------------------------------------------------------

    let answerBox = null;
    let isAnswerBoxVisible = false;
    let questionPopup = null; // **Новая переменная для поп-ап окна**


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

        buttonsContainer = document.createElement("div");
        answerBox.appendChild(buttonsContainer);


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

        buttonsContainer.innerHTML = answerHTML;
        document.body.appendChild(answerBox);
    }

    function createQuestionButton(questionNumber, questionData, buttonText) {
        console.log("createQuestionButton вызвана:", questionNumber, questionData, buttonText); // *** DEBUGGING: Вызвана ли функция создания кнопки? ***
        const button = document.createElement("button");
        button.textContent = buttonText;
        button.style.padding = "5px 8px";
        button.style.margin = "1px";
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#f0f0f0";
        button.style.border = "1px solid #ccc";
        button.style.borderRadius = "3px";
        button.style.fontSize = "12px";

        // *** DEBUGGING: Добавим console.log ПЕРЕД и ПОСЛЕ button.onclick ***
        console.log("Начало назначения button.onclick для кнопки:", buttonText);
        button.onclick = function() {
            console.log("Кнопка вопроса КЛИКНУТА:", questionNumber); // *** DEBUGGING: Клик по кнопке зарегистрирован? ***
            showQuestionPopup(questionData);
        };
        console.log("Конец назначения button.onclick для кнопки:", buttonText, " onclick:", button.onclick); // *** DEBUGGING: Проверяем, что onclick назначен и не null ***
        return button;
    }

    function showQuestionPopup(questionData) {
        console.log("showQuestionPopup called:", questionData); // *** DEBUGGING ***

        if (questionPopup) {
            questionPopup.remove();
            console.log("Previous questionPopup removed"); // *** DEBUGGING ***
        }

        questionPopup = document.createElement("div");
        console.log("questionPopup created:", questionPopup); // *** DEBUGGING ***

        questionPopup.style.position = "fixed";
        questionPopup.style.top = "50px";
        questionPopup.style.left = "10px";
        questionPopup.style.backgroundColor = "white";
        questionPopup.style.border = "1px solid #ccc";
        questionPopup.style.padding = "20px";
        questionPopup.style.maxWidth = "400px";
        questionPopup.style.zIndex = "10000";
        questionPopup.style.fontFamily = "sans-serif";
        questionPopup.style.fontSize = "16px";
        questionPopup.style.lineHeight = "1.5";
        questionPopup.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";

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
        `;

        console.log("questionPopup.innerHTML set:", questionPopup.innerHTML); // *** DEBUGGING ***

        document.body.appendChild(questionPopup);
        console.log("questionPopup appended to document.body:", questionPopup); // *** DEBUGGING ***


        const closeButton = questionPopup.querySelector('#close-popup-button');
        console.log("closeButton found:", closeButton); // *** DEBUGGING ***
        closeButton.onclick = function() {
            console.log("Close button clicked"); // *** DEBUGGING ***
            questionPopup.remove();
            questionPopup = null;
            console.log("questionPopup removed and reset"); // *** DEBUGGING ***
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
