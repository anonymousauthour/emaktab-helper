(function() {
    'use strict';

    // -----------------------------------------------------------------------
    // CFG
    // -----------------------------------------------------------------------

    const categorizedAnswers = {

        "Алгебра": [
            { question: "Решите неравенство 3x+7≤2(x+4)−5", answer: "D" },
            { question: "Сколько чисел из множества {−5;−2;0;3;6} являются корнями неравенства 2x+8≥0?", answer: "A" },
            { question: "Сопоставьте каждому квадратному уравнению его корни (таблица)", answer: "B" },
            { question: "Решите систему неравенств. { −3x+6≥2−4x 5x−7<13+x ​", answer: "C" },
            { question: "Найдите модуль разности корней уравнения. ∣2x−5∣=7", answer: "A" },
            { question: "Найдите произведение наименьшего положительного и наибольшего отрицательного целых чисел, удовлетворяющих неравенству: ∣3−x∣>5", answer: "B" },
            { question: "Решите квадратное уравнение 2x 2 +3x−5=0", answer: "C" },
            { question: "Разложите на множители x 2 −7x+10", answer: "D" },
            { question: "Рассмотрим уравнение x 4 −6x 2 +5=0. Найдите, какие из следующих утверждений о корнях уравнения верны:", answer: "A" },
            { question: "Скоростной поезд прошёл 300 км на 3 часа быстрее, чем грузовой поезд. Скорость грузового поезда на 50 км/ч меньше скорости скоростного поезда. Найдите скорость скоростного поезда.", answer: "B" },
            { question: "Найдите сумму целых чисел, удовлетворяющих системе: { x+2≥5 x−3≤4 ​", answer: "C" },
            { question: "Три группы рабочих работая вместе отремонтировали здание за определенный промежуток времени. Если бы строила только первая бригада, то им потребовалось бы на 5 дней больше. Если только вторая, то на 8 дней больше. Если только третья, то времени потребовалось бы в 1,5 раза больше. Сколько времени потребуется второй бригаде для постройки дома?", answer: "D" },
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
    // UI 
    // -----------------------------------------------------------------------

    let helperWindow = null;
    let popupWindow = null;
    let currentQuestionData = null;

    function createHelperWindow() {
        helperWindow = document.createElement('div');
        helperWindow.id = 'examHelperWindow';
        helperWindow.style.position = 'fixed';
        helperWindow.style.bottom = '0';
        helperWindow.style.left = '0';
        helperWindow.style.backgroundColor = 'rgba(220, 220, 220, 0.9)';
        helperWindow.style.border = '1px solid #888';
        helperWindow.style.padding = '5px';
        helperWindow.style.zIndex = '1000';
        helperWindow.style.display = 'none';
        helperWindow.style.fontSize = '14px';
        helperWindow.style.maxHeight = '200px';
        helperWindow.style.overflowY = 'auto';

        document.body.appendChild(helperWindow);

        for (const category in categorizedAnswers) {
            const categoryDiv = document.createElement('div');
            categoryDiv.textContent = category + ": ";
            helperWindow.appendChild(categoryDiv);
            categorizedAnswers[category].forEach((questionData, index) => {
                const button = document.createElement('button');
                button.textContent = (index + 1);
                button.style.margin = '2px';
                button.style.padding = '2px 5px';
                button.style.fontSize = '12px';
                button.onclick = () => showPopupQuestion(category, index);
                categoryDiv.appendChild(button);
            });
        }
    }

    function createPopupWindow() {
        popupWindow = document.createElement('div');
        popupWindow.id = 'examPopupWindow';
        popupWindow.style.position = 'fixed';
        popupWindow.style.bottom = '70px'; // позиция поп-ап окна сверху
        popupWindow.style.left = '10px';
        popupWindow.style.backgroundColor = 'rgba(240, 240, 240, 0.95)';
        popupWindow.style.border = '1px solid #888';
        popupWindow.style.padding = '15px';
        popupWindow.style.zIndex = '1001';
        popupWindow.style.display = 'none';
        popupWindow.style.maxWidth = '500px';
        popupWindow.style.maxHeight = '300px';
        popupWindow.style.overflowY = 'auto';
        popupWindow.style.fontSize = '16px';

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
            hidePopupWindow(); 
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'z') {
            toggleHelperWindow();
        } else if (event.key === 'x') {
            hidePopupWindow();
        }
    });

    createHelperWindow();
    createPopupWindow();

})();
