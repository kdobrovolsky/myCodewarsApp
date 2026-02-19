// Source: src/codewars.js
// Task: 70
// Inferred kyu: 7kyu

    //Задача 70
    // Напишите функцию, которая проверяет, является ли строка палиндромом (читается одинаково слева направо и справа налево).
    const palindromFunc = (text) => {
        const cleanedStr = text.toLowerCase().replace(/[^a-zа-яё0-9]/g, '')
        return cleanedStr === cleanedStr.split('').reverse().join('');
    }
