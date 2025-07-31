export function setupCounter(element) {
    // Задача 1.
    // Вернуть количество гласных в заданной строке.Мы будем считать гласными буквы a, e, i, o, u (но не y).
    // Строка может состоять только из букв в нижнем регистре и/или пробелов.

    function getCount(str) {
        const vowels = str.match(/[aeiou]/gi)
        return vowels ? vowels.length : 0
    }
    //Разбор: сначала мы регулярным выраженим ищем один символ из перечисленных, далее с помощью match проверяем, если есть совпадение,
    // то возвращаем найденный массив гластных. Если массив существует => возвращаем его длину, если null => 0

    console.log(getCount('Helloooooo world, my name is Kirill'))

}
