// Source: src/codewars.js
// Task: 109
// Inferred kyu: 8kyu

    //Задача 109
    // Описание:
    //     Удалите восклицательный знак с конца строки. Для этой задачи начального уровня можно предполагать, что входные данные всегда являются строкой, и нет необходимости это проверять.
    //     Примеры:
    // text
    // "Hi!"     ---> "Hi"
    // "Hi!!!"   ---> "Hi!!"
    // "!Hi"     ---> "!Hi"
    // "!Hi!"    ---> "!Hi"
    // "Hi! Hi!" ---> "Hi! Hi"
    // "Hi"      ---> "Hi"

    function remove2(string) {
        const arrStr = string.split('')
        if (arrStr.at(-1) === '!') {
            arrStr.pop()
        }
        return arrStr
    }
