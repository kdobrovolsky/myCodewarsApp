// Source: src/codewars.js
// Task: 53
// Inferred kyu: 6kyu

    //Задача 53
    // Вам будет дан массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.
    //     Примеры
    // text
    //     [7, 1]  =>  [1, 7]
    //     [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
    //     [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
    // Пояснение:
    //     Нечетные числа сортируются по возрастанию
    // Четные числа остаются на тех же позициях, где они были изначально
    // Порядок четных чисел не меняется
    // Меняются только позиции нечетных чисел, которые теперь идут в отсортированном порядке


    function sortArray(array) {
        const oddNum = array.filter(item => item % 2 === 1).sort((a, b) => a - b)
        let index = 0
        return array.map(t => {
            if (t % 2 !== 0) {
                return oddNum[index++];
            }
            return t
        })
    }

    //Доп задача
    // Замени все простые числа в массиве на букву 'P', а составные оставь как есть.
    //     Пример:
    // javascript
    //     [1, 2, 3, 4, 5, 6] → [1, 'P', 'P', 4, 'P', 6]
    function replacePrimes(array) {
        function isPrime(num) {
            if (num < 2) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }


        return array.map(item => {
            if (isPrime(item)) {
                return 'P';
            }
            return item;
        });
    }
