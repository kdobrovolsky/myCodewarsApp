// Source: src/codewars.js
// Task: 68
// Inferred kyu: 8kyu

    //Задача 68
    // Замените все гласные на восклицательные знаки в предложении. Гласные: aeiouAEIOU.
    //     Примеры:
    // "Hi!" --> "H!!"
    // "!Hi! Hi!" --> "!H!! H!!"
    // "aeiou" --> "!!!!!"
    // "ABCDE" --> "!BCD!"

    function replace(s) {
        let result = ''
        const vowels = 'aeiouAEIOU'
        for (let char of s) {
            if (vowels.includes(char)) {
                result += '!'
            } else {
                result += char
            }

        }
        return result
    }
