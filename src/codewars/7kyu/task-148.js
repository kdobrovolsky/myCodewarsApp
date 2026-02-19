// Source: src/codewars.js
// Task: 148
// Inferred kyu: 7kyu

    //Задача 148
    // История
    // Ваш интернет-магазин раздаёт купоны по особым случаям. Некоторые клиенты пытаются обмануть систему, вводя недействительные коды или используя просроченные купоны.
    //     Задача
    // Ваша миссия:
    //     Написать функцию с именем checkCoupon, которая проверяет, что код купона действителен и не истёк.
    //     Купон недействителен на следующий день после даты истечения срока. Все даты передаются в виде строк в формате: "MONTH DATE, YEAR" (например, "Июль 9, 2015").

    function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
        if (enteredCode !== correctCode) return false
        const curDate = new Date(currentDate)
        const expDate = new Date(expirationDate)
        return curDate < expDate

    }
