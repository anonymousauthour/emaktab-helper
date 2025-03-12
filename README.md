# eMaktab Solver - Твой главный помощник на контрольных! 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d241e3a9f1704f38d0a59d315056960d/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Maintenance](https://img.shields.io/maintenance/yes/2024)](https://github.com/anonymousauthour/emaktab-helper) <!-- Замените ссылкой на ваш репозиторий! -->

Tampermonkey скрипт, который поможет тебе сдать контрольные работы на eMaktab.uz! Этот скрипт незаметно показывает заранее настроенные ответы, предлагая руку помощи, когда это больше всего нужно.

## ✨ Возможности

*   **Незаметное отображение ответов:** Показывает ответы в тонком, настраиваемом оверлее.
*   **Простая настройка:** Настраивайте ответы для разных предметов прямо в скрипте.
*   **Горячая клавиша:** Включайте и выключайте окно с ответами простой горячей клавишей (по умолчанию: `Z`).
*   **Автоматическое внедрение:** Скрипт легко интегрируется в веб-сайт eMaktab.
*   **Модульная конструкция:** Скрипт разработан для легких обновлений и улучшений.
*   **Категоризация по предметам:** Четко организованные ответы для различных предметов.

## 🛠️ Установка

<!-- ВЫ БУДЕТЕ НАСТРАИВАТЬ ЭТОТ РАЗДЕЛ -->

Подробные инструкции по установке скрипта скоро появятся! Пожалуйста, зайдите позже. А пока вы можете попробовать следующее:

1.  Установите менеджер пользовательских скриптов, такой как [Tampermonkey](https://www.tampermonkey.net/) (рекомендуется).
2.  Скачайте файл из этого репозитория.
3.  Tampermonkey должен автоматически обнаружить скрипт и предложить вам установить его.
4.  Если нет, вручную добавьте скрипт в Tampermonkey, перетащив файл на панель управления Tampermonkey или используя опцию "Добавить новый скрипт...".
5.  Убедитесь, что скрипт включен на панели управления Tampermonkey.
6.  Перейдите на [eMaktab.uz](https://emaktab.uz/) или [smarty.emaktab.uz](https://smarty.emaktab.uz/) и начните свою контрольную работу.
7.  Нажмите клавишу `Z`, чтобы включить или выключить окно с ответами.
8.  Или скопируйте код предоставленный ниже и создайте новый скрипт в Tampermonkey:
```
// ==UserScript==
// @name         eMaktab Solver
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Best solver for the control works on eMaktab.uz!
// @author       Anonymous Author
// @match        https://emaktab.uz/*
// @match        https://smarty.emaktab.uz/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=emaktab.uz
// @connect      raw.githubusercontent.com
// @connect      anonymousauthour.github.io
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    const REMOTE_SCRIPT_URL = 'https://raw.githubusercontent.com/anonymousauthour/emaktab-helper/main/emaktab-helper.js'; // Use the direct raw file URL

    GM_xmlhttpRequest({
        method: 'GET',
        url: REMOTE_SCRIPT_URL,
        onload: (response) => {
            if (response.status >= 200 && response.status < 300) {
                const script = document.createElement('script');
                script.textContent = response.responseText;
                document.head.appendChild(script);
                document.head.removeChild(script);
            }
        },
    });
})();
```



## ⌨️ Использование

*   Перейдите на [eMaktab.uz](https://emaktab.uz/) или [smarty.emaktab.uz](https://smarty.emaktab.uz/) во время контрольной работы.
*   Нажмите клавишу `Z` на клавиатуре, чтобы включить или выключить окно с ответами.
*   Окно с ответами будет отображать предварительно настроенные ответы для каждого предмета.

## 📜 Лицензия

Этот проект лицензирован в соответствии с [MIT License](LICENSE).

## ⚠️ Отказ от ответственности

Этот скрипт предназначен только для образовательных целей. Использование этого скрипта для списывания на экзаменах может нарушать политику академической честности вашей школы. Используйте на свой страх и риск.

---

Сделано с ❤️ [Анонимным автором] 
