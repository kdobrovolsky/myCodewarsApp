// Source: src/codewars.js
// Task: 48
// Inferred kyu: 8kyu

    //Задача 48
    // Напишите функцию, которая принимает список строк в качестве аргумента и возвращает отфильтрованный список, содержащий те же элементы, но с удаленными "гусями".
    // "Гуси" — это любые строки из следующего массива, который предопределен в вашем решении:
    //     javascript
    //         ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    // Например, если этот массив был передан как аргумент:
    //     javascript
    //         ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
    // Ваша функция должна вернуть следующий массив:
    //     javascript
    //         ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
    // Элементы в возвращаемом массиве должны быть в том же порядке, что и в исходном массиве, переданном в вашу функцию, но с удаленными "гусями".
    //     Обратите внимание, что все строки будут в том же регистре, что и предоставленные, и некоторые элементы могут повторяться.

    function gooseFilter(birds) {
        let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
        return birds.filter(bird => !geese.includes(bird))

    }
