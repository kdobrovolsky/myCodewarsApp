// Source: src/codewars.js
// Task: 52
// Inferred kyu: 6kyu

    //Задача 52
    // Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку этих чисел в формате номера телефона.
    //     Пример
    // text
    // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => возвращает "(123) 456-7890"
    // Полученный формат должен быть правильным для выполнения этой задачи.
    //     Не забудьте пробел после закрывающей скобки!

    function createPhoneNumber(numbers) {
        return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
    }

    function createPhoneNumber2(numbers) {
        return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
    }
