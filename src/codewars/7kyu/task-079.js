// Source: src/codewars.js
// Task: 79
// Inferred kyu: 7kyu

    //Задача 79
    // Завершите решение так, чтобы оно разбивало строку на пары из двух символов. Если строка содержит нечётное количество символов,
    //     то необходимо заменить отсутствующий второй символ в последней паре символом подчёркивания ('_').
    //     Примеры:
    // 'abc' => ['ab', 'c_']
    // 'abcdef' => ['ab', 'cd', 'ef']

    function solution(str) {
        const arrStr = str.split('')
        const resStr = []
        for (let i = 0; i < arrStr.length; i += 2) {
            if (arrStr[i + 1]) {
                resStr.push(arrStr[i] + arrStr[i + 1])
            } else {
                resStr.push(arrStr[i] + '_')
            }
        }
        return resStr
    }
