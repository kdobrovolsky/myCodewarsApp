
// //ЗАДАЧИ НА ТЕМУ ДЖЕНЕРИКОВЫЕ ФУНКИИ
// const getFirstElement = <T>(array:T[]):T => {
//     return array[0]
// }
//
// // Пример 1: Массив чисел
// const numbers = [1, 2, 3, 4, 5]
// console.log(getFirstElement(numbers)) // 1
//
// // Пример 2: Массив строк
// const words = ['hello', 'world', 'typescript']
// console.log(getFirstElement(words)) // 'hello'
//

//2

// const filterArray = <T>(values: T[], predicate:(arg:T) => boolean ) => {
//     return values.filter(predicate);
// }
//
// // Пример 1: Фильтрация чисел
// const numbers = [1, 2, 3, 4, 5]
// const isEven = (num: number) => num % 2 === 0
//
// console.log(filterArray(numbers, isEven)) // [2, 4]
//
// // Пример 2: Фильтрация строк
// const words = ['hello', 'world', 'typescript']
// // @ts-ignore
// const startsWithT = (word: string) => word.startsWith('w')
//
// console.log(filterArray(words, startsWithT)) // ["typescript"]

// const mapArray = <T,V>(values: T[], predicate:(arg:T) => V) => {
//     return values.map(predicate)
// }
//
// // Пример 1: Преобразование чисел в строки
// const numbers = [1, 2, 3, 4]
// const transformNumberToString = (num: number) => `Number: ${num}`
//
// console.log(mapArray(numbers, transformNumberToString)) // ["Number: 1", "Number: 2", "Number: 3", "Number: 4"]
//
// // Пример 2: Преобразование строк в их длины
// const words = ['hello', 'world', 'typescript']
// const getLength = (word: string) => word.length
//
// console.log(mapArray(words, getLength)) // [5, 5, 10]
//
// // Пример 3: Преобразование объектов в строки
// type Person = { name: string; age: number }
// const people: Person[] = [
//     { name: 'Agnes', age: 25 },
//     { name: 'Robert', age: 30 },
// ]
// const toDescription = (person: Person) => `${person.name} is ${person.age} years old`
//
// console.log(mapArray(people, toDescription)) // ["Agnes is 25 years old", "Robert is 30 years old"]


//3
// Необходимо создать дженериковую функцию, принимающую массив любого типа и значение того же типа.
// Функция должна вернуть массив без изменений, если значение уже есть в массиве, а если нет - новый массив с добавленным значением.
//     Требования:
// функция должна быть дженериковой и работать с массивами любого типа;
// для проверки наличия элемента в массиве используйте метод includes;
// типы массива и элемента должны быть связаны через дженерики;
// функция должна быть чистой (не должна изменять оригинальный массив):

// const updateArray = <T>(array: T[], value: T): T[] => {
//     if (array.includes(value)) {
//         return array;
//     } else {
//         return [...array, value];
//     }
// }
//
// // Строки
// const stringArray = ["apple", "banana", "cherry"];
// console.log(updateArray(stringArray, "banana")); // ['apple', 'banana', 'cherry']
// console.log(updateArray(stringArray, "strawberry")); // ['apple', 'banana', 'cherry', 'strawberry']
//
// // Числа
// const numberArray = [1, 2, 3];
// console.log(updateArray(numberArray, 2)); // [1, 2, 3]
// console.log(updateArray(numberArray, 4)); // [1, 2, 3, 4]