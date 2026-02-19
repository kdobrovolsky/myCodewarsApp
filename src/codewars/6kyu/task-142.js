// Source: src/codewars.js
// Task: 142
// Inferred kyu: 6kyu

    //Задача 142
    // Измените функцию kebabize, чтобы она преобразовывала строку в верблюжьем регистре (camel case) в кебаб-регистр (kebab case).
    // "camelsHaveThreeHumps" --> "camels-have-three-humps"
    // "camelsHave3Humps" --> "camels-have-humps"
    // "CAMEL" --> "c-a-m-e-l"
    // Примечания:
    //     возвращаемая строка должна содержать только строчные буквы

    function kebabize(str) {
        let result = [];
        for (let i = 0; i < str.length; i++) {
            let letter = str[i];
            if (!isNaN(letter) && letter !== ' ') {
                continue;
            }
            if (letter === letter.toUpperCase() && letter !== letter.toLowerCase()) {
                if (i > 0 && result.length > 0) {
                    result.push('-');
                }
                result.push(letter.toLowerCase());
            } else if (letter === letter.toLowerCase() && letter !== letter.toUpperCase()) {
                result.push(letter);
            }
        }

        return result.join('');
    }
