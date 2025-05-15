(function() {
    'use strict';

    // -----------------------------------------------------------------------
    // CFG (Corrected Syntax Errors Here)
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
            { question: "По данным таблицы найдите среднее значение, моду и медианувыборки и установите соответствие", answer: "I-B, II-C, III-A" }, // Fixed missing quote
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
            { question: "Выберите из приведённого перечня комплексные удобрения", answer: "1,2" }, // Fixed missing quote
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
            { question: "Какое из следующих минеральных удобрений не растворяется в воде?", answer: "Ca₃(PO₄)₂" }, // Fixed missing quote
            { question: "Выберите физическое свойство, характерное для белого фосфора", answer: "Бесцветное вещество с молекулярной кристаллической решеткой" },
            { question: "Какие вещества образуются в результате реакции (NO2) оксида азота (IV) с водой?", answer: "HNO₃ и HNO₂" },
            { question: "Основываясь на данных диаграммы, выберите верные ответы из следующих.", answer: "1,4" },
            { question: "Если удобрение содержит 40% Ca (H2PO4) 2 по массе, сколько тонн удобрения потребуется для получения 1 т P2O5?", answer: "4,12 т" }
        ]
    };

    // -----------------------------------------------------------------------
    // UI (Uses your original structure for a single panel)
    // -----------------------------------------------------------------------

    let helperWindow = null;
    // popupWindow and currentQuestionData from your original script are not needed with this approach

    function createHelperWindowStructure() {
        helperWindow = document.createElement('div');
        helperWindow.id = 'examHelperWindow';
        helperWindow.style.position = 'fixed';
        helperWindow.style.bottom = '0';
        helperWindow.style.left = '0';
        helperWindow.style.backgroundColor = 'rgba(220, 220, 220, 0.9)';
        helperWindow.style.border = '1px solid #888';
        helperWindow.style.padding = '5px';
        helperWindow.style.zIndex = '1000';
        helperWindow.style.display = 'none'; // Initially hidden
        helperWindow.style.fontSize = '14px';
        helperWindow.style.maxHeight = '20000px'; // Your original value
        helperWindow.style.overflowY = 'auto';
        document.body.appendChild(helperWindow);
    }

    function renderCategorizedButtonsView() {
        if (!helperWindow) return;
        helperWindow.innerHTML = ''; // Clear previous content (e.g., Q/A view)

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
                button.onclick = () => showQuestionInHelperWindow(category, index);
                categoryDiv.appendChild(button);
            });
        }
    }

    function showQuestionInHelperWindow(category, index) {
        if (!helperWindow) return;
        const questionData = categorizedAnswers[category][index];
        helperWindow.innerHTML = ''; // Clear buttons view

        const questionContainer = document.createElement('div');
        questionContainer.style.padding = '5px'; // Add some internal padding

        const questionHeader = document.createElement('h4');
        questionHeader.textContent = 'Question:';
        questionHeader.style.margin = '0 0 5px 0';
        questionContainer.appendChild(questionHeader);

        const questionText = document.createElement('p');
        questionText.textContent = questionData.question;
        questionText.style.margin = '0 0 10px 0';
        questionText.style.backgroundColor = '#f0f0f0'; // Light background for question
        questionText.style.padding = '5px';
        questionText.style.border = '1px solid #ddd';
        questionContainer.appendChild(questionText);

        const answerHeader = document.createElement('h4');
        answerHeader.textContent = 'Answer:';
        answerHeader.style.margin = '0 0 5px 0';
        questionContainer.appendChild(answerHeader);

        const answerText = document.createElement('p');
        answerText.textContent = questionData.answer;
        answerText.style.margin = '0 0 10px 0';
        answerText.style.backgroundColor = '#e0ffe0'; // Light green background for answer
        answerText.style.padding = '5px';
        answerText.style.border = '1px solid #cec';
        answerText.style.fontWeight = 'bold';
        questionContainer.appendChild(answerText);

        const backButton = document.createElement('button');
        backButton.textContent = '← Back to List';
        backButton.style.padding = '5px 10px';
        backButton.style.marginTop = '10px';
        backButton.onclick = renderCategorizedButtonsView; // Go back to buttons view
        questionContainer.appendChild(backButton);

        helperWindow.appendChild(questionContainer);
    }

    // -----------------------------------------------------------------------
    // Initialization & Event Listeners
    // -----------------------------------------------------------------------

    function init() {
        if (document.getElementById('examHelperWindow')) {
            return; // Already initialized
        }

        createHelperWindowStructure(); // Creates the div
        renderCategorizedButtonsView(); // Fills it with buttons initially

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Z') { // Capital Z to toggle helper
                if (helperWindow) {
                    helperWindow.style.display = helperWindow.style.display === 'none' ? 'block' : 'none';
                }
            }
            // No Escape key needed for this panel, 'Back' button handles navigation within
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
