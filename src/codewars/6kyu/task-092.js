// Source: src/codewars.js
// Task: 92
// Inferred kyu: 6kyu

    //Задача92
    // Ваша задача — создать таблицу умножения N×N, где размер передается в параметре.
    //     Например, когда заданный размер равен 3:
    // text
    // 1 2 3
    // 2 4 6
    // 3 6 9
    // Для приведенного примера возвращаемое значение должно быть:
    //     javascript
    //         [[1,2,3],[2,4,6],[3,6,9]]
    // Пояснение:
    //     Нужно написать функцию, которая принимает число N и возвращает двумерный массив (матрицу) N×N, где элемент в i-й строке и j-м столбце равен (i+1) * (j+1).

    function multiplicationTable(size) {
        let table = []
        for (let i = 0; i < size; i++) {
            let row = []
            for (let j = 0; j < size; j++) {
                let resultJ = (i + 1) * (j + 1)
                row.push(resultJ)

            }
            table.push(row)
        }
        return table
    }
