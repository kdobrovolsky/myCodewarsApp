// Source: src/codewars.js
// Task: 50
// Inferred kyu: 6kyu

    //Задача 50
    // Ты, вероятно, знаком с системой «лайков» на Facebook и других платформах. Люди могут «лайкать» блог-посты,
    //     фотографии или другие элементы. Мы хотим создать текст, который будет отображаться рядом с таким элементом.
    //     Реализуй функцию, которая принимает массив с именами людей, поставивших лайк.
    //     Она должна возвращать текст, отображаемый рядом с элементом, как показано в примерах:
    //     javascript
    //         []                                -->  "никто не поставил лайк"
    //         ["Peter"]                         -->  "Peter поставил лайк"
    //         ["Jacob", "Alex"]                 -->  "Jacob и Alex поставили лайк"
    //         ["Max", "John", "Mark"]           -->  "Max, John и Mark поставили лайк"
    //         ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob и ещё 2 человека поставили лайк"
    // Примечание: Для 4 и более имён число в «и ещё 2 человека» просто увеличивается.

    function likes(names) {
        if (names.length === 0) {
            return 'no one likes this';
        } else if (names.length === 1) {
            return `${names[0]} likes this`;
        } else if (names.length === 2) {
            return `${names[0]} and ${names[1]} like this`;
        } else if (names.length === 3) {
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        } else if (names.length >= 4) {
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
        }
    }
