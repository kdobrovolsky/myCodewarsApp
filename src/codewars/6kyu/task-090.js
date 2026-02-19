// Source: src/codewars.js
// Task: 90
// Inferred kyu: 6kyu

    //Задача 90
    // Панграмма - это предложение, которое содержит каждую букву алфавита хотя бы один раз.
    //     Например, предложение "The quick brown fox jumps over the lazy dog" является панграммой,
    //     потому что оно использует все буквы A-Z как минимум один раз (регистр не имеет значения).
    // Дана строка. Определите, является ли она панграммой. Верните True, если является, и False, если нет. Игнорируйте цифры и знаки препинания.
    //     Примеры:
    // "The quick brown fox jumps over the lazy dog" → True
    // "Hello world" → False (отсутствуют многие буквы алфавита)
    // "ABCDEFGHIJKLMNOPQRSTUVWXYZ" → True
    // "This is not a pangram" → False

    function isPangram(string) {
        const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split('')
        const stringArray = string.toLowerCase().split('')
        let res = 0
        for (let iterString of alph) {
            if (stringArray.includes(iterString)) {
                res++
            }
        }
        return res === 26
    }
