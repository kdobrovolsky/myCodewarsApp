// Source: src/codewars.js
// Task: 54
// Inferred kyu: 6kyu

    //Задача 54
    // Основная идея — подсчитать все встречающиеся символы в строке. Если у вас есть строка, например, aba, то результат должен быть {'a': 2, 'b': 1}.
    // Что, если строка пустая? Тогда результат должен быть пустым объектом, {}.

    function count(string) {
        if (string.length === 0) return {}
        const arrString = string.split('');
        let objString = {}

        for (let str of arrString) {
            if (objString[str]) {
                objString[str]++;
            } else {
                objString[str] = 1;
            }
        }
        return objString;
    }

    function analyzeText(text) {
        const result = {
            totalLetters: 0,
            totalSpaces: 0,
            mostFrequentLetter: '',
            letterFrequency: {}
        };

        for (let char of text) {
            if (char === ' ') {
                result.totalLetters++
            } else {
                result.totalSpaces++;
            }
        }
        return result;
    }
