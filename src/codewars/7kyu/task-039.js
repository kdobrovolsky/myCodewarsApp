// Source: src/codewars.js
// Task: 39
// Inferred kyu: 7kyu

    //Задача 39
    // Создайте функцию, которая принимает массив имен и возвращает массив, в котором каждое имя записано с заглавной первой буквы,
    // а остальные буквы — строчными.
    //     Примеры:
    // ["jo", "nelson", "jurie"] --> ["Jo", "Nelson", "Jurie"]
    //     ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]

    function capMe(names) {
        return names.map((name) => {
            return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        })
    }
