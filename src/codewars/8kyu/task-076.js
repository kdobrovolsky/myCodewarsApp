// Source: src/codewars.js
// Task: 76
// Inferred kyu: 8kyu

    // Задача 76
    // Создайте функцию, которая отвечает на вопрос «Играете ли вы на банджо?».
    // Если ваше имя начинается с буквы «R» или строчной «r», то вы играете на банджо!
    //     Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
    //     name + " plays banjo"
    // name + " does not play banjo"
    // Указанные имена всегда являются допустимыми строками.

    function areYouPlayingBanjo(name) {
        const nameLower = name.toLowerCase().split('');
        return nameLower[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
    }
