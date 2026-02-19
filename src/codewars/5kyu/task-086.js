// Source: src/codewars.js
// Task: 86
// Inferred kyu: 5kyu

    //Задача 86 5kyu
    // Напишите алгоритм, который принимает массив и перемещает все нули в конец, сохраняя порядок остальных элементов.
    // moveZeros([false,1,0,1,2,0,1,3,"a"]) // возвращает [false,1,1,2,1,3,"a",0,0]

    function moveZeros(arr) {
        const arrZiro = []
        for (let findZiro of arr) {
            if (findZiro === 0) {
                arrZiro.push(findZiro)
            }
        }
        const filterArr = arr.filter(t => t !== 0)
        return filterArr.concat(arrZiro)
    }

    //2 вариант

    const moveZeros2 = (arr) => arr.filter(t => t !== 0).concat(arr.filter(t => t === 0))
