// Source: src/codewars.js
// Task: 128
// Inferred kyu: 7kyu

    //Задача 128
    // Твоя машина старая, она легко ломается. Амортизаторы уже не работают, и ты думаешь, что она выдержит примерно ещё 15 кочек, прежде чем окончательно сломается.
    //     К несчастью для тебя, твоя дорога очень ухабистая! Дана строка, показывающая либо ровную дорогу (_), либо кочки (n).
    //     Если ты сможешь добраться до дома, встретив 15 кочек или меньше, верни "Woohoo!", иначе верни "Car Dead".

    function bump(x) {
        const arrX = x.split('')
        let countHummock = 0
        for (let hummock of arrX) {
            if (hummock === 'n') {
                countHummock++
                console.log(countHummock)
            }
        }
        if (countHummock <= 15) {
            return "Woohoo!"
        } else {
            return "Car Dead"
        }

    }
