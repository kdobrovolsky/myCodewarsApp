// Source: src/codewars.js
// Task: 15
// Inferred kyu: 7kyu

    // Задача 15
    // В этом небольшом задании вам дано строка с числами, разделёнными пробелами, и нужно вернуть наибольшее и наименьшее число.
    //     Примечания
    // Все числа — допустимые значения типа Int32, проверять их не нужно.
    //     Входная строка всегда содержит хотя бы одно число.
    //     Строка-результат должна содержать два числа, разделённые одним пробелом, причём сначала идёт наибольшее число, затем — наименьшее.

    function highAndLow(numbers) {
        if (!numbers) return
        const arrNum = numbers.split(' ').map(Number);
        const result = arrNum.reduce(
            (acc, num) => ({
                min: Math.min(acc.min, num),
                max: Math.max(acc.max, num)
            }),
            {min: arrNum[0], max: arrNum[0]}
        );
        return `${result.max} ${result.min}`;
    }
