// Source: src/codewars.js
// Task: 127
// Inferred kyu: 8kyu

    //Задача 127
    // Напишите функцию, которая преобразует имя в инициалы. В этой задаче строго используются два слова, разделенные одним пробелом.
    //     На выходе должны быть две заглавные буквы, разделенные точкой.
    //     Результат должен выглядеть так:
    //     Sam Harris => S.H
    // patrick feeney => P.F

    function abbrevName(name) {
        let arrName = name.split(' ')
        const result = []
        for (let names of arrName) {
            result.push(`${names[0].toUpperCase()}`)
        }
        return result.join('.');
    }
