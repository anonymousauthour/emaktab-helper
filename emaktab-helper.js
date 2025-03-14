(function() {
    'use strict';

    // -----------------------------------------------------------------------
    // CFG
    // -----------------------------------------------------------------------

    const categorizedAnswers = {

        "Алгебра": [
            { question: "Решите неравенство 3x+7≤2(x+4)−5", answer: "x≥-4" },
            { question: "Сколько чисел из множества {−5;−2;0;3;6} являются корнями неравенства 2x+8≥0?", answer: "4" },
            { question: "Сопоставьте каждому квадратному уравнению его корни (таблица)", answer: "I-B, II-A, III-D" },
            { question: "Решите систему неравенств. { −3x+6≥2−4x 5x−7<13+x ​", answer: "x∈[−4;5)" },
            { question: "Найдите модуль разности корней уравнения. ∣2x−5∣=7", answer: "7" },
            { question: "Найдите произведение наименьшего положительного и наибольшего отрицательного целых чисел, удовлетворяющих неравенству: ∣3−x∣>5", answer: "-27" },
            { question: "Решите квадратное уравнение 2x 2 +3x−5=0", answer: "x1=1,x2=-5/2" },
            { question: "Разложите на множители x 2 −7x+10", answer: "x=v5,x=-v5,x=1,x=-1" },
            { question: "Рассмотрим уравнение x 4 −6x 2 +5=0. Найдите, какие из следующих утверждений о корнях уравнения верны:", answer: "верно, верно, неверно" },
            { question: "Скоростной поезд прошёл 300 км на 3 часа быстрее, чем грузовой поезд. Скорость грузового поезда на 50 км/ч меньше скорости скоростного поезда. Найдите скорость скоростного поезда.", answer: "100km/h" },
            { question: "Найдите сумму целых чисел, удовлетворяющих системе: { x+2≥5 x−3≤4 ​", answer: "25" },
            { question: "Три группы рабочих работая вместе отремонтировали здание за определенный промежуток времени. Если бы строила только первая бригада, то им потребовалось бы на 5 дней больше. Если только вторая, то на 8 дней больше. Если только третья, то времени потребовалось бы в 1,5 раза больше. Сколько времени потребуется второй бригаде для постройки дома?", answer: "10 дней" },
            { question: "Определите неверное утверждение, используя свойства числовых неравенств.", answer: " Если a>b, c<0 , то a / c * c>b / c * c " },
            { question: "Найдите арифметический квадратный корень числа 225.", answer: "15" },
            { question: "Найдите значение a, если VVx=xa", answer: "a=1/4" },
            { question: "Вычислите и установите соответствие ответов.", answer: "I-B,  II-A,  III-C" },
            { question: "Сколько натуральных чисел удовлетворяют двойному неравенству ", answer: "10" },
            { question: "Решите уравнение (корни)", answer: "1/27" },
            { question: "Вычислите: 4,4/5*8,4/5", answer: "16" },
            { question: "Найдите наименьшее целое число, удовлетворяющее неравенству", answer: "-13" },
            { question: "Если разность x-y меньше суммы x+y, то какой из следующих вариантов будет верным?", answer: "y>0" },
            { question: "Определите верны ли следующие утверждения, используя определение числового неравенства:", answer: "неверно, неверно, верно" },
            { question: "Вычислите (оч длинный корень)", answer: "-2" },
            { question: "Упростите выражение", answer: "p-q" },
            { question: "Сколько из следующих неравенств всегда верны, если", answer: "2" },
            { question: "Определите неверное неравенство из следующих.", answer: "при любых значениях кроме a и b, кроме a / 3 и b / 3, будет a2+b2+18<6(a+b)" },
            { question: "Расстояние между городами A и B равно 441 km. Это расстояние легковая машина преодолеет за 4 часа, а грузовая машина – за 10 часов. Грузовая машина выехала из города A в город B. В это же время легковая машина выехала из города В в город А. На каком расстоянии от города  B они встретятся?", answer: "315 km" }
        ],
        "Химия": [
            { question: "Как определить эквивалент химического элемента?", answer: "Через атомную массу элемента и его валентность" },
            { question: "Какой из следующих газов имеет двухатомную молекулу?", answer: "O₂" },
            { question: "Сколько моль молекул содержится в 22,4 литра CO₂??", answer: "1 моль" },
            { question: "Рассчитайте эквивалентную массу для H₂SO₄.", answer: "49 г" },
            { question: "Железо сожгли в 33,6 л (при н.у.) хлора. Сколько граммов железа вступило в реакцию?", answer: "56" },
            { question: "Оксид содержит 30% кислорода. Валентность элемента равна 3. Определите эквивалент элемента, образующего данный оксид.", answer: "18.66" },
            { question: "Какое соединение образуется в результате реакции йода с водородом?", answer: "HI" },
            { question: "Какой объем займет 72 г воды в газообразном (пар) состоянии?", answer: "89.6" },
            { question: "Сколько граммов калия перманганата и сколько миллилитров раствора хлороводородной кислоты с концентрацией 28% (ρ = 1,14 г/мл) необходимо для получения 12 граммов брома из калия бромида?", answer: "4,74 г KMnO₄ и 27,45 мл HCl раствора" },
            { question: "В каком направлении сместится равновесие в следующей реакции, если понизить температуру? 2NO + O₂ → 2NO₂ + Q", answer: "Вправо" },
            { question: "Какой фактор не влияет на состояние химического равновесия?", answer: "Катализатор" },
            { question: "Выберите реагенты, позволяющие осуществить следующие превращения:HCl → Cl₂ → CuCl₂ → Cu(OH)₂ → CuO → Cu", answer: "KMnO4 , Cu,NaOH, t℃, H2" },
            { question: "С какими из перечисленных веществ вступает в реакцию хлороводородная кислота? 1 — Zn; 2 — Cu; 3 — CuO; 4 — Cu(OH)₂; 5 — C; 6 — Na₂S.", answer: "1,3,4,6" },
            { question: "Вещества, ускоряющие химические реакции, но остающиеся при этом неизменными, называются …….. .", answer: "катализаторами" },
            { question: "На приведенном графике показана зависимость скорости реакции от концентрации. Как изменится скорость реакции, если концентрация увеличится с 0,2 моль/л до 0,6 моль/л?", answer: "Скорость реакции значительно возрастет" },
            { question: "Выберите факторы, смещающие химическое равновесие.", answer: "Изменение давления, температуры и концентрации веществ;" },
            { question: "Qaysi qatorda qutbli  kovalent bog‘lanishga ega bo‘lgan kimyoviy birikmalar berilgan.", answer: "HBr, HCl" },
            { question: "Qaysi qatorda atomli  kristall panjara hosil qiladigan moddalar joylashgan?", answer: "uglerod, olmos, grafit" },
            { question: "B-C-N-O ushbu qatorda elementlarning qaysi xususiyatlari ortib boradi? 1)elektromanfiyligi 2)atom radiusi 3)oksidlovchilik xossasi 4)aytaruvchilik xossasi", answer: "1,3" },
            { question: "Qaysi qatorda kimyoviy bog‘lanish turlari to‘g‘ri berilgan?", answer: "kovalent bog‘lanish, ionli bog‘lanish, metall bog‘lanish" },
            { question: "Qaysi moddalar metall kristall panjara hosil qiladi? 1) natriy  2) kalsiy gidrid 3) kremniy   4) mis  5) suv  6) temir 7) natriy sulfat", answer: "1, 4 va 6" },
            { question: "Qaynash va suyuqlanish haroratlari yuqori, qattiq, kristall tugunlarida alohida atomlar tutuvchi moddalar qanday kristall panjarali bo‘ladi?", answer: "b" },
            { question: "Ushbu birikmalarning mavjud bo‘lgan bog‘lanish turi bilan moslashtiring.", answer: " 1-a, 2-c, 3-b, 4-d" },
            { question: "KClO3 birikmasidagi xlorning oksidlanish darajasini aniqlang.", answer: "+5" },
            { question: "Oksidlanish-qaytarilish reaksiyasini aniqlang", answer: "MnO2+ 4HCl ⟶ MnCl2 +Cl2+ 2H2O" },
            { question: "Faqat   оksidlоvchi   хоssаlаrgа  egа   bo‘lgаn  mоddаlаrni   aniqlang.", answer: "1,4" },
            { question: "NaF, F2O,  HF ushbu moddalar tarkibidagi  ftorning oksidlanish darajasini aniqlang.", answer: "-1" },
            { question: "Metallmaslar elektronlarni biriktirib olish qobiliyatini kamayib borish tartibini aniqlang.", answer: "S, C, P, H" },
            { question: "…ns2 np^5 ushbu elektron formula qaysi guruh metallmaslari uchun  umumiy bo‘lgan tashqi energetik qobig‘ining elektron formulasi hisoblanadi.", answer: "galogenlar" },
            { question: "Quyidagi metallmaslarning oksidlari  (1-4) va ularning molekulyar massalarini  (a-d) bilan moslashtiring.", answer: "1-d, 2-a, 3-b, 4-c" },
            { question: "Diagramma ifodalangan to'g'ri oksidlanish-qaytarilish reaksiyasi aniqlang", answer: "Li ⟶ Li+ + e-Cl2 + 2e- ⟶ 2Cl-" },
            { question: "Ftordan yodga tomon galogenlarning atom radiusi ortib boradi. Bu ftorning valent elektronlari yadroga yaqin, yodda esa uzoq, ya'ni yadroga bo'shroq tortilib turadi. ", answer: "kimyoviy faolligi kamayib boradi" }
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
