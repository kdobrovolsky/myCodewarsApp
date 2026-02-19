// Source: src/codewars.js
// Task: 113
// Inferred kyu: 6kyu

    //Задача 113
    // Шаг 1: Создайте функцию с названием encode(), чтобы заменить все строчные гласные в заданной строке числами в соответствии со следующим шаблоном:
    //     a → 1
    // e → 2
    // i → 3
    // o → 4
    // u → 5
    // Например, encode("hello") вернет "h2ll4". В этом ката не нужно беспокоиться о заглавных гласных.
    //     Шаг 2: Теперь создайте функцию с названием decode(), чтобы преобразовать числа обратно в гласные в соответствии с тем же шаблоном, показанным выше.
    //     Например, decode("h3 th2r2") вернет "hi there".
    //     Для простоты можно предположить, что любые числа, передаваемые в функцию, будут соответствовать гласным.


    function encode(string) {
        const arrStr = string.split('')
        const result = []
        for (let str of arrStr) {
            switch (str) {
                case 'a':
                    result.push('1')
                    break;
                case 'e':
                    result.push('2')
                    break;
                case 'i':
                    result.push('3')
                    break;
                case 'o':
                    result.push('4')
                    break;
                case 'u':
                    result.push('5')
                    break;
                default:
                    result.push(str)
            }

        }
        return result.join('')
    }


    function encod2(string) {
        const table = ['a', 'e', 'i', 'o', 'u']
        return string.split('').map(s => table.indexOf(s) + 1 || s).join('')
    }


    function decode(string) {
        const arrStr = string.split('')
        const result = []
        for (let str of arrStr) {
            switch (str) {
                case '1':
                    result.push('a')
                    break;
                case '2':
                    result.push('e')
                    break;
                case '3':
                    result.push('i')
                    break;
                case '4':
                    result.push('o')
                    break;
                case '5':
                    result.push('u')
                    break;
                default:
                    result.push(str)
            }

        }
        return result.join('')
    }
