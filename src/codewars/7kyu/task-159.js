// Source: src/codewars.js
// Task: 159
// Inferred kyu: 7kyu

    //Задача 159
    // Переведи текст нан русский
    // Задача: Написать функцию, которая возвращает True, если ТОЛЬКО ОДИН из булевых флагов равен True, в противном случае возвращает False.
    // Если булевых флагов нет, возвращает False.
    //
    //     Ввод | Ожидаемый вывод
    //     [] | False
    //     [True, False, False] | True
    //     [True, False, False, True] | False
    //     [False, False, False, False] | False

    function onlyOne(arr) {
    if( !arr || !Array.isArray(arr)) return false
    if( arr.length === 0 ) return false

    let result = 0
    for(let countTrue of arr){
        if(countTrue){
            result++
        }
    }
    return result === 1

    }
