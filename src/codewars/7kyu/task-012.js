// Source: src/codewars.js
// Task: 12
// Inferred kyu: 7kyu

    // Задача 12
    // Вам необходимо создать функцию с именем reverseIt.
    //     Напишите функцию так, чтобы при передаче строки или числа в качестве данных она возвращала данные в обратном порядке. Если данные имеют другой тип, верните их как есть.
    //     Примеры входных данных и последующих выходных данных:


    function reverseIt(data) {
        if (typeof data !== 'string' && typeof data !== 'number') {
            return data;
        }
        const reversed = data.toString().split('').reverse().join('');
        return typeof data === 'number' ? Number(reversed) : reversed;
    }
