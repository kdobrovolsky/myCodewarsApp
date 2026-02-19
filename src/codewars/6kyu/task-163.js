// Source: src/codewars.js
// Task: 163
// Inferred kyu: 6kyu

    //Задача 163
    // Завершите метод, который возвращает число, наиболее часто встречающееся в заданном входном массиве.
    //     Если есть несколько чисел с одинаковой максимальной частотой, верните наибольшее из них.
    //     Примечание: пустые массивы даваться не будут.
    //     Примеры:
    // [12, 10, 8, 12, 7, 6, 4, 10, 12] --> 12
    //     [12, 10, 8, 12, 7, 6, 4, 10, 12, 10] --> 12
    //     [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10] --> 3 (6ky)

    function highestRank(arr){
        let counts  = {}

        arr.forEach(i => {
            counts[i] = (counts[i] || 0) +1
        })
        let maxValue = Math.max(...Object.values(counts))

        let candidates = Object.keys(counts).filter(key => counts[key] === maxValue).map(t=> Number(t))

        return candidates.sort((a, b) => b - a)[0]
    }
