// Source: src/codewars.js
// Task: 172
// Inferred kyu: 7kyu

    //Задача 172
    // Даны два массива строк. Верните количество раз, которое каждая строка из второго массива встречается в первом массиве.
    //     Пример
    // array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
    // array2 = ['abc', 'cde', 'uap']
    // Сколько раз элементы из array2 встречаются в array1?
    //     'abc' встречается дважды в первом массиве (2)
    // 'cde' встречается один раз (1)
    // 'uap' не встречается в первом массиве (0)
    // Таким образом, solve(array1, array2) = [2, 1, 0]

    function solve(a,b){
     let result = []

        for(let word of b){
            let count = 0
            for(let word2 of a){
            if(word === word2){
                count++
            }
            }
            result.push(count)
        }
        return result
    }

    const array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
    const array2 = ['abc', 'cde', 'uap']
