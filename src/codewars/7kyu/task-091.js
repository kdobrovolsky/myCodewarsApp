// Source: src/codewars.js
// Task: 91
// Inferred kyu: 7kyu

    //Задача 91
    // Дополни метод, который принимает массив целых чисел и возвращает один из следующих вариантов:
    // «yes, ascending» — если числа в массиве отсортированы в порядке возрастания
    // «yes, descending» — если числа в массиве отсортированы в порядке убывания
    // «no» — в противном случае
    // Порядок не обязательно должен быть строгим: отсортированный массив может содержать последовательные дубликаты, например,
    // [1, 1, 2, 3] считается отсортированным в порядке возрастания.
    // Гарантируется, что всегда будет существовать единственный верный ответ. Если точнее:
    // не будет массивов с менее чем 2 элементами
    // не будет массивов, в которых все элементы равны

    function isSortedAndHow(array) {
        const ascendingArray = [...array].sort((a, b) => a - b).join('')
        const descendingArray = [...array].sort((a, b) => b - a).join('')
        const original = array.join('')

        if (original === ascendingArray) {
            return 'yes, ascending'
        } else if (original === descendingArray) {
            return 'yes, descending'
        } else {
            return 'no'
        }
    }
