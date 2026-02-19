// Source: src/codewars.js
// Task: 99
// Inferred kyu: 8kyu

    //Задача 99
    // Я дам тебе целое число. Верни мне фигуру, длина и ширина которой соответствуют этому числу. Число будет целым в диапазоне от 1 до 50.
    function generateShape(integer) {
        let array = []
        for (let i = 1; i <= integer; i++) {
            let plus = "+".repeat(integer)
            array.push(plus)
        }
        return array.join('\n')
    }
