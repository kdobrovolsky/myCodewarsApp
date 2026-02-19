// Source: src/codewars.js
// Task: 47
// Inferred kyu: 7kyu

    //Задача 47
    // Нам нужно удалить все, что идет после символа # (якоря) в URL, включая сам символ #.
    // Примеры:
    //     "www.codewars.com#about" → "www.codewars.com"
    // "www.codewars.com?page=1" → "www.codewars.com?page=1" (остается без изменений, так как нет #)

    function removeUrlAnchor(url) {
        return url.split('#')[0]
    }
