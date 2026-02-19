// Source: src/codewars.js
// Task: 165
// Inferred kyu: 6kyu

    //Задача 165
    // Благодарности:
    //     Я благодарю yvonne-liu за идею и за примеры тестов :)
    // Описание:
    //     Зашифруй это!
    //     Ты хочешь создавать секретные сообщения, которые могут быть расшифрованы с помощью ката "Decipher this!". Вот условия:
    //     Твоё сообщение — это строка, содержащая слова, разделённые пробелами.
    //     Тебе нужно зашифровать каждое слово в сообщении, используя следующие правила:
    //     Первая буква должна быть преобразована в её ASCII-код.
    //     Вторая буква должна быть поменяна местами с последней буквой.
    //     Для простоты: во входных данных нет специальных символов.
    //     Примеры:
    // text
    // encryptThis("Hello") === "72olle"
    // encryptThis("good") === "103doo"
    // encryptThis("hello world") === "104olle 119drlo"

    let encryptThis = function(text) {
        if (!text) return '';

        return text.split(' ')
            .map(word => {
                if (word.length === 0) return '';
                let result = word.charCodeAt(0);
                if (word.length > 1) {
                    const secondChar = word[1];
                    const lastChar = word[word.length - 1];
                    if (word.length === 2) {
                        result += lastChar;
                    } else {
                        const middle = word.slice(2, word.length - 1);
                        result += lastChar + middle + secondChar;
                    }
                }

                return result.toString();
            })
            .join(' ');
    }
