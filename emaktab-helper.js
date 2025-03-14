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
            z-index: 1000;
            display: none;
            font-size: 14px;
            max-height: 200px;
            overflow-y: auto;
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
            bottom: 20px;
            left: 10px;
            background-color: rgba(240, 240, 240, 0.95);
            border: 1px solid #888;
            padding: 15px;
            z-index: 1001;
            display: none;
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
