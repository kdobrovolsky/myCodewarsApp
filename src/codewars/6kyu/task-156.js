// Source: src/codewars.js
// Task: 156
// Inferred kyu: 6kyu

    //Задача 156
    // Обмен массивами и разворот
    // Настало время для обмена массивами! Цель проста: обменять элементы двух массивов на месте (in-place) так,
    //     чтобы их новое содержимое также было развёрнуто. Массивы могут быть разной длины, и в этом случае вам нужно будет увеличить более короткий массив на месте.
    //     до
    // my_array = ['a', 'b', 'c']
    // other_array = [1, 2, 3]
    // exchange_arrays(my_array, other_array)
    // после
    // my_array == [3, 2, 1]
    // other_array == ['c', 'b', 'a']

    function exchangeWith(a, b) {
        a.reverse()
        b.reverse()
        const temp = [...a]
        a.length = 0
        a.push(...b)
        b.length = 0
        b.push(...temp)

    }
