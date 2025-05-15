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

    function renderInitialHelperView() {
        if (!helperWindow) return;
        helperWindow.innerHTML = '';

        // To make categories flow horizontally, we can set helperWindow to not wrap its direct children easily
        // and make categoryDivs inline or inline-block.
        helperWindow.style.whiteSpace = 'nowrap'; // Prevent categoryDivs from wrapping if they are inline-block
        helperWindow.style.overflowX = 'auto';   // Allow helperWindow itself to scroll horizontally

        for (const category in categorizedAnswers) {
            const categoryDiv = document.createElement('div');
            // **** KEY CHANGE FOR HORIZONTAL LAYOUT OF CATEGORIES ****
            categoryDiv.style.display = 'inline-block'; // Makes category blocks flow horizontally
            categoryDiv.style.verticalAlign = 'top';    // Align blocks nicely if they have different heights
            categoryDiv.style.marginRight = '10px';     // Spacing between category blocks
            categoryDiv.style.whiteSpace = 'normal';    // Allow content *within* categoryDiv (buttons) to wrap normally

            const categoryNameSpan = document.createElement('span'); // Keep name and buttons within the inline-block
            categoryNameSpan.textContent = category + ": ";
            categoryDiv.appendChild(categoryNameSpan);

            categorizedAnswers[category].forEach((questionData, index) => {
                const button = document.createElement('button');
                button.textContent = (index + 1);
                button.style.margin = '2px';
                button.style.padding = '2px 5px';
                button.style.fontSize = '12px';
                button.onclick = () => showPopupQuestion(category, index);
                categoryDiv.appendChild(button); // Append buttons to the categoryDiv
            });
            helperWindow.appendChild(categoryDiv); // Append the now inline-block categoryDiv
        }
    }

    function showPopupQuestion(category, index) {
        if (!helperWindow) return;
        const questionData = categorizedAnswers[category][index];
        helperWindow.innerHTML = ''; // Clear the button list
        helperWindow.style.whiteSpace = 'normal'; // Reset whiteSpace for Q/A view
        helperWindow.style.overflowX = 'hidden';  // No horizontal scroll needed for Q/A view typically

        const qLabel = document.createElement('div');
        qLabel.textContent = 'Question:';
        qLabel.style.marginBottom = '2px';
        helperWindow.appendChild(qLabel);

        const qText = document.createElement('div');
        qText.textContent = questionData.question;
        qText.style.marginBottom = '8px';
        helperWindow.appendChild(qText);

        const aLabel = document.createElement('div');
        aLabel.textContent = 'Answer:';
        aLabel.style.marginBottom = '2px';
        helperWindow.appendChild(aLabel);

        const aText = document.createElement('div');
        aText.textContent = questionData.answer;
        aText.style.fontWeight = 'bold';
        aText.style.marginBottom = '10px';
        helperWindow.appendChild(aText);

        const backButton = document.createElement('button');
        backButton.textContent = '← Back to List';
        backButton.style.margin = '2px';
        backButton.style.padding = '2px 5px';
        backButton.style.fontSize = '12px';
        backButton.onclick = renderInitialHelperView;
        helperWindow.appendChild(backButton);
    }

    function createHelperWindowContainer() {
        helperWindow = document.createElement('div');
        helperWindow.id = 'examHelperWindow';
        helperWindow.style.position = 'fixed';
        helperWindow.style.bottom = '0';
        helperWindow.style.left = '0';
        // Potentially make it full width if horizontal layout is desired across the bottom
        // helperWindow.style.width = '100%';
        // helperWindow.style.boxSizing = 'border-box'; // If width is 100% and padding is used
        helperWindow.style.backgroundColor = 'rgba(220, 220, 220, 0.9)';
        helperWindow.style.border = '1px solid #888';
        helperWindow.style.padding = '5px';
        helperWindow.style.zIndex = '1000';
        helperWindow.style.display = 'none';
        helperWindow.style.fontSize = '14px';
        // For a horizontal bar, maxHeight should be constrained, not 20000px
        // helperWindow.style.maxHeight = '100px'; // Example if it's a short horizontal bar
        // If using maxHeight like above, overflowY might be 'auto' or 'hidden'
        helperWindow.style.maxHeight = '20000px'; // YOUR ORIGINAL - this allows it to be tall
        helperWindow.style.overflowY = 'auto';   // YOUR ORIGINAL - vertical scroll if taller than viewport
        // helperWindow.style.overflowX = 'auto'; // Added in renderInitialHelperView for horizontal scroll of categories
        document.body.appendChild(helperWindow);
    }

    // -----------------------------------------------------------------------
    // Initialization & Event Listeners
    // -----------------------------------------------------------------------
    function init() {
        if (document.getElementById('examHelperWindow')) {
            return;
        }
        createHelperWindowContainer();
        renderInitialHelperView();

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Z') {
                if (helperWindow) {
                    helperWindow.style.display = helperWindow.style.display === 'none' ? 'block' : 'none';
                    if (helperWindow.style.display === 'block') {
                        // If we are showing it, and it was previously in Q/A view, ensure it's back to list view
                        // This check might be too aggressive if user hid it during Q/A view and wants to see Q/A again.
                        // For now, let's assume toggling always shows the initial list view if it was hidden.
                        // Or, better, only call renderInitialHelperView if it's the *first time* or after Q/A.
                        // The current structure handles this okay because showPopupQuestion changes content,
                        // and "Back" button calls renderInitialHelperView.
                    }
                }
            }
        });
        console.log("Exam Helper Loaded. Press capital Z to toggle. Categories should now be horizontal.");
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
