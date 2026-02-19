// Source: src/codewars.js
// Task: 28
// Inferred kyu: 7kyu

    //Задача 28
    // Создайте функцию, которая принимает входную строку и возвращает строку, в которой все слова в верхнем регистре идут впереди, а все слова в нижнем регистре — в конце.
    //     Порядок слов в верхнем и нижнем регистре должен соответствовать порядку их появления во входной строке.
    //     Если слово начинается с цифры или специального символа, пропустите это слово и не включайте его в результат.
    //     Входная строка не будет пустой.
    //     Для входной строки: "hey You, Sort me Already!" функция должна вернуть: "You, Sort Already! hey me"

    function capitalsFirst(str) {
        const arrStr = str.split(' ');
        const upperCaseArray = []
        const lowerCaseArray = []

        for (let i = 0; i < arrStr.length; i++) {
            const word = arrStr[i]
            if (!word) continue;
            const firstChar = word[0]
            const isAlpha = firstChar.toUpperCase() !== firstChar.toLowerCase();

            if (!isAlpha) continue;
            firstChar === firstChar.toUpperCase() ? upperCaseArray.push(word) : lowerCaseArray.push(word);
        }

        if (upperCaseArray.length === 0) return lowerCaseArray.join(' ');
        if (lowerCaseArray.length === 0) return upperCaseArray.join(' ');

        return upperCaseArray.join(' ') + ' ' + lowerCaseArray.join(' ');
    }

    //Доп задачи

    // Найти и вернуть все слова, которые начинаются с заглавной буквы
    function findCapitalizedWords(str) {
        const words = str.split(' ');
        const arrFilter = words.filter(word => word &&
            word[0] === word[0].toUpperCase() &&
            word[0] !== word[0].toLowerCase())
        return arrFilter.join(' ')
    }
