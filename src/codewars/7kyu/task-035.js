// Source: src/codewars.js
// Task: 35
// Inferred kyu: 7kyu

    //Задача 35
    //   Вам будет дан массив и предельное значение. Вы должны проверить,
    //       что все значения в массиве меньше или равны предельному значению.
    //       Если это так, верните true. В противном случае верните false.
    //       Можно предположить, что все значения в массиве являются числами.

    function smallEnough(a, limit) {
        const numA = a.sort((a, b) => b - a)
        console.log(numA[0])
        if (numA[0] <= limit) {
            return true
        } else {
            return false
        }
    }

    function smallEnough2(a, limit) {
        return a.every(value => value <= limit)
    }
