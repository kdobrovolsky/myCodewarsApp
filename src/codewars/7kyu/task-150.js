// Source: src/codewars.js
// Task: 150
// Inferred kyu: 7kyu

    //Задача 150
    // Дана строка, состоящая из букв a, b и/или c. Поменяйте местами буквы a и b (замените a на b и наоборот). Все вхождения буквы c оставьте без изменений.
    //     Пример:
    // 'acb' --> 'bca'
    // 'aabacbaa' --> 'bbabcabb'

    function switcheroo(x) {
        const letters = x.split('')
        let result = []
        for (let letter of letters) {
            if (letter === 'a') {
                result.push('b')
            } else if (letter === 'b') {
                result.push('a')
            } else {
                result.push(letter)
            }
        }
        return result.join('')
    }
