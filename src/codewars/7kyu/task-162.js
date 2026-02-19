// Source: src/codewars.js
// Task: 162
// Inferred kyu: 7kyu

    //Задача 162
    // Дан массив, содержащий как числа, так и строковые представления целых чисел. Сложите все числа (нестроковые целые) и вычтите сумму целых чисел, представленных строками.
    //     Верните результат в виде числа.

    function divCon(x){
    let strNum = 0
        let nums = 0
        for(let num of x){
            if(typeof num === 'number'){
                nums += num
            }else {
                strNum += Number(num)
            }
        }
        return nums - strNum
    }
