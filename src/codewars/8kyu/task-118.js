// Source: src/codewars.js
// Task: 118
// Inferred kyu: 8kyu

    //Задача 118
    // Задача: Напишите функцию, которая проверяет, является ли строка палиндромом

    const funcPalindrome = (str) => {
        const cleanedStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
        const reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    };
