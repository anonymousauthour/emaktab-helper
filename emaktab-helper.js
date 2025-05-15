(function() {
    'use strict';

    // -----------------------------------------------------------------------
    // CFG
    // -----------------------------------------------------------------------
    const categorizedAnswers = {
        "Алгебра": [
            { question: "Для вариационного ряда 4, 5, 5, 6, 6, 6, 6, 7, 8, 8, 8, 10 найдите значение выражения n6 * n8. Здесь n6 - частота числа 6,  n8 – частота числа 8.", answer: "12" },
            { question: "Дильшод готовится к новому учебному году. В магазине он увидел следующие учебные принадлежности: 5 тетрадей разного цвета; 3 вида пеналов; 4 вида ручек. Дильшод хочет купить 2 предмета разного вида. (Например, тетрадь и ручка или пенал и тетрадь) Сколькими различными способами он может купить пару учебных принадлежностей разного наименования? ", answer: "47" },
            { question: "Найдите среднее значение выборки 18, 19, 17, 18, 14, 13, 17, 19, 18, 18.", answer: "17,1" },
            { question: "Вычислите: 27/32 * 8/162 * 69/72", answer: "1/23" },
            { question: "Найдите сумму наименьшего и наибольшего натуральных чисел, удовлетворяющих систему неравенств. (таблица)", answer: "11" },
            { question: "Выполните действия: 1 + a − a/a-1", answer: "a + 1/a" },
            { question: "Для вариационного ряда 4, 5, 5, 6, 6, 6, 6, 7, 8, 8, 8, 10 найдите значение выражения", answer: "5/12" },
            { question: "По данным таблицы найдите среднее значение, моду и медианувыборки и установите соответствие", answer: "I-B, II-C, III-A" },
            { question: "Сколько различных трёхзначных чисел можно составить из цифр 2, 4, 6, 8, 5, не повторяя их?", answer: "60" },
            { question: "Сколько четырёхзначных чисел, кратных 2, можно составить изцифр 0, 3, 4, 5, 6, 7?", answer: "156" },
            { question: "Сколько существует четырехзначных чисел с одной цифрой 5?", answer: "2673" },
            { question: "Если в записи натурального числа участвуют только цифры,кратные 3,", answer: "12" },
            { question: "Упростите (таблица)", answer: "0" },
            { question: "Решите квадратное уравнение", answer: "x1 = 1/2; x2 = 3" },
            { question: "На телефоне Нодира установлен код. Код состоит из трёх разных цифр", answer: "20" },
            { question: "Найдите значение 𝑐 в уравнении", answer: "C = 9" }
        ],
        "Химия": [
            { question: "Выберите из приведённого перечня комплексные удобрения", answer: "1,2" },
            { question: "Какой металл способен вступать в непосредственную реакцию с азотом при комнатной температуре?", answer: "Литий" },
            { question: "Какие реагенты необходимы для получения аммиака в лабораторных условиях.", answer: "NH₄Cl va NaOH" },
            { question: "Найдите правильную последовательность реактивов для следующей цепи превращений", answer: "O₂, H₂O, Ca(OH)₂" },
            { question: "Укажите окислитель и восстановитель в следующей реакции", answer: "Окислитель– CuO;восстановитель– NH₃" },
            { question: "Какое вещество необходимо для получения ортофосфорной кислоты из вещества, образующегося в результате реакции белого фосфора и кислорода?", answer: "H₂O" },
            { question: "Какая соль образуется в результате следующей реакции? 3NaOH + H3PO4 →", answer: "Na₃PO₄" },
            { question: "Какой осадок образуется при погружении нитрата серебра в раствор, содержащий фосфат-ион?", answer: "Желтый осадок" },
            { question: "Какая из нижеперечисленных солей является дигидрофосфатом?", answer: "Ca(H₂PO₄)₂" },
            { question: "Какое вещество выделяется при действии щелочи на соли аммония?", answer: "NH₃" },
            { question: "Какой из следующих ионов образуется на последней стадии диссоциации ортофосфорной кислоты?", answer: "PO₄³⁻" },
            { question: "Какое из следующих минеральных удобрений не растворяется в воде?", answer: "Ca₃(PO₄)₂" },
            { question: "Выберите физическое свойство, характерное для белого фосфора", answer: "Бесцветное вещество с молекулярной кристаллической решеткой" },
            { question: "Какие вещества образуются в результате реакции (NO2) оксида азота (IV) с водой?", answer: "HNO₃ и HNO₂" },
            { question: "Основываясь на данных диаграммы, выберите верные ответы из следующих.", answer: "1,4" },
            { question: "Если удобрение содержит 40% Ca (H2PO4) 2 по массе, сколько тонн удобрения потребуется для получения 1 т P2O5?", answer: "4,12 т" }
        ]
    };

    // -----------------------------------------------------------------------
    // UI
    // -----------------------------------------------------------------------

    let helperWindow = null;
    let popupWindow = null;

    // THIS FUNCTION IS NOW REVERTED TO YOUR ORIGINAL SCRIPT'S UI FOR THE HELPER PANEL
    function createHelperWindow() {
        helperWindow = document.createElement('div');
        helperWindow.id = 'examHelperWindow';
        helperWindow.style.position = 'fixed';
        helperWindow.style.bottom = '0'; // As per your original
        helperWindow.style.left = '0';  // As per your original
        helperWindow.style.backgroundColor = 'rgba(220, 220, 220, 0.9)'; // As per your original
        helperWindow.style.border = '1px solid #888'; // As per your original
        helperWindow.style.padding = '5px'; // As per your original
        helperWindow.style.zIndex = '1000'; // As per your original
        helperWindow.style.display = 'none'; // Initially hidden
        helperWindow.style.fontSize = '14px'; // As per your original
        helperWindow.style.maxHeight = '20000px'; // As per your original (effectively no limit)
        helperWindow.style.overflowY = 'auto'; // As per your original

        document.body.appendChild(helperWindow);

        for (const category in categorizedAnswers) {
            const categoryDiv = document.createElement('div');
            categoryDiv.textContent = category + ": "; // Text content directly as per your original
            helperWindow.appendChild(categoryDiv);
            categorizedAnswers[category].forEach((questionData, index) => {
                const button = document.createElement('button');
                button.textContent = (index + 1);
                button.style.margin = '2px'; // As per your original
                button.style.padding = '2px 5px'; // As per your original
                button.style.fontSize = '12px'; // As per your original
                // button.style.cursor = 'pointer'; // This was my addition, removed for consistency with original
                // button.title = ... ; // This was my addition, removed
                button.onclick = () => showPopupQuestion(category, index);
                categoryDiv.appendChild(button);
            });
        }
    }

    // This function (for the Q/A popup) remains as I designed it, as it was an addition.
    function showPopupQuestion(category, index) {
        const questionData = categorizedAnswers[category][index];
        if (!questionData) return;

        if (!popupWindow) {
            popupWindow = document.createElement('div');
            popupWindow.id = 'examHelperPopup';
            popupWindow.style.position = 'fixed';
            popupWindow.style.top = '20px';
            popupWindow.style.right = '20px';
            popupWindow.style.width = '400px';
            popupWindow.style.maxHeight = '80vh';
            popupWindow.style.overflowY = 'auto';
            popupWindow.style.backgroundColor = 'rgba(255, 255, 230, 0.98)';
            popupWindow.style.border = '1px solid #aaa';
            popupWindow.style.borderRadius = '5px';
            popupWindow.style.padding = '15px';
            popupWindow.style.zIndex = '10000'; // Higher than helper window
            popupWindow.style.boxShadow = '0 0 15px rgba(0,0,0,0.3)';
            popupWindow.style.fontSize = '14px';
            popupWindow.style.lineHeight = '1.6';

            const closeButton = document.createElement('button');
            closeButton.textContent = 'Close (X)';
            closeButton.style.position = 'absolute';
            closeButton.style.top = '5px';
            closeButton.style.right = '5px';
            closeButton.style.padding = '3px 6px';
            closeButton.style.cursor = 'pointer';
            closeButton.onclick = () => {
                popupWindow.style.display = 'none';
            };
            popupWindow.appendChild(closeButton);

            const contentDiv = document.createElement('div');
            contentDiv.id = 'popupContent';
            popupWindow.appendChild(contentDiv);

            document.body.appendChild(popupWindow);
        }

        const contentDiv = popupWindow.querySelector('#popupContent') || popupWindow;
        contentDiv.innerHTML = `
            <h3>Question:</h3>
            <p style="background-color: #f0f0f0; padding: 8px; border-radius: 3px;">${questionData.question}</p>
            <h3>Answer:</h3>
            <p style="background-color: #e0ffe0; padding: 8px; border-radius: 3px; font-weight: bold;">${questionData.answer}</p>
        `;
        popupWindow.style.display = 'block';
        popupWindow.scrollTop = 0;
    }

    // -----------------------------------------------------------------------
    // Initialization & Event Listeners
    // -----------------------------------------------------------------------

    function init() {
        if (document.getElementById('examHelperWindow')) {
             // console.log("Exam Helper: Already initialized."); // Optional: can be noisy
            return;
        }

        createHelperWindow(); // This will now create the UI as per your original spec for this panel

        document.addEventListener('keydown', function(e) {
            // Condition for toggling the helper window
            if (e.key === 'Z') { // Capital Z to toggle helper
                // e.preventDefault(); // Optional: uncomment if 'Z' should not be typed into fields
                if (helperWindow) {
                    helperWindow.style.display = helperWindow.style.display === 'none' ? 'block' : 'none';
                }
            }

            // Condition for closing the popup window
            if (e.key === 'Escape') {
                 if (popupWindow && popupWindow.style.display !== 'none') {
                    popupWindow.style.display = 'none';
                    e.preventDefault();
                 }
            }
        });

        console.log("Exam Helper Loaded. Press capital Z to toggle.");
    }

    // Ensure the DOM is ready before trying to append elements
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
