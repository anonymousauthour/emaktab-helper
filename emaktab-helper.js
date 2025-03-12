// exam_helper.js - This file is loaded remotely by the Tampermonkey script.

(function() {
    'use strict';

    // -----------------------------------------------------------------------
    // Configuration - **MODIFY THIS SECTION**
    // -----------------------------------------------------------------------

    const categorizedAnswers = {
        "Алгебра": [
            "D",
            "A",
            "B",
            "C"
        ],
        "Химия": [
            "A",
            "C",
            "B",
            "D"
        ],
        "Геометрия": [
            "B",
            "D",
            "A",
            "C"
        ]
        // Add other subjects and answers
    };

    // -----------------------------------------------------------------------
    // End of Configuration
    // -----------------------------------------------------------------------

    let answerBox = null;
    let isAnswerBoxVisible = false;

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
        answerBox.style.maxWidth = "300px"; // Added a max width for better formatting
        answerBox.style.wordWrap = "break-word"; // Ensures long lines wrap

        let answerHTML = "";

        for (const subject in categorizedAnswers) {
            if (categorizedAnswers.hasOwnProperty(subject)) {
                answerHTML += "<b>" + subject + ":</b><br>";
                const answers = categorizedAnswers[subject];
                for (let i = 0; i < answers.length; i++) {
                    answerHTML += (i + 1) + ") " + answers[i] + "  "; // Added spacing between answers
                }
                answerHTML += "<br><br>"; // Added spacing between subjects
            }
        }

        answerBox.innerHTML = answerHTML;
        document.body.appendChild(answerBox);
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