// Source: src/codewars.js
// Task: 167
// Inferred kyu: 5kyu

    //Задача 167
    // Переместите первую букву каждого слова в конец, затем добавьте "ay" в конец слова. Знаки препинания оставляйте без изменений.
    //     Примеры:
    // pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    // pigIt('Hello world !'); // elloHay orldway !

    function pigIt(str){
        const strArr = str.split(' ');
        let result = []
        for(let letter of strArr){

            if(/[!?.,]/.test(letter)){
                result.push(letter)
                continue
            }

            let firstLetter = letter[0];
            let restOfWord = letter.slice(1);
            let pigLatin = restOfWord + firstLetter + "ay";
        result.push(pigLatin);
        }
        return result.join(' ')
    }
