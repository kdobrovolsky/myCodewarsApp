// Source: src/codewars.js
// Task: 128
// Inferred kyu: 7kyu

    //Задача 128
    // Данную строку. Заглавные буквы, которые занимают чётные индексы и нечётные индексы, обрабатываются отдельно, и возвращается результат, как показано ниже. Индекс 0 считается чётным.
    //     Например, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. Смотрите тестовые примеры для дополнительных примеров.
    //     Входные данные будут строкой в нижнем регистре без пробелов.

    function capitalize1(s) {
        const arrS = s.split('');
        let result1 = []
        let result2 = []
        for (let i = 0; i < arrS.length; i++) {
            if (i % 2 === 0) {
                result1.push(arrS[i].toUpperCase())
            } else {
                result1.push(arrS[i].toLowerCase())
            }
        }
        for (let i = 0; i < arrS.length; i++) {
            if (i % 2 === 0) {
                result2.push(arrS[i].toLowerCase())
            } else {
                result2.push(arrS[i].toUpperCase())
            }
        }
        return [result1.join(''), result2.join('')];
    }


    function capitalize(s) {
        const odd = s.split('').map((t, i) => i % 2 === 0 ? t.toUpperCase() : t.toLowerCase()).join('');
        const even = s.split('').map((t, i) => i % 2 === 0 ? t.toLowerCase() : t.toUpperCase()).join('');
        return [odd, even]
    }
