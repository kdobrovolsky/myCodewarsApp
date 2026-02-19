// Source: src/codewars.js
// Task: 16
// Inferred kyu: 7kyu

    // Задача 16
    // Aнаграмма — это результат перестановки букв слова для получения нового слова (см. Википедию).
    //     Примечание: анаграммы нечувствительны к регистру.
    //     Допиши функцию так, чтобы она возвращала true, если два переданных аргумента являются анаграммами друг друга, и false — в противном случае.
    // Variant 1
    const isAnagram = (test, original) => {
        if (test.length !== original.length) return false;
        const sortedTest = test.toLowerCase().split('').sort().join('');
        const sortedOriginal = original.toLowerCase().split('').sort().join('')
        return sortedTest === sortedOriginal;
    };
    // Variant 2
    const isAnagram2 = (test, original) => {
        return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
    }
