// Source: src/codewars.js
// Task: 71
// Inferred kyu: 6kyu

    //Задача 71
    // Напиши число в развернутой форме
    // Вам будет дано число, и нужно вернуть его в виде строки в развернутой форме. Например:
    // 12 --> "10 + 2"
    // 45 --> "40 + 5"
    // 70304 --> "70000 + 300 + 4"
    // ПРИМЕЧАНИЕ: Все числа будут целыми и больше 0.

    function expandedForm(num) {
        if (num <= 10) return num
        const arrNum = num.toString().split('')
        const result = []
        for (let i = 0; i < arrNum.length; i++) {
            if (arrNum[i] !== '0') {
                const value = arrNum[i] + '0'.repeat(arrNum.length - i - 1)
                result.push(value)
            }
        }
        return result.join(' + ')
    }
