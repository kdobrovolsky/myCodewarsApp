// Source: src/codewars.js
// Task: 103
// Inferred kyu: 8kyu

    //Задача 103
    // Числа, заканчивающиеся нулями — это скучно.
    //     В твоём мире они могут быть интересными, но не здесь.
    //     Избавься от них. Только от конечных нулей.
    //     Примеры:
    // text
    // 1450   -> 145
    // 960000 -> 96
    // 1050   -> 105
    // -1050  -> -105
    // 0      -> 0
    // Примечание: Ноль должен оставаться как есть.

    function noBoringZeros(n) {
        const arrN = n.toString().split('')
        if (arrN.length < 1) return
        for (let i = 0; i < arrN.length; i++) {
            if (arrN[arrN.length - 1] === '0') {
                arrN.pop()
            } else {
                break
            }
        }
        return Number(arrN.join(''))
    }
