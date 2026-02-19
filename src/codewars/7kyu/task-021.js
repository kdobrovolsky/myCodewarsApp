// Source: src/codewars.js
// Task: 21
// Inferred kyu: 7kyu

    //задача 21
    // Вам будет дана непустая строка. Ваша задача — вернуть средний символ (или символы) этой строки.
    //     Если длина строки нечётная, верните один средний символ.
    //     Если длина строки чётная, верните два средних символа.
    //     Примеры:
    // "test" --> "es"
    // "testing" --> "t"
    // "middle" --> "dd"
    // "A" --> "A"

    function getMiddle(s) {
        let middleIndex = Math.floor(s.length / 2)
        if (s.length % 2 === 0) {
            // Если четно, возвращаем два символа: тот, что ДО middleIndex, и тот, что НА middleIndex
            return s[middleIndex - 1] + s[middleIndex];
        } else {
            // Если нечетно, возвращаем один символ ПО индексу middleIndex
            return s[middleIndex];
        }
    }
