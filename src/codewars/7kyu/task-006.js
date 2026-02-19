// Source: src/codewars.js
// Task: 6
// Inferred kyu: 7kyu

    // Задача 6
    // Доработайте функцию/метод так, чтобы она возвращала URL-адрес, удаляя всё, что находится после символа # (якоря).
    //     Примеры:
    // "www.codewars.com#about" → "www.codewars.com"
    // "www.codewars.com?page=1" → "www.codewars.com?page=1"

    function removeUrlAnchor(url) {
        const anchorIndex = url.indexOf('#');
        return anchorIndex === -1 ? url : url.substring(0, anchorIndex);
    }
