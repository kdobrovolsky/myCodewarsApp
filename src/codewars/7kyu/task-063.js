// Source: src/codewars.js
// Task: 63
// Inferred kyu: 7kyu

    //Задача 63
    // Ваша задача — написать функцию factorial (факториал)
    function factorial(n) {
        let factor = 1;
        for (let i = 1; i <= n; i++) {
            factor = factor *= i
        }
        return factor;
    }
