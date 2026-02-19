// Source: src/codewars.js
// Task: 134
// Inferred kyu: 7kyu

    //Задача 134
    // Мы хотим узнать индексы гласных букв в заданном слове. Например, в слове "super" две гласные буквы (вторая и четвертая буквы).
    // Таким образом, для строки "super" мы должны вернуть список [2, 4].
    //     Несколько примеров:
    //     "Mmmm" => []
    // "Super" => [2, 4]
    // "Apple" => [1, 5]
    // "YoMama" => [1, 2, 4, 6]
    // ПРИМЕЧАНИЯ
    // Гласными в данном контексте считаются: a, e, i, o, u, y (включая заглавные буквы).
    // Индексация ведётся от 1 до n (не с нуля!).

    function vowelIndices(word) {
        const vowels = ['a', 'e', 'i', 'o', 'u', "y"]
        const wordLowCase = word.toLowerCase()
        let result = []
        for (let i = 0; i < wordLowCase.length; i++) {
            if (vowels.includes(wordLowCase[i])) {
                result.push(i + 1)
            }
        }
        return result
    }
