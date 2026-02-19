// Source: src/codewars.js
// Task: 136
// Inferred kyu: 7kyu

    //Задача 136
    // В рамках этой задачи (Kata) вам необходимо создать функцию, которая при получении триплета (тройки чисел)
    // возвращает индекс числового элемента, который находится между двумя другими элементами.
    //     На вход функции подается массив из трех различных чисел (в Haskell — кортеж).
    // Например:
    // gimme([2, 3, 1]) => 0
    // Число 2 находится между 1 и 3, а индекс 2 во входном массиве равен 0.
    // Другой пример (для наглядности):
    // gimme([5, 10, 14]) => 1
    // Число 10 находится между 5 и 14, а индекс 10 во входном массиве равен 1.

    function gimme(triplet) {
        let max = Math.max(...triplet);
        let min = Math.min(...triplet);
        let resultAverage = 0
        for (let average of triplet) {
            if (average < max && average > min) {
                resultAverage = average;
            }
        }
        return triplet.indexOf(resultAverage);
    }
