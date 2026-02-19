// Source: src/codewars.js
// Task: 171
// Inferred kyu: 6kyu

    //Задача 171
    // Напишите метод (или функцию, в зависимости от языка), который преобразует строку в camelCase,
    // то есть все слова должны начинаться с заглавной буквы, а пробелы должны быть удалены.
    // Примеры (вход --> выход):
    // "hello case" --> "HelloCase"
    // "camel case word" --> "CamelCaseWord"
    // Не забудьте оценить это ката! Спасибо :)

    String.prototype.camelCase=function(){

        if(this.length === 0) return ''
        const arrStr = this.split(' ')
        const result = []
      for(let letter of arrStr){
        result.push(letter[0].toUpperCase() + letter.slice(1))
      }
      return result.join('')
    }
