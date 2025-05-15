(function() {
    'use strict';

    // -----------------------------------------------------------------------
    // CFG - Syntax errors from original user script are fixed here.
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
            { question: "По данным таблицы найдите среднее значение, моду и медианувыборки и установите соответствие", answer: "I-B, II-C, III-A" }, // Fixed
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
            { question: "Выберите из приведённого перечня комплексные удобрения", answer: "1,2" }, // Fixed
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
            { question: "Какое из следующих минеральных удобрений не растворяется в воде?", answer: "Ca₃(PO₄)₂" }, // Fixed
            { question: "Выберите физическое свойство, характерное для белого фосфора", answer: "Бесцветное вещество с молекулярной кристаллической решеткой" },
            { question: "Какие вещества образуются в результате реакции (NO2) оксида азота (IV) с водой?", answer: "HNO₃ и HNO₂" },
            { question: "Основываясь на данных диаграммы, выберите верные ответы из следующих.", answer: "1,4" },
            { question: "Если удобрение содержит 40% Ca (H2PO4) 2 по массе, сколько тонн удобрения потребуется для получения 1 т P2O5?", answer: "4,12 т" }
        ]
    };

    // -----------------------------------------------------------------------
    // UI - Structure and styling for helperWindow is EXACTLY as user's first script.
    // `popupWindow` and `currentQuestionData` from user's original script are removed.
    // -----------------------------------------------------------------------

    let helperWindow = null;

    // Renders the initial view with category buttons inside helperWindow.
    // This is also called by the "Back" button.
    function renderInitialHelperView() {
        if (!helperWindow) return;
        helperWindow.innerHTML = ''; // Clear previous content

        for (const category in categorizedAnswers) {
            const categoryDiv = document.createElement('div');
            categoryDiv.textContent = category + ": "; // EXACTLY as in user's original script
            helperWindow.appendChild(categoryDiv);
            categorizedAnswers[category].forEach((questionData, index) => {
                const button = document.createElement('button');
                button.textContent = (index + 1);
                button.style.margin = '2px';      // EXACTLY as in user's original script
                button.style.padding = '2px 5px'; // EXACTLY as in user's original script
                button.style.fontSize = '12px';   // EXACTLY as in user's original script
                // This function name matches the one in your original script that was empty.
                button.onclick = () => showPopupQuestion(category, index);
                categoryDiv.appendChild(button);
            });
        }
    }

    // This is the implementation for your originally empty `showPopupQuestion`.
    // It displays the question and answer *inside* the existing helperWindow.
    function showPopupQuestion(category, index) {
        if (!helperWindow) return;
        const questionData = categorizedAnswers[category][index];
        helperWindow.innerHTML = ''; // Clear the button list

        // Display Question (very basic display, no extra styling beyond simple tags)
        const qLabel = document.createElement('div'); // Using div for simple text block
        qLabel.textContent = 'Question:';
        qLabel.style.marginBottom = '2px'; // Minimal spacing
        helperWindow.appendChild(qLabel);

        const qText = document.createElement('div');
        qText.textContent = questionData.question;
        qText.style.marginBottom = '8px'; // Minimal spacing
        helperWindow.appendChild(qText);

        // Display Answer (very basic display)
        const aLabel = document.createElement('div');
        aLabel.textContent = 'Answer:';
        aLabel.style.marginBottom = '2px'; // Minimal spacing
        helperWindow.appendChild(aLabel);

        const aText = document.createElement('div');
        aText.textContent = questionData.answer;
        aText.style.fontWeight = 'bold'; // Make answer bold for some emphasis
        aText.style.marginBottom = '10px'; // Minimal spacing
        helperWindow.appendChild(aText);

        // Add a "Back" button to return to the list of questions
        const backButton = document.createElement('button');
        backButton.textContent = '← Back to List';
        // Apply the same styling as your original number buttons for consistency
        backButton.style.margin = '2px';
        backButton.style.padding = '2px 5px';
        backButton.style.fontSize = '12px';
        backButton.onclick = renderInitialHelperView; // This re-draws the button list
        helperWindow.appendChild(backButton);
    }


    // This function creates the main helperWindow div container ONCE.
    // Its content is then managed by renderInitialHelperView() and showPopupQuestion().
    // The styling here is EXACTLY from your original script's createHelperWindow.
    function createHelperWindowContainer() {
        helperWindow = document.createElement('div');
        helperWindow.id = 'examHelperWindow'; // From your original script
        helperWindow.style.position = 'fixed';
        helperWindow.style.bottom = '0';
        helperWindow.style.left = '0';
        helperWindow.style.backgroundColor = 'rgba(220, 220, 220, 0.9)';
        helperWindow.style.border = '1px solid #888';
        helperWindow.style.padding = '5px';
        helperWindow.style.zIndex = '1000';
        helperWindow.style.display = 'none'; // Initially hidden
        helperWindow.style.fontSize = '14px'; // Overall font size for the panel
        helperWindow.style.maxHeight = '20000px'; // Your original value
        helperWindow.style.overflowY = 'auto';
        document.body.appendChild(helperWindow);
    }

    // -----------------------------------------------------------------------
    // Initialization & Event Listeners (Added for overall script functionality)
    // -----------------------------------------------------------------------
    function init() {
        if (document.getElementById('examHelperWindow')) {
            return; // Already initialized
        }

        createHelperWindowContainer(); // Create the div shell (styled as per your original)
        renderInitialHelperView();     // Fill it with the initial buttons (styled as per your original)

        // Event listener for the toggle key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Z') { // Capital Z to toggle helper
                if (helperWindow) {
                    helperWindow.style.display = helperWindow.style.display === 'none' ? 'block' : 'none';
                }
            }
        });
        console.log("Exam Helper Loaded. Press capital Z to toggle. UI and Q/A display are per original script intent.");
    }

    // Standard auto-run logic for userscripts
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
