// Source: src/codewars.js
// Task: 144
// Inferred kyu: 7kyu

    //Задача 144
    // Ты устраиваешь барбекю, и после него у тебя остался мусор, который нужно рассортировать.
    //     Есть 3 коробки для переработки
    //     Красная: Пластик
    // Зеленая: Стекло
    // Синяя: Картон
    // Нужно отсортировать мусор по типу материала и вернуть количество предметов в каждой коробке в виде массива (или кортежа в Python):
    // [пластик, стекло, картон]
    // Тип материала определяется по знаку значения предмета:
    //     Пластик: значение > 0
    // Стекло: значение < 0
    // Картон: значение = 0
    // Пример
    // text
    // мусор = [5, -9, 0, 6, -84, -95, 15]
    // Пластик = 3, Стекло = 3, Картон = 1
    // Вывод: [3, 3, 1]

    function recycleMe(recycle) {
        let result = [0, 0, 0]
        for (let num of recycle) {
            if (num > 0) {
                result[0]++
            } else if (num < 0) {
                result[1]++
            } else {
                result[2]++
            }
        }
        return result
    }

    function recycleMe2(recycle) {
        let glass = recycle.filter(x => x < 0).length
        let plastic = recycle.filter(x => x > 0).length
        let card = recycle.filter(x => x === 0).length
        return [plastic, glass, card]
    }
