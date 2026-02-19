// Source: src/codewars.js
// Task: 98
// Inferred kyu: 6kyu

    //Задача 98
    // Реализуйте функцию unique_in_order,
    // которая принимает в качестве аргумента последовательность и возвращает список элементов,
    // удаляя одинаковые значения, находящиеся рядом, и сохраняя исходный порядок элементов.

    var uniqueInOrder = function (iterable) {

        let results = []
        for (let i = 0; i < iterable.length; i++) {
            if (i === 0 || iterable[i] !== iterable[i - 1]) {
                results.push(iterable[i])
            }
        }
        return results
    }
