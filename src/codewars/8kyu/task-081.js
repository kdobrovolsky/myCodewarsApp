// Source: src/codewars.js
// Task: 81
// Inferred kyu: 8kyu

    //Задача 81
    // Создайте метод, который принимает список и элемент, и возвращает true, если элемент принадлежит списку, в противном случае - false.
    function include(arr, item) {
        for (const items of arr) {
            if (items === item) {
                return true
            }
        }
        return false
    }
