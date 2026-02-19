// Source: src/codewars.js
// Task: 45
// Inferred kyu: 6kyu

    // Задача 45
    // Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает эту же строку, но со словами из пяти или более букв,
    //     записанными в обратном порядке (точно так же, как название этого Ката).
    // Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут присутствовать только тогда, когда в строке более одного слова.
    //     Примеры:
    // text
    // "Hey fellow warriors"  --> "Hey wollef sroirraw"
    // "This is a test"        --> "This is a test"
    // "This is another test" --> "This is rehtona test"


    function spinWords(string) {
        const arrString = string.split(' ');

        for (let i = 0; i < arrString.length; i++) {
            if (arrString[i].length >= 5) {
                arrString[i] = arrString[i].split('').reverse().join('');
            }
        }

        return arrString.join(' ');
    }
