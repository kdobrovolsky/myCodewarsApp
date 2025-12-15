export function setupCounter(element) {
    // Задача 1.
    // Вернуть количество гласных в заданной строке.Мы будем считать гласными буквы a, e, i, o, u (но не y).
    // Строка может состоять только из букв в нижнем регистре и/или пробелов.

    function getCount(str) {
        const vowels = str.match(/[aeiou]/gi)
        return vowels ? vowels.length : 0
    }

    //Разбор: сначала мы регулярным выраженим ищем один символ из перечисленных, далее с помощью match проверяем, если есть совпадение,
    // то возвращаем найденный массив гластных. Если массив существует => возвращаем его длину, если null => 0

    // Задача 2.
    // Доработайте функцию так, чтобы она разбивала верблюжий регистр (camelCase), вставляя пробел между словами.

    function solution(string) {
        return string.replace(/([A-Z])/g, ' $1')
    }

    // Разбор: с помощью регулярного выражение ищем заглавные буквы, далее с помощью $1 ставим проблем и для замены подстроки в строке используется метод replace

    // Задача 3.
    // Постройте функцию, которая возвращает массив целых чисел от n до 1, где n > 0.

    const reverseSeq = (n) => {
        const arr = []
        for (let i = 1; i <= n; i++) {
            arr.push(i)
        }
        return arr.reverse()
    };

    // Задача 4.
    // Ваша задача — найти первый элемент массива, который не является последовательным.
    //     Под "не последовательным" подразумевается элемент, который не ровно на 1 больше предыдущего элемента массива.
    //     Пример:
    // В массиве [1, 2, 3, 4, 6, 7, 8]:
    // 1, 2, 3, 4 — последовательные (каждый следующий на 1 больше предыдущего),
    // но 6 не следует за 4 с разницей +1, поэтому это первое непоследовательное число.
    //     Условия:
    // Если весь массив последовательный, вернуть null.
    //     Массив всегда содержит минимум 2 элемента, все числа уникальны и идут в порядке возрастания.
    //     Числа могут быть как положительными, так и отрицательными.
    //     Дополнительное задание (не проверяется в тестах):
    // Сможете ли вы сделать так, чтобы функция возвращала null для пустого массива [] и массива с одним элементом [x]?

    function firstNonConsecutive(arr) {
        if (arr.length < 2) return null
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] !== arr[i - 1] + 1) return arr[i]
        }
        return null
    }

    // Задача 5
    // Предположим, что скорость падения лепестка составляет 5 см/с, и лепестку требуется 80 секунд, чтобы достичь земли с определённой ветки.
    //     Напишите функцию, которая принимает в качестве входных данных скорость лепестка (в см/с) и возвращает время, необходимое этому лепестку, чтобы достичь земли с той же ветки.
    //     Примечания:
    // Движение лепестка довольно сложное, поэтому в данном случае мы можем рассматривать скорость как константу во время его падения.
    //     Обратите внимание на типы данных.
    //     Если начальная скорость неположительна, возвращаемое значение должно быть равно 0.

    function sakuraFall(v) {
        const distance = 400;
        if (v <= 0) return 0;
        return distance / v;
    }

    // Задача 6
    // Доработайте функцию/метод так, чтобы она возвращала URL-адрес, удаляя всё, что находится после символа # (якоря).
    //     Примеры:
    // "www.codewars.com#about" → "www.codewars.com"
    // "www.codewars.com?page=1" → "www.codewars.com?page=1"

    function removeUrlAnchor(url) {
        const anchorIndex = url.indexOf('#');
        return anchorIndex === -1 ? url : url.substring(0, anchorIndex);
    }

    // Задача 7
    // Завершите функцию, которая преобразует шестнадцатеричное число (заданное в виде строки) в десятичное число.

    function hexToDec(hexString) {
        return parseInt(hexString, 16)
    }

    //Задача 8
//     Для решения этой задачи вам необходимо создать программу, которая определяет, кто съел последнее печенье. Если входные данные — строка,
//     то печенье съел «Зак». Если входные данные — число с плавающей точкой или целое число, то печенье съела «Моника». Если входные данные — что-то другое, то печенье съела «собака».
//     Вывод: «Кто съел последнее печенье? Это был (имя)!»
// Например: Ввод = "привет" --> Вывод = "Кто съел последнее печенье? Это был Зак!" (Вы возвращаете Зака, потому что входные данные — строка).
//     Примечание: Убедитесь, что вы возвращаете правильное сообщение с правильными пробелами и знаками препинания.

    function cookie(x) {
        typeof x === 'string' ? `Кто съел последнее печенье? Это был Zak` : `Кто съел последнее печенье? Это был Dog`
        typeof x === 'number' ? `Кто съел последнее печенье? Это былa Monika` : `Кто съел последнее печенье? Это был Dog`
        if (typeof x === 'string') {
            return `Кто съел последнее печенье? Это был Zak`
        } else if (typeof x === 'number') {
            return `Кто съел последнее печенье? Это былa Monika`
        } else {
            return `Кто съел последнее печенье? Это был Dog`
        }


    }

    // Задача 9
    // Ваша задача — отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число определяет позицию слова в результатах.
    //     Примечание: Числа могут быть от 1 до 9. Поэтому первым словом будет 1 (а не 0).
    // Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только допустимые последовательные числа.
    // 6kyu


    const order = (words) => {
        const arrWords = words.split(' ').sort((a, b) => a.replace(/\D/g, '') - b.replace(/\D/g, '')).join(' ')
        return arrWords
    }
    // Задача 10
    // Создайте функцию с двумя аргументами, которая будет возвращать массив из первых n значений, кратных x.
    //     Предположите, что и заданное число, и количество подсчётов будут положительными числами больше 0.
    // Верните результаты в виде массива или списка (в зависимости от языка).

    function countBy(x, n) {

        const arr = []
        for (let i = 1; i <= n; i++) {
            arr.push(x * i);
        }
        return arr;
    }

    // Задача 11
    // Напиши функцию с именем setAlarm / set_alarm / set-alarm / setalarm (в зависимости от языка программирования),
    // которая принимает два параметра.
    // Первый параметр, employed (работаешь), имеет значение true,
    // когда ты работаешь, а второй параметр, vacation (отпуск), имеет значение true, когда ты в отпуске.
    // Функция должна возвращать true, если ты работаешь (employed) и не в отпуске (не vacation)
    // (потому что именно при этих обстоятельствах тебе нужно установить будильник).
    // В противном случае она должна возвращать false. Примеры:

    const setAlarm = (employed, vacation) => employed && !vacation ? true : false

    // Задача 12
    // Вам необходимо создать функцию с именем reverseIt.
    //     Напишите функцию так, чтобы при передаче строки или числа в качестве данных она возвращала данные в обратном порядке. Если данные имеют другой тип, верните их как есть.
    //     Примеры входных данных и последующих выходных данных:


    function reverseIt(data) {
        if (typeof data !== 'string' && typeof data !== 'number') {
            return data;
        }
        const reversed = data.toString().split('').reverse().join('');
        return typeof data === 'number' ? Number(reversed) : reversed;
    }

    // Задача 13
    // Напишите функцию, которая складывает два вызова.
    //     Все входные данные будут целыми числами.
// 1
    const add = (a) => {
        return function (b) {
            return a + b;
        }
    }
    // 2
    const add2 = a => b => a + b


    //Задача 14
    // Напишите функцию, которая принимает массив строк в качестве аргумента и возвращает отсортированный массив, содержащий те же строки, упорядоченные от самой короткой к самой длинной
    //     Например, если этот массив передан в качестве аргумента:
    //     ["Телескопы", "Очки", "Глаза", "Монокли"]
    // Ваша функция вернет следующий массив:
    //     ["Глаза", "Очки", "Монокли", "Телескопы"]
    // Все строки в массиве, переданном вашей функции, будут иметь разную длину, поэтому вам не придётся решать, как упорядочить несколько строк одинаковой длины

    const sortByLength = (array) => array.sort((a, b) => a.length - b.length, 0)


    // Задача 15
    // В этом небольшом задании вам дано строка с числами, разделёнными пробелами, и нужно вернуть наибольшее и наименьшее число.
    //     Примечания
    // Все числа — допустимые значения типа Int32, проверять их не нужно.
    //     Входная строка всегда содержит хотя бы одно число.
    //     Строка-результат должна содержать два числа, разделённые одним пробелом, причём сначала идёт наибольшее число, затем — наименьшее.

    function highAndLow(numbers) {
        if (!numbers) return
        const arrNum = numbers.split(' ').map(Number);
        const result = arrNum.reduce(
            (acc, num) => ({
                min: Math.min(acc.min, num),
                max: Math.max(acc.max, num)
            }),
            {min: arrNum[0], max: arrNum[0]}
        );
        return `${result.max} ${result.min}`;
    }

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

    //Задача 17
    //Эта задача (ката) заключается в том, чтобы умножить заданное число на восемь, если оно чётное, и на девять — если нечётное.
    const simpleMultiplication = (number) => number % 2 === 0 ? number * 8 : number * 9


    //Задача 18
    // Реализуйте функцию, которая принимает три целых числа: a, b, c. Функция должна возвращать true, если можно построить треугольник с такими сторонами, и false — в любом другом случае.
    // (В данной задаче считаются допустимыми только треугольники с площадью больше нуля.)


    // //Задача 19
    // Создайте программу, которая фильтрует список строк и возвращает список только с именами ваших друзей.
    // Если в имени ровно 4 буквы, можете быть уверены, что это ваш друг! В противном случае можете быть уверены, что это не так...
    // Входные данные: ["Ryan", "Kieran", "Jason", "Yous"]
    // Выходные данные: ["Ryan", "Yous"]
    // Входные данные: ["Peter", "Stephen", "Joe"]
    // Выходные данные: []
    // Входные строки будут содержать только буквы.
    // Примечание: сохраните исходный порядок имен в выходных данных.

    const friend = (friends) => friends.filter(name => name.length === 4)


    // Задача 20
    // Создайте функцию, которая возвращает сумму двух наименьших положительных чисел, given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
    // Для примера, когда передается массив [19, 5, 42, 2, 77], вывод должен быть 7.
    // [10, 343445353, 3453445, 3453545353453] должен вернуть 3453455.

    function sumTwoSmallestNumbers(numbers) {
        numbers.sort((a, b) => a - b)
        return numbers[0] + numbers[1]
    }

    //задача 21
    // Вам будет дана непустая строка. Ваша задача — вернуть средний символ (или символы) этой строки.
    //     Если длина строки нечётная, верните один средний символ.
    //     Если длина строки чётная, верните два средних символа.
    //     Примеры:
    // "test" --> "es"
    // "testing" --> "t"
    // "middle" --> "dd"
    // "A" --> "A"

    function getMiddle(s) {
        let middleIndex = Math.floor(s.length / 2)
        if (s.length % 2 === 0) {
            // Если четно, возвращаем два символа: тот, что ДО middleIndex, и тот, что НА middleIndex
            return s[middleIndex - 1] + s[middleIndex];
        } else {
            // Если нечетно, возвращаем один символ ПО индексу middleIndex
            return s[middleIndex];
        }
    }

    // Задача 22
    // Дан массив целых чисел. Ваше решение должно найти наименьшее целое число.
    //     Например:
    // Для массива [34, 15, 88, 2] ваше решение должно вернуть 2
    // Для массива [34, -345, -1, 100] ваше решение должно вернуть -345
    // Можно предположить для данной задачи, что предоставленный массив не будет пустым.

    const findSmallestInt = (arr) => {
        arr.sort((a, b) => a - b)
        return arr[0]
    }

    //Задача 23
    // Банкоматы позволяют использовать PIN-коды длиной ровно 4 или 6 цифр, и PIN-коды не могут содержать ничего, кроме цифр.
    //     Если функции передана допустимая строка PIN-кода, верните true, иначе верните false.
    // Примеры (Ввод --> Вывод):
    // "1234" --> true
    // "12345" --> false
    // "a234" --> false

    function validatePIN(pin) {
        return /^(\d{4}|\d{6})$/.test(pin)
    }

    //Задача 24
    // Камень, Ножницы, Бумага
    // Давайте играть! Вы должны вернуть, какой игрок выиграл! В случае ничьи верните "Ничья!".
    // Примеры (Ввод1, Ввод2 --> Вывод):
    // "scissors", "paper" --> "Player 1 won!" ("Игрок 1 выиграл!")
    // "scissors", "rock" --> "Player 2 won!" ("Игрок 2 выиграл!")
    // "paper", "paper" --> "Draw!" ("Ничья!")
    // Примечание: В оригинале используются английские названия:
    // rock (камень)
    // paper (бумага)
    // scissors (ножницы)

    const rps = (p1, p2) => {
        if (p1 === p2) {
            return "Draw!";
        } else if (
            (p1 === 'rock' && p2 === 'scissors') ||
            (p1 === 'scissors' && p2 === 'paper') ||
            (p1 === 'paper' && p2 === 'rock')
        ) {
            return "Player 1 won!";
        } else {
            return "Player 2 won!";
        }
    };

    // Задача 25
    // Дополни решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается на второй аргумент (тоже строка).
    // Примеры:
    //     Входные данные: "abc", "bc"
    // Результат: true
    // Входные данные: "abc", "d"
    // Результат: false

    function solution(str, ending) {
        return str.endsWith(ending);
    }


    // Задача 26
    // Дополните функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. Все пробелы в строке должны быть сохранены.
    //     Примеры:
    // "Это пример!" ==> "отЭ сирпом !ереме"
    // "двойные пробелы" ==> "ейновд елыборп"

    const reverseWords = (str) => str.split('').reverse().join('').split(' ').reverse().join(' ');

    //Задача 27
    // Даны два целых числа a и b, которые могут быть положительными или отрицательными.
    // Найдите сумму всех целых чисел между ними и включая их, затем верните её. Если два числа равны, верните a или b.
    // Примечание: числа a и b не упорядочены!
    // Примеры (a, b) --> результат (пояснение)
    // (1, 0) --> 1 (1 + 0 = 1)
    // (1, 2) --> 3 (1 + 2 = 3)
    // (0, 1) --> 1 (0 + 1 = 1)
    // (1, 1) --> 1 (1, так как оба числа одинаковы)
    // (-1, 0) --> -1 (-1 + 0 = -1)
    // (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
    // Ваша функция должна возвращать только число, а не пояснение о том, как вы его получили.

    function getSum(a, b) {
        const min = Math.min(a, b);
        const max = Math.max(a, b);
        return min === max ? min : Array.from({length: max - min + 1}, (_, i) => min + i)
            .reduce((sum, num) => sum + num, 0);
    }

    // console.log(getSum(2, 5));


    // Глубокое копирование. ЗАДАЧА 1
    const library = {
        name: "City Library",
        books: [
            {id: 1, title: "JavaScript Guide", author: {name: "John Doe", country: "USA"}},
            {id: 2, title: "React Basics", author: {name: "Jane Smith", country: "UK"}}
        ]
    };

// Измените страну автора первой книги на "Canada"
    function updateAuthorCountry(library, bookId, newCountry) {
        return {
            ...library,
            books: library.books.map(book => {
                if (book.id === bookId) {
                    return {
                        ...book,
                        author: {
                            ...book.author,
                            country: newCountry
                        }
                    }
                }
            })
        }
    }

// Проверка
//     const updatedLibrary = updateAuthorCountry(library, 1, "Canada");
//     console.log(library.books[0].author.country); // "USA" (оригинал не изменился)
//     console.log(updatedLibrary.books[0].author.country); // "Canada"


    // Глубокое копирование. ЗАДАЧА 2
    const bookstore = {
        name: "Book World",
        books: [
            {id: 101, title: "JavaScript Advanced", price: 29.99, details: {category: "Programming", rating: 4.5}},
            {id: 102, title: "Python Basics", price: 24.99, details: {category: "Programming", rating: 4.2}}
        ]
    };

// Задача: Напишите функцию updateBookPrice, которая возвращает новый объект bookstore
    function updateBookPrice(bookstore, bookId, newPrice) {
        return {
            ...bookstore,
            books: bookstore.books.map(book => {
                if (book.id === bookId) {
                    return {
                        ...book,
                        price: newPrice
                    };
                }
                return book;
            })
        };
    }

// Проверка
//     const updatedBookstore = updateBookPrice(bookstore, 101, 34.99);
//     console.log(bookstore.books[0].price); // 29.99 (оригинал не изменился)
//     console.log(updatedBookstore.books[0].price); // 34.99


    // Глубокое копирование. ЗАДАЧА 3
    const company = {
        name: "TechSolutions",
        departments: {
            development: {
                manager: {name: "Alice", experience: 5},
                employees: [
                    {name: "Bob", skills: ["JS", "React"]},
                    {name: "Charlie", skills: ["Python", "Django"]}
                ]
            },
            marketing: {
                manager: {name: "David", experience: 3},
                employees: [
                    {name: "Eva", skills: ["SEO", "Content"]}
                ]
            }
        }
    };

// Добавьте навык "TypeScript" сотруднику Bob
    function addSkillToEmployee(company, departmentName, employeeName, newSkill) {
        return {
            ...company,
            departments: {
                ...company.departments,
                development: {
                    ...company.departments.development,
                    employees: {
                        ...company.departments.development.employees.map(em => em.name === employeeName ? {
                            ...em,
                            skills: [...em.skills, newSkill]
                        } : em),
                    }
                }
            }
        }
    }

// Проверка
//     const updatedCompany = addSkillToEmployee(company, "development", "Bob", "TypeScript");
//     console.log(company.departments.development.employees[0].skills); // ["JS", "React"]
//     console.log(updatedCompany.departments.development.employees[0].skills); // ["JS", "React", "TypeScript"]

    //Глубокое копирование ЗАДАЧА 4

    const school = {
        name: "Sunshine School",
        classes: {
            grade1: {
                teacher: "Mrs. Smith",
                students: 25
            },
            grade2: {
                teacher: "Mr. Johnson",
                students: 28
            }
        }
    };

// Измените количество студентов в grade1 на 26
    function updateStudentsCount(school, grade, newCount) {
        return {
            ...school,
            classes: {
                ...school.classes,
                [grade]: {
                    ...school.classes[grade],
                    students: newCount
                }
            }
        }
    }

// Проверка
    const updatedSchool = updateStudentsCount(school, "grade1", 26);
    // console.log(school.classes.grade1.students); // 25
    // console.log(updatedSchool.classes.grade1.students); // 26


    //Глубокое копирование ЗАДАЧА 5


    const blog = {
        title: "My Blog",
        posts: [
            {
                id: 1,
                title: "First Post",
                tags: ["tech", "js"],
                comments: [
                    {id: 101, user: "Alice", text: "Great post!"},
                    {id: 102, user: "Bob", text: "Thanks!"}
                ]
            },
            {
                id: 2,
                title: "Second Post",
                tags: ["react"],
                comments: [
                    {id: 201, user: "Charlie", text: "Nice!"}
                ]
            }
        ]
    };

// Добавьте новый комментарий к посту с id=1
    function addComment(blog, postId, newComment) {
        return {
            ...blog,
            posts:
                blog.posts.map(p => p.id === postId ? {...p, comments: [...p.comments, newComment]} : p)
        }
    }

// Проверка
    const newComment = {id: 103, user: "Diana", text: "Very helpful!"};
    const updatedBlog = addComment(blog, 1, newComment);
    //
    // console.log("Оригинал:", blog.posts[0].comments.length); // 2
    // console.log("Обновленный:", updatedBlog.posts[0].comments.length); // 3
    // console.log("Последний комментарий:", updatedBlog.posts[0].comments[2].user); // "Diana"


    //Глубокое копирование ЗАДАЧА 6 (reducer)


    const initialState = {
        products: [
            {id: 1, name: "Apple", price: 1.5, inStock: true},
            {id: 2, name: "Banana", price: 0.8, inStock: true},
            {id: 3, name: "Orange", price: 2.0, inStock: false}
        ],
        cart: [
            {productId: 1, quantity: 3}
        ]
    };

    function shopReducer(state = initialState, action) {
        switch (action.type) {
            case 'ADD_TO_CART':
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }

            case 'REMOVE_FROM_CART':
                return {
                    ...state,
                    cart: state.cart.filter(cart => cart.productId !== action.payload)
                }

            case 'UPDATE_PRICE':
                // payload: { productId, newPrice }
                // Изменить цену товара
                return {
                    ...state,
                    products: state.products.map(p => p.id === action.payload.productId ? {
                        ...p,
                        price: action.payload.newPrice
                    } : p)
                }

            case 'TOGGLE_STOCK':
                // payload: productId
                // Переключить наличие товара (true/false)
                return {
                    ...state,
                    products: state.products.map(t => t.id === action.payload.productId ? {
                        ...t,
                        inStock: !t.inStock
                    } : t)
                }
            default:
                return state;
        }
    }

// Проверка
    let state = initialState;

    state = shopReducer(state, {
        type: 'ADD_TO_CART',
        payload: {productId: 2, quantity: 2}
    });
    // console.log(state.cart.length); // Должно быть 2

    state = shopReducer(state, {
        type: 'UPDATE_PRICE',
        payload: {productId: 1, newPrice: 1.2}
    });
    // console.log(state.products[0].price); // Должно быть 1.2

    //Глубокое копирование ЗАДАЧА 7 (reducer)


    const libraryState = {
        books: [
            {id: 1, title: "JavaScript Guide", author: "John Doe", isAvailable: true, rating: 4.5},
            {id: 2, title: "React Basics", author: "Jane Smith", isAvailable: false, rating: 4.2},
            {id: 3, title: "CSS Mastery", author: "Bob Johnson", isAvailable: true, rating: 4.7}
        ],
        borrowed: [
            {bookId: 2, userId: "user123", dueDate: "2024-02-01"}
        ],
        filters: {
            genre: "all",
            minRating: 0
        }
    };

    function libraryReducer(state, action) {
        switch (action.type) {
            case 'BORROW_BOOK':
                // payload: { bookId, userId, dueDate }
                // Книга становится недоступной и добавляется в borrowed
                return {
                    ...state,
                    books: state.books.map(b => b.id === action.payload.bookId ? {...b, isAvailable: false} : b),
                    borrowed: [...state.borrowed, action.payload]
                }

            case 'RETURN_BOOK':
                // payload: bookId
                // Книга снова доступна и удаляется из borrowed
                return {
                    ...state,
                    books: state.books.map(b => b.id === action.payload ? {...b, isAvailable: true} : b),
                    borrowed: state.borrowed.filter(b => b.bookId !== action.payload),
                }
            case 'UPDATE_RATING':
                return {
                    ...state,
                    books: state.books.map(book =>
                        book.id === action.payload.bookId
                            ? {...book, rating: action.payload.newRating}
                            : book
                    )
                };
            case 'ADD_BOOK':
                // payload: { id, title, author, isAvailable, rating }
                // Добавить новую книгу
                return {
                    ...state,
                    books: [...state.books, action.payload]
                }
            case 'SET_FILTER':
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        [action.payload.filterType]: action.payload.value
                    }
                };
            default:
                return state;
        }
    }

    //Задача 28
    // Создайте функцию, которая принимает входную строку и возвращает строку, в которой все слова в верхнем регистре идут впереди, а все слова в нижнем регистре — в конце.
    //     Порядок слов в верхнем и нижнем регистре должен соответствовать порядку их появления во входной строке.
    //     Если слово начинается с цифры или специального символа, пропустите это слово и не включайте его в результат.
    //     Входная строка не будет пустой.
    //     Для входной строки: "hey You, Sort me Already!" функция должна вернуть: "You, Sort Already! hey me"

    function capitalsFirst(str) {
        const arrStr = str.split(' ');
        const upperCaseArray = []
        const lowerCaseArray = []

        for (let i = 0; i < arrStr.length; i++) {
            const word = arrStr[i]
            if (!word) continue;
            const firstChar = word[0]
            const isAlpha = firstChar.toUpperCase() !== firstChar.toLowerCase();

            if (!isAlpha) continue;
            firstChar === firstChar.toUpperCase() ? upperCaseArray.push(word) : lowerCaseArray.push(word);
        }

        if (upperCaseArray.length === 0) return lowerCaseArray.join(' ');
        if (lowerCaseArray.length === 0) return upperCaseArray.join(' ');

        return upperCaseArray.join(' ') + ' ' + lowerCaseArray.join(' ');
    }

    //Доп задачи

    // Найти и вернуть все слова, которые начинаются с заглавной буквы
    function findCapitalizedWords(str) {
        const words = str.split(' ');
        const arrFilter = words.filter(word => word &&
            word[0] === word[0].toUpperCase() &&
            word[0] !== word[0].toLowerCase())
        return arrFilter.join(' ')
    }


    // Задача 29
    // Создайте функцию с именем divisors/Divisors, которая принимает целое число n > 1 и возвращает массив со всеми делителями этого числа (кроме 1 и самого числа),
    // от наименьшего к наибольшему. Если число простое, верните строку '(integer) is prime'
    // (null в C#, пустую таблицу в COBOL) (используйте Either String a в Haskell и Result<Vec<u32>, String> в Rust).

    function divisors(integer) {
        const arrNum = []
        for (let i = 2; i < integer; i++) {
            if (integer % i === 0) {
                arrNum.push(i);
            }
        }
        return arrNum.length !== 0 ? arrNum : `${integer} is prime`;
    }

    // Задача 30
    // В математике факториал неотрицательного целого числа n, обозначаемый n!, представляет собой произведение всех положительных целых чисел, меньших или равных n. Например: 5! = 5 * 4 * 3 * 2 * 1 = 120. По соглашению значение 0! равно 1.
    // Напишите функцию для вычисления факториала для заданного входного значения. Если входное значение меньше 0 или больше 12, выбросьте исключение типа ArgumentOutOfRangeException (C#)
    // или IllegalArgumentException (Java) или RangeException (PHP) или throw a RangeError (JavaScript) или ValueError (Python) или return -1 (C).
    //     Более подробную информацию о факториале можно найти здесь.

    function factorial(n) {
        if (n > 12 || n < 0) {
            throw new RangeError("Number must be between 0 and 12");
        }

        let result = 1
        for (let i = 1; i <= n; i++) {
            result *= i
        }
        return result
    }


    //Задача 31
    // Конечно, вот перевод текста на русский:
    //     История
    // У Бена есть очень простая идея, как получить прибыль: он покупает что-то и продаёт это снова. Конечно,
    //     это не принесёт ему никакой прибыли, если он просто купит и продаст товар по одной и той же цене.
    //     Вместо этого он собирается купить его по самой низкой цене и продать по самой высокой.
    //     Задача
    // Напишите функцию, которая возвращает как минимальное, так и максимальное число из заданного списка/массива.
    // Примеры (Ввод --> Вывод)
    //     [1,2,3,4,5] --> [1,5]
    //     [2334454,5] --> [5,2334454]
    //     [1] --> [1,1]
    // Примечания
    // Все массивы или списки всегда будут содержать хотя бы один элемент, поэтому вам не нужно проверять длину.
    //     Также ваша функция всегда будет получать массив или список, вам не нужно проверять на null, undefined или подобные значения.

    function minMax(arr) {
        const sortedArray = arr.sort((a, b) => a - b)
        const minNum = sortedArray[0]
        const maxNum = sortedArray[sortedArray.length - 1]
        return [minNum, maxNum]
    }

    //Задача 32
    // Проверяет, содержит ли строка одинаковое количество символов «x» и «o».
    // Метод должен возвращать логическое значение и быть нечувствительным к регистру. Строка может содержать любые символы.
    // Примеры ввода/вывода:
    // XO("ooxx") => true
    // XO("xooxx") => false
    // XO("ooxXm") => true
    // XO("zpzpzpp") => true // если нет ни символов «x», ни «o», следует вернуть true
    // XO("zzoo") => false

    function XO(str) {
        const strArr = str.toLowerCase().split('')
        let countO = 0
        let countX = 0
        for (let i = 0; i < strArr.length; i++) {
            if (strArr[i] === 'o') {
                countO++
            } else if (strArr[i] === 'x') {
                countX++
            }
        }
        return countO === countX
    }

    //Задача найти факториал !5, решение с помощью рекурсии
    const foo = (n) => {

        if (n === 1) return 1
        return foo(n - 1) * n
    }


    //Задача 33
    // Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c. Функция должна возвращать true (истина),
    //     если из сторон заданной длины можно построить треугольник, и false (ложь) в любом другом случае.
    // (В данном случае все треугольники должны иметь площадь больше 0, чтобы быть принятыми).
    // Примеры:
    //     Ввод -> Вывод
    // 1,2,2 -> true
    // 4,2,3 -> true
    // 2,2,2 -> true
    // 1,2,3 -> false
    // -5,1,3 -> false
    // 0,2,3 -> false
    // 1,2,9 -> false

    function isTriangle(a, b, c) {

        if (a <= 0 || b <= 0 || c <= 0) return false

        if (a + b > c && a + c > b && b + c > a && b + c > a) {
            return true
        } else {
            return false
        }
    }


    //Задача34
    // В программировании вам известен оператор логического отрицания (!), который меняет значение условия на противоположное.
    // !false = true
    // !!false = false
    // Ваша задача — завершить функцию negationValue(), которая принимает строку отрицаний со значением и возвращает, каким будет значение после применения этих отрицаний к нему.
    //     javascript
    // negationValue("!", false); //=> true
    // negationValue("!!!!!", true); //=> false
    // negationValue("!!", []); //=> true
    // Не используйте функцию eval() или конструктор Function() в JavaScript.
    //     Примечание: Всегда возвращайте логическое значение (boolean), даже если нет отрицаний.
    //     Пояснение: Функция принимает два параметра:
    //     str - строка, содержащая только восклицательные знаки ! (операторы отрицания)
    // value - любое значение, к которому нужно применить эти отрицания
    // Функция должна применить все операции отрицания из строки к значению и вернуть результат.


    function negationValue(string, value) {
        let count = string.length; // просто берем длину строки

        if (count % 2 === 1) { // нечетное
            return !value
        } else { // четное
            return !!value
        }
    }

    function negationValue2(string, value) {
        return string.length % 2 === 1 ? !value : !!value
    }

    //Задача 35
    //   Вам будет дан массив и предельное значение. Вы должны проверить,
    //       что все значения в массиве меньше или равны предельному значению.
    //       Если это так, верните true. В противном случае верните false.
    //       Можно предположить, что все значения в массиве являются числами.

    function smallEnough(a, limit) {
        const numA = a.sort((a, b) => b - a)
        console.log(numA[0])
        if (numA[0] <= limit) {
            return true
        } else {
            return false
        }
    }

    function smallEnough2(a, limit) {
        return a.every(value => value <= limit)
    }

    //Задача 36
    // Создайте выполненный Promise (промис) в JavaScript, который будет возвращать 'Hello World!'.

    const promise = new Promise((resolve, reject) => {
        resolve('Hello world')
    })

    //Задача 37
    // Вам дан массив целых чисел нечётной длины, в котором все числа одинаковые, кроме одного единственного числа.
    //Завершите метод, который принимает такой массив и возвращает это единственное отличающееся число.
    //Входной массив всегда будет корректным! (нечётная длина >= 3)

    function stray(numbers) {
        if (numbers[0] !== numbers[1] && numbers[1] !== numbers[2]) {
            return numbers[0]
        }
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] !== numbers[0]) {
                return numbers[i]
            }
        }
    }

    //Задача 38
    // Вы спрашиваете маленькую девочку: "Сколько тебе лет?" Она всегда отвечает: "x years old", где x - случайное число от 0 до 9.
    // Напишите программу, которая возвращает возраст девочки (0-9) в виде целого числа.
    // Предполагается, что входная строка всегда является допустимой строкой. Например, входная строка может быть "1 year old" или "5 years old".
    // Первый символ в строке всегда является цифрой.

    function getAge(inputString) {
        return Number(inputString[0])
    }


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

    //Задача 40
    // Вам дан объект в виде словаря (реализация может отличаться в зависимости от языка),
    // в котором ключи — это названия языков, а значения — ваши соответствующие результаты тестов.
    // Верните список языков, в которых ваш балл составляет не менее 60, в порядке убывания баллов.
    //     Примечание: баллы всегда будут уникальными (дубликатов значений не будет).
    // Примеры
    // Входной объект с парами ключ-значение:
    // "Java" -> 10, "Ruby" -> 80, "Python" -> 65
    // Вывод:
    //     [ "Ruby", "Python" ]
    // Входной объект с парами ключ-значение:
    // "Hindi" -> 60, "Greek" -> 71, "Dutch" -> 93
    // Вывод:
    //     [ "Dutch", "Greek", "Hindi" ]
    //
    // Входной объект с парами ключ-значение:
    // "C++" -> 50, "ASM" -> 10, "Haskell" -> 20
    // Вывод:
    //     [ ]

    // function myLanguages(results) {
    //     return Object.entries(results)
    //         .filter(([language, score]) => score >= 60)
    //         .sort((a, b) => b[1] - a[1])
    //         .map(([language, score]) => language);
    // }
    //
    // console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }));

    //Задача 41
    // В этом ката вы создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список,
    //     из которого отфильтрованы строки.
    //     Пример
    // text
    // filter_list([1,2,'a','b']) == [1,2]
    // filter_list([1,'a','b',0,15]) == [1,0,15]
    // filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

    function filter_list(l) {
        return l.filter((x) => typeof x !== 'string')
    }

    //Задача 42
    // Напишите функцию, которая принимает число в качестве входного параметра и возвращает сумму абсолютных значений
    // каждой десятичной цифры этого числа.
    //     Например: (Входные данные --> Результат)
    // text
    // 10 --> 1
    // 99 --> 18
    // -32 --> 5

    function sumDigits(number) {

        const arrNumber = Math.abs(number).toString().split('');
        let sum = 0;
        for (let i = 0; i < arrNumber.length; i++) {
            sum += Number(arrNumber[i]);
        }

        return sum;
    }


    //Задача 43
    // Не считайте пятёрки!
    //     В этом ката вам даются начальное и конечное число диапазона, и вам нужно вернуть количество всех чисел,
    //     кроме тех, которые содержат цифру 5. Начальное и конечное числа включаются в диапазон!
    //     Примеры:
    // 1,9 → 1,2,3,4,6,7,8,9 → Результат: 8
    // 4,17 → 4,6,7,8,9,10,11,12,13,14,16,17 → Результат: 12
    // Результат может содержать пятёрки. ;-)
    // Начальное число всегда будет меньше конечного. Оба числа могут быть отрицательными!

    function dontGiveMeFive(start, end) {
        const arr = []
        for (let i = start; i <= end; i++) {
            arr.push(i)
        }
        return arr.filter(number => !String(number).includes('5')).length
    }

    //Задача 44
    // Задача:
    //     Дан двумерный массив целых чисел. Верните "плоскую" версию массива, в которой все числа отсортированы по возрастанию.
    //     Пример:
    // Для массива [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] ваша функция должна вернуть [1, 2, 3, 4, 5, 6, 7, 8, 9].
    //     Примечание:
    // Имейте в виду, что в JavaScript метод sort() по умолчанию сортирует элементы как строки (алфавитно).
    //     Для корректной сортировки чисел используйте функцию сравнения:

    function flattenAndSort(array) {
        return [].concat(...array).sort((a, b) => a - b)

    }

    // Задача 45
    // Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает эту же строку, но со словами из пяти или более букв,
    //     записанными в обратном порядке (точно так же, как название этого Ката).
    // Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут присутствовать только тогда, когда в строке более одного слова.
    //     Примеры:
    // text
    // "Hey fellow warriors"  --> "Hey wollef sroirraw"
    // "This is a test"        --> "This is a test"
    // "This is another test" --> "This is rehtona test"


    function spinWords(string) {
        const arrString = string.split(' ');

        for (let i = 0; i < arrString.length; i++) {
            if (arrString[i].length >= 5) {
                arrString[i] = arrString[i].split('').reverse().join('');
            }
        }

        return arrString.join(' ');
    }

    //Задача 46
    //  6kuy
    // Реализуйте функцию, которая вычисляет разницу между двумя списками.
    //     Функция должна удалить все вхождения элементов из первого списка (a), которые присутствуют во втором списке (b).
    //     Порядок элементов в первом списке должен сохраняться в результате.
    //     Примеры: Если a = [1, 2], а b = [1], результат должен быть [2].
    //     Если a = [1, 2, 2, 2, 3], а b = [2], результат должен быть [1, 3].
    function arrayDiff(a, b) {
        const set = new Set(b);
        return a.filter(item => !set.has(item));
    }


    //Задача 47
    // Нам нужно удалить все, что идет после символа # (якоря) в URL, включая сам символ #.
    // Примеры:
    //     "www.codewars.com#about" → "www.codewars.com"
    // "www.codewars.com?page=1" → "www.codewars.com?page=1" (остается без изменений, так как нет #)

    function removeUrlAnchor(url) {
        return url.split('#')[0]
    }

    //Задача 48
    // Напишите функцию, которая принимает список строк в качестве аргумента и возвращает отфильтрованный список, содержащий те же элементы, но с удаленными "гусями".
    // "Гуси" — это любые строки из следующего массива, который предопределен в вашем решении:
    //     javascript
    //         ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    // Например, если этот массив был передан как аргумент:
    //     javascript
    //         ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
    // Ваша функция должна вернуть следующий массив:
    //     javascript
    //         ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
    // Элементы в возвращаемом массиве должны быть в том же порядке, что и в исходном массиве, переданном в вашу функцию, но с удаленными "гусями".
    //     Обратите внимание, что все строки будут в том же регистре, что и предоставленные, и некоторые элементы могут повторяться.

    function gooseFilter(birds) {
        let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
        return birds.filter(bird => !geese.includes(bird))

    }

    //Задача 49
    // Допиши решение так, чтобы оно сортировало переданный массив чисел. Если функция получает пустой массив или значение null/nil, то она должна возвращать пустой массив.
    //     Например:
    // solution([1, 2, 10, 50, 5]); // должна вернуть [1,2,5,10,50]
    // solution(null); // должна вернуть []

    function solution(nums) {
        return (nums || []).sort((a, b) => a - b) || nums
    }


    //Задача 50
    // Ты, вероятно, знаком с системой «лайков» на Facebook и других платформах. Люди могут «лайкать» блог-посты,
    //     фотографии или другие элементы. Мы хотим создать текст, который будет отображаться рядом с таким элементом.
    //     Реализуй функцию, которая принимает массив с именами людей, поставивших лайк.
    //     Она должна возвращать текст, отображаемый рядом с элементом, как показано в примерах:
    //     javascript
    //         []                                -->  "никто не поставил лайк"
    //         ["Peter"]                         -->  "Peter поставил лайк"
    //         ["Jacob", "Alex"]                 -->  "Jacob и Alex поставили лайк"
    //         ["Max", "John", "Mark"]           -->  "Max, John и Mark поставили лайк"
    //         ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob и ещё 2 человека поставили лайк"
    // Примечание: Для 4 и более имён число в «и ещё 2 человека» просто увеличивается.

    function likes(names) {
        if (names.length === 0) {
            return 'no one likes this';
        } else if (names.length === 1) {
            return `${names[0]} likes this`;
        } else if (names.length === 2) {
            return `${names[0]} and ${names[1]} like this`;
        } else if (names.length === 3) {
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        } else if (names.length >= 4) {
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
        }
    }


    //Задача 51
//     Напиши функцию persistence, которая принимает положительное число num и возвращает его мультипликативную устойчивость —
//     то есть количество шагов, за которые нужно перемножить цифры числа, чтобы получить однозначное число.
//   Примеры (вход → выход):
//     39 → 3 (потому что: 3×9 = 27 → 2×7 = 14 → 1×4 = 4 → 4 — однозначное число, всего 3 умножения)
//     999 → 4 (потому что: 9×9×9 = 729 → 7×2×9 = 126 → 1×2×6 = 12 → 1×2 = 2 → 2 — однозначное число, всего 4 умножения)
//     4 → 0 (потому что 4 уже однозначное число, умножения не требуется)

    //рекурсивное решение
    function persistence(num) {
        if (num < 10) return 0
        const res = num.toString().split('').map(Number).reduce((a, b) => a * b);
        return 1 + persistence(res)
    }


    //Задача 52
    // Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку этих чисел в формате номера телефона.
    //     Пример
    // text
    // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => возвращает "(123) 456-7890"
    // Полученный формат должен быть правильным для выполнения этой задачи.
    //     Не забудьте пробел после закрывающей скобки!

    function createPhoneNumber(numbers) {
        return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
    }

    function createPhoneNumber2(numbers) {
        return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
    }

    //Задача 53
    // Вам будет дан массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.
    //     Примеры
    // text
    //     [7, 1]  =>  [1, 7]
    //     [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
    //     [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
    // Пояснение:
    //     Нечетные числа сортируются по возрастанию
    // Четные числа остаются на тех же позициях, где они были изначально
    // Порядок четных чисел не меняется
    // Меняются только позиции нечетных чисел, которые теперь идут в отсортированном порядке


    function sortArray(array) {
        const oddNum = array.filter(item => item % 2 === 1).sort((a, b) => a - b)
        let index = 0
        return array.map(t => {
            if (t % 2 !== 0) {
                return oddNum[index++];
            }
            return t
        })
    }

    //Доп задача
    // Замени все простые числа в массиве на букву 'P', а составные оставь как есть.
    //     Пример:
    // javascript
    //     [1, 2, 3, 4, 5, 6] → [1, 'P', 'P', 4, 'P', 6]
    function replacePrimes(array) {
        function isPrime(num) {
            if (num < 2) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }


        return array.map(item => {
            if (isPrime(item)) {
                return 'P';
            }
            return item;
        });
    }

    //Задача 54
    // Основная идея — подсчитать все встречающиеся символы в строке. Если у вас есть строка, например, aba, то результат должен быть {'a': 2, 'b': 1}.
    // Что, если строка пустая? Тогда результат должен быть пустым объектом, {}.

    function count(string) {
        if (string.length === 0) return {}
        const arrString = string.split('');
        let objString = {}

        for (let str of arrString) {
            if (objString[str]) {
                objString[str]++;
            } else {
                objString[str] = 1;
            }
        }
        return objString;
    }

    function analyzeText(text) {
        const result = {
            totalLetters: 0,
            totalSpaces: 0,
            mostFrequentLetter: '',
            letterFrequency: {}
        };

        for (let char of text) {
            if (char === ' ') {
                result.totalLetters++
            } else {
                result.totalSpaces++;
            }
        }
        return result;
    }

    //Задача 55
    // Создайте функцию, которая возвращает значение, умноженное на 50 и увеличенное на 6.
    // Если введенное значение является строкой, оно должно возвращать "Ошибка".

    function problem(x) {
        if (typeof x === 'string') return 'Error'
        return x * 50 + 6
    }

    //Задача 56
    // Имея целое число в качестве входных данных, можете ли вы округлить его до следующего (то есть «большего или равного») кратного 5?
    //     Примеры:
    //     Вход: Выход:
    //     0 -> 0
    // 2 -> 5
    // 3 -> 5
    // 12 -> 15
    // 21 -> 25
    // 30 -> 30
    // -2 -> 0
    // -5 -> -5
    //     Входным данным может быть любое положительное или отрицательное целое число (включая 0).
    // Можно предположить, что все входные данные являются допустимыми целыми числами.

    function roundToNext5(n) {
        if (n === 0) return 0

        if (n % 5 !== 0) {
            return Math.ceil(n / 5) * 5;
        } else {
            return Math.floor(n / 5) * 5
        }
    }

    //Задача 57
    // Дан массив с несколькими числами. Все числа одинаковые, за исключением одного. Попробуйте найти его!
    //     javascript
    // findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    // findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
    // Гарантируется, что массив содержит как минимум 3 числа.
    //     Тесты содержат очень большие массивы, поэтому подумайте о производительности.
    //     Это первое ката в серии:
    //     Найдите уникальное число (это ката)
    // Найдите уникальную строку
    // Найдите уникальный элемент

    function findUniq(arr) {
        return Array.from(new Set(arr)).find(value => arr.indexOf(value) === arr.lastIndexOf(value));
    }

    // Задача 58
    // В этом ката вам нужно просто определить, является ли заданный год високосным или нет. Если вы не знаете правила, вот они:
    //     Годы, делящиеся на 4, являются високосными,
    //     но годы, делящиеся на 100, не являются високосными,
    //     но годы, делящиеся на 400, являются високосными.
    //     Проверяемые годы находятся в диапазоне 1600 ≤ год ≤ 4000.

    function isLeapYear(year) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }

    //Задача 59
    // Дано целое число. Определи, является ли оно квадратным числом:
    //     В математике квадратное число или идеальный квадрат — это целое число, которое является квадратом другого целого числа;
    //     другими словами, это произведение некоторого целого числа на само себя.
    //     Тесты всегда будут использовать целые числа, так что не беспокойся об этом в языках с динамической типизацией.
    //     Примеры
    // -1 => false
    // 0 => true
    // 3 => false
    // 4 => true
    // 25 => true
    // 26 => false
    const isSquare = function (n) {
        if (n < 0) return false;
        if (Math.sqrt(n) % 1 === 0) {
            return true;
        } else {
            return false;
        }
    }

    //Задача 60
    // Найди общую сумму внутренних углов (в градусах) в простом многоугольнике с n сторонами. N будет больше 2.

    const angle = n => (n - 2) * 180;

    //Задача 61
    // Даны два числа и арифметический оператор (его название в виде строки), верните результат применения этого оператора к двум числам.
    //     a и b будут целыми положительными числами, причем a всегда будет первым числом в операции, а b — всегда вторым.
    //     Четыре оператора: "add" (сложение), "subtract" (вычитание), "divide" (деление), "multiply" (умножение).
    //     Несколько примеров:
    //     (Ввод1, Ввод2, Ввод3 --> Вывод)
    // text
    // 5, 2, "add"      --> 7
    // 5, 2, "subtract" --> 3
    // 5, 2, "multiply" --> 10
    // 5, 2, "divide"   --> 2.5
    // Постарайтесь обойтись без использования операторов if!
    //     Дополнительный контекст:
    //     В задании предлагается реализовать функцию, которая работает как простой калькулятор, выбирая операцию на основе строкового значения,
    //     но без использования условных конструкций if или switch. Это намекает на использование другого подхода, например, объекта с функциями или карты (Map).

    function arithmetic(a, b, operator) {
        const operators = {
            'add': (a, b) => a + b,
            'subtract': (a, b) => a - b,
            'multiply': (a, b) => a * b,
            'divide': (a, b) => a / b,
        }
        return operators[operator](a, b);
    }


    // Задача 62
    // Даны цифры в виде списка. Верните наименьшее число, которое можно составить из этих цифр, используя каждую цифру только один раз (игнорируйте дубликаты).
    // На вход функции будут подаваться только положительные целые числа в диапазоне от 1 до 9.
    // Примеры
    //     [1, 3, 1] ==> 13
    //     [5, 7, 5, 9, 7] ==> 579
    //     [1, 9, 3, 1, 7, 4, 6, 6, 7] ==> 134679

    const minValue = (values) => Number(Array.from(new Set(values)).sort().join(''))


    //Задача 63
    // Ваша задача — написать функцию factorial (факториал)
    function factorial(n) {
        let factor = 1;
        for (let i = 1; i <= n; i++) {
            factor = factor *= i
        }
        return factor;
    }


    //Задача 64
    // Случайные тесты проводятся до n = 500000, но фиксированные тесты используют более высокие значения.
    // Примеры (ввод --> вывод)
    // 4 --> 3 // у нас 3 делителя - 1, 2 и 4
    // 5 --> 2 // у нас 2 делителя - 1 и 5
    // 12 --> 6 // у нас 6 делителей - 1, 2, 3, 4, 6 и 12
    // 30 --> 8 // у нас 8 делителей - 1, 2, 3, 5, 6, 10, 15 и 30
    // Примечание: вы должны возвращать только число - количество делителей. Числа в скобках показаны только для того, чтобы вы видели, какие числа учитываются в каждом случае.

    function getDivisorsCnt(n) {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                count++; // первый делитель i
                if (i !== n / i) {
                    count++; // парный делитель n/i
                }
            }
        }
        return count;
    }

    //Задача 65
    // По городу ездит автобус, который забирает и высаживает людей на каждой остановке.
    //     Вам предоставляется список (или массив) пар целых чисел.
    //     Элементы каждой пары представляют количество людей, которые заходят в автобус (первый элемент) и количество людей, которые выходят из автобуса (второй элемент) на остановке.
    //     Ваша задача — вернуть количество людей, оставшихся в автобусе после последней остановки (после последнего массива).
    // Даже если это последняя остановка, автобус может быть не пустым, и некоторые люди могут всё ещё находиться внутри, возможно, они там спят :D
    // Ознакомьтесь с примерами тестов.
    //     Пожалуйста, имейте в виду, что в тестовых примерах гарантируется, что количество людей в автобусе всегда >= 0. Таким образом, возвращаемое целое число не может быть отрицательным.
    //     Второе значение в первой паре массива равно 0, так как на первой остановке автобус пуст.

    var number = function (busStops) {
        let totalPeople = 0
        for (let stop of busStops) {
            totalPeople = totalPeople + stop[0] - stop[1]
            console.log(totalPeople)
        }
        return totalPeople;
    }


    //Задача 66
    // Дан массив (длиной не менее 3, но потенциально очень большой), содержащий целые числа.
    //     Массив либо полностью состоит из нечётных чисел, либо полностью из чётных чисел, за исключением одного целого числа N.
    //     Напишите метод, который принимает массив в качестве аргумента и возвращает этот «выброс» N.
    //     Примеры
    //     [2, 4, 0, 100, 4, 11, 2602, 36] --> 11 (единственное нечётное число)
    // [160, 3, 1719, 19, 11, 13, -21] --> 160 (единственное чётное число)

    function findOutlier(integers) {
        let evenCount = 0;
        let oddCount = 0;
        let lastEven, lastOdd;

        for (let num of integers) {
            if (num % 2 === 0) {
                evenCount++;
                lastEven = num;
            } else {
                oddCount++;
                lastOdd = num;
            }
        }

        return evenCount === 1 ? lastEven : lastOdd;
    }

    //Задача 67
    // Если в тексте встречается что-то, что не является буквой, игнорируйте это и не возвращайте.
    // "a" = 1, "b" = 2, и т.д.
    //     Пример
    // Ввод = "The sunset sets at twelve o' clock."
    // Вывод = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
    // Пояснение на русском:
    //     Буква 'T' → 20-я в алфавите
    // Буква 'h' → 8-я в алфавите
    // Буква 'e' → 5-я в алфавите
    // И так далее...
    // Пробелы, апострофы, точки и другие не-буквы игнорируются
    //


    //Задача 68
    // Замените все гласные на восклицательные знаки в предложении. Гласные: aeiouAEIOU.
    //     Примеры:
    // "Hi!" --> "H!!"
    // "!Hi! Hi!" --> "!H!! H!!"
    // "aeiou" --> "!!!!!"
    // "ABCDE" --> "!BCD!"

    function replace(s) {
        let result = ''
        const vowels = 'aeiouAEIOU'
        for (let char of s) {
            if (vowels.includes(char)) {
                result += '!'
            } else {
                result += char
            }

        }
        return result
    }

    //Задача 69
    /*Цифровой корень — это рекурсивная сумма всех цифр числа.
        Если дано число n, нужно сложить все его цифры. Если полученная сумма состоит более чем из одной цифры,
         необходимо повторять процесс до тех пор, пока не будет получено однозначное число. Входным данным будет неотрицательное целое число.
        Примеры:
    16 → 1 + 6 = 7
    942 → 9 + 4 + 2 = 15 → 1 + 5 = 6
    132189 → 1 + 3 + 2 + 1 + 8 + 9 = 24 → 2 + 4 = 6
    493193 → 4 + 9 + 3 + 1 + 9 + 3 = 29 → 2 + 9 = 11 → 1 + 1 = 2*/

    function digitalRoot(n) {
        if (n < 10) return n;
        let sum = 0;
        const digits = n.toString().split('');
        for (let i = 0; i < digits.length; i++) {
            sum += +digits[i];
        }

        return digitalRoot(sum);
    }

    //Задача 70
    // Напишите функцию, которая проверяет, является ли строка палиндромом (читается одинаково слева направо и справа налево).
    const palindromFunc = (text) => {
        const cleanedStr = text.toLowerCase().replace(/[^a-zа-яё0-9]/g, '')
        return cleanedStr === cleanedStr.split('').reverse().join('');
    }

    //Задача 71
    // Напиши число в развернутой форме
    // Вам будет дано число, и нужно вернуть его в виде строки в развернутой форме. Например:
    // 12 --> "10 + 2"
    // 45 --> "40 + 5"
    // 70304 --> "70000 + 300 + 4"
    // ПРИМЕЧАНИЕ: Все числа будут целыми и больше 0.

    function expandedForm(num) {
        if (num <= 10) return num
        const arrNum = num.toString().split('')
        const result = []
        for (let i = 0; i < arrNum.length; i++) {
            if (arrNum[i] !== '0') {
                const value = arrNum[i] + '0'.repeat(arrNum.length - i - 1)
                result.push(value)
            }
        }
        return result.join(' + ')
    }


    //Задача 72
    // Доработайте решение так, чтобы оно разбивало строку на пары из двух символов.
    //     Если строка содержит нечётное количество символов,
    //     то необходимо заменить отсутствующий второй символ в последней паре символом подчёркивания ('_').
    //     Примеры:
    // 'abc' => ['ab', 'c_']
    // 'abcdef' => ['ab', 'cd', 'ef']

    function solution(str) {
        if (str.length === 0) return str
        return str
    }

    //Задача 73
    // Ваша задача — разделить шоколадку заданного размера n x m на маленькие квадратики. Каждый квадратик имеет размер 1x1 и не ломается.
    //     Реализуйте функцию, которая вернет минимальное количество разломов, необходимых для этого.
    //     Например, если вам дана шоколадка размером 2 x 1, вы можете разделить ее на отдельные квадратики за один разлом, но для размера 3 x 1 вам придется сделать два разлома.
    //     Если входные данные неверны, вы должны вернуть 0 (то есть разломы не требуются, если у нас нет шоколадки для разделения). Входные данные всегда будут неотрицательным целым числом.

    function breakChocolate(n, m) {
        if (n === 0 || m === 0) return 0
        return n * m - 1
    }

    //Задача 74
    // Числа по порядку?
    // В этом Ката ваша функция получает на вход массив целых чисел. Ваша задача —
    // определить, расположены ли числа в возрастающем порядке. Считается, что массив находится в возрастающем порядке,
    //     если нет двух соседних целых чисел, где левое число превышает правое по значению.
    // Для целей этого Ката можно предположить, что все входные данные корректны, то есть массивы содержат только целые числа.
    // Обратите внимание, что массив из 0 или 1 целого числа автоматически считается отсортированным по возрастанию, поскольку все (нулевые)
    // соседние пары чисел удовлетворяют условию, что левое число не превышает правое по значению.
    // Например:
    // inAscOrder([1,2,4,7,19]); // возвращает true
    // inAscOrder([1,2,3,4,5]); // возвращает true
    // inAscOrder([1,6,10,18,2,4,20]); // возвращает false
    // inAscOrder([9,8,7,6,5,4,3,2,1]); // возвращает false, потому что числа расположены в УБЫВАЮЩЕМ порядке


    function inAscOrder1(arr) {
        const arrSort = [...arr].sort((a, b) => a - b)
        return JSON.stringify(arrSort) === JSON.stringify(arr)
    }

    function inAscOrder(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    //Задача 75
    // Дан массив чисел. Верните новый массив длиной number, содержащий последние чётные числа из исходного массива (в том же порядке).
    // Исходный массив не будет пустым и будет содержать как минимум number чётных чисел.
    //     Например:
    // ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
    // ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
    // ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

    function evenNumbers(array, number) {
        const oddArr = array.filter(t => t % 2 === 0);

    }


    // Задача 76
    // Создайте функцию, которая отвечает на вопрос «Играете ли вы на банджо?».
    // Если ваше имя начинается с буквы «R» или строчной «r», то вы играете на банджо!
    //     Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
    //     name + " plays banjo"
    // name + " does not play banjo"
    // Указанные имена всегда являются допустимыми строками.

    function areYouPlayingBanjo(name) {
        const nameLower = name.toLowerCase().split('');
        return nameLower[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
    }

    //Задача 77
    // Дана строка со словами. Вам нужно найти слово с наибольшим количеством очков.
    //     Каждая буква слова приносит очки в соответствии со своей позицией в алфавите: a = 1, b = 2, c = 3 и так далее.
    //     Например, счет слова abad равен 8 (1 + 2 + 1 + 4).
    //     Вам нужно вернуть слово с наибольшим количеством очков в виде строки.
    //     Если два слова имеют одинаковый счет, верните слово, которое встречается раньше в исходной строке.
    //     Все буквы будут в нижнем регистре, и все входные данные будут корректными.

    function high(x) {
        const alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
        const xToLow = x.toLowerCase().split(' ')
        const sumTo = xToLow.map((word) => {
            let sum = 0
            for (let i = 0; i < word.length; i++) {
                const letterIndex = alph.indexOf(word[i])
                sum += letterIndex + 1
            }
            return sum
        })
        const maxScore = Math.max(...sumTo)
        const maxIndex = sumTo.indexOf(maxScore)
        return xToLow[maxIndex]
    }


    //Задача 78
    // Дан массив целых чисел, найдите тот, который встречается нечётное количество раз.
    //     Всегда будет только одно целое число, встречающееся нечётное количество раз.
    //     Примеры:
    // [7] → должно вернуть 7, так как оно встречается 1 раз (что является нечётным).
    // [0] → должно вернуть 0, так как оно встречается 1 раз (что является нечётным).
    // [1,1,2] → должно вернуть 2, так как оно встречается 1 раз (что является нечётным).
    // [0,1,0,1,0] → должно вернуть 0, так как оно встречается 3 раза (что является нечётным).
    // [1,2,2,3,3,3,4,3,3,3,2,2,1] → должно вернуть 4, так как оно встречается 1 раз (что является нечётным).

    function findOdd(arr) {
        let count = {}
        for (let i = 0; i < arr.length; i++) {
            const num = arr[i]
            count[num] = (count[num] || 0) + 1
        }

        for (const res in count) {
            if (count[res] % 2 === 1) {
                return +res
            }
        }


    }

    //Задача 79
    // Завершите решение так, чтобы оно разбивало строку на пары из двух символов. Если строка содержит нечётное количество символов,
    //     то необходимо заменить отсутствующий второй символ в последней паре символом подчёркивания ('_').
    //     Примеры:
    // 'abc' => ['ab', 'c_']
    // 'abcdef' => ['ab', 'cd', 'ef']

    function solution(str) {
        const arrStr = str.split('')
        const resStr = []
        for (let i = 0; i < arrStr.length; i += 2) {
            if (arrStr[i + 1]) {
                resStr.push(arrStr[i] + arrStr[i + 1])
            } else {
                resStr.push(arrStr[i] + '_')
            }
        }
        return resStr
    }


    //Задача 80
    // Джейден Смит, сын Уилла Смита, является звездой таких фильмов, как «Каратэ-пацан» (2010) и «После нашей эры» (2013).
    //     Также Джейден известен своей философией, которую он излагает в Твиттере. Когда он пишет в Твиттере, он известен тем, что почти всегда пишет каждое слово с заглавной буквы.
    //     Для простоты вам нужно будет писать каждое слово с заглавной буквы; посмотрите, как ожидается оформление сокращений, в примере ниже.
    //     Ваша задача — преобразовать строки так, как они были бы написаны Джейденом Смитом. Строки — это реальные цитаты Джейдена Смита, но они не капитализированы так,
    //     как он их изначально напечатал.
    //     Пример:
    // Не в стиле Джейдена: «How can mirrors be real if our eyes aren't real»
    // В стиле Джейдена: «How Can Mirrors Be Real If Our Eyes Aren't Real»

    function toJadenCase(str) {
        const strArr = str.split(' ')
        let res = []
        for (let uppCaseStr of strArr) {
            const cap = uppCaseStr = uppCaseStr[0].toUpperCase() + uppCaseStr.slice(1) + ' ';
            res.push(cap)
        }
        return res.join(' ')
    }

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

    //Задача 82

    function reverse(string) {
        return string.split(' ').reverse().join(' ')
    }

    //Задача 83
    // Массив целых чисел, содержащий только чётные значения в том же порядке, в котором они были в исходном массиве

    function noOdds(values) {
        return values.filter(v => v % 2 === 1)
    }


    //Задача 84
    // Когда предоставлена буква, верните её позицию в алфавите.
    // Вход :: "a"
    // Выход :: "Позиция в алфавите: 1"
    // Примечание: Тестируются только строчные английские буквы

    function position(letter) {
        const voyage = 'abcdefghijklmnopqrstuvwxyz'.split('')
        for (let position of voyage) {
            if (letter === position) {
                return `Position of alphabet: ${voyage.indexOf(position) + 1}`
            }
        }
    }

    //Задача 85
    // Мой дедушка всегда предсказывал, сколько лет люди проживут, и прямо перед своей смертью он раскрыл свой секрет!
    //     В честь памяти моего дедушки мы напишем функцию, используя его формулу!
    //     Возьмите список возрастов, в которых умер каждый из ваших прабабушек и прадедушек.
    //     Умножьте каждое число само на себя.
    //     Сложите все результаты вместе.
    //     Извлеките квадратный корень из результата.
    //     Разделите на два.
    //     Пример:
    // javascript
    // predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
    // Примечание: результат должен быть округлен вниз до ближайшего целого числа.
    //     Некоторые случайные тесты могут не пройти из-за ошибки в реализации JavaScript. Просто отправьте решение повторно, если это произойдет с вами.

    function predictAge1(age1, age2, age3, age4, age5, age6, age7, age8) {
        const result = Math.sqrt(Math.pow(age1, 2) + Math.pow(age2, 2) + Math.pow(age3, 2) + Math.pow(age4, 2) + Math.pow(age5, 2)
            + Math.pow(age6, 2) + Math.pow(age7, 2) + Math.pow(age8, 2)) / 2
        return Math.floor(result)
    }

    //Самый простой способ решения задачи
    function predictAge(...ages) {
        return Math.floor(Math.hypot(...ages) / 2 || 0)
    }


    //Задача 86 5kyu
    // Напишите алгоритм, который принимает массив и перемещает все нули в конец, сохраняя порядок остальных элементов.
    // moveZeros([false,1,0,1,2,0,1,3,"a"]) // возвращает [false,1,1,2,1,3,"a",0,0]

    function moveZeros(arr) {
        const arrZiro = []
        for (let findZiro of arr) {
            if (findZiro === 0) {
                arrZiro.push(findZiro)
            }
        }
        const filterArr = arr.filter(t => t !== 0)
        return filterArr.concat(arrZiro)
    }

    //2 вариант

    const moveZeros2 = (arr) => arr.filter(t => t !== 0).concat(arr.filter(t => t === 0))


    //Задача 87
    // Ваша задача — просуммировать разности между последовательными парами в массиве, упорядоченном по убыванию.
    //     Пример
    //     [2, 1, 10] --> 9
    // В порядке убывания: [10, 2, 1]
    // Сумма: (10 - 2) + (2 - 1) = 8 + 1 = 9

    function sumOfDifferences(arr) {
        if (arr.length <= 1) return 0;

        const sortedArr = arr.sort((a, b) => b - a);
        let sum = 0;

        for (let i = 0; i < sortedArr.length - 1; i++) {
            sum += sortedArr[i] - sortedArr[i + 1];
        }

        return sum;
    }

    //Задача 88
    // Напишите функцию, которая принимает массив чисел (в тестах - целые числа) и целевое число. Она должна найти два различных элемента в массиве, которые в сумме дают целевое значение.
    //     Затем индексы этих элементов должны быть возвращены в виде кортежа/списка (в зависимости от языка) следующим образом: (индекс1, индекс2).
    //     Для целей этой задачи некоторые тесты могут иметь несколько правильных ответов; любые допустимые решения будут приняты.
    //     Входные данные всегда будут корректными (массив numbers будет длиной 2 или больше, все элементы будут числами; target всегда будет суммой двух различных элементов из этого массива).
    //     Примеры:
    //         twoSum([1, 2, 3], 4) // возвращает [0, 2] или [2, 0]
    // twoSum([3, 2, 4], 6) // возвращает [1, 2] или [2, 1]

    function twoSum(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === target) {
                    return [i, j]
                }
            }

        }

    }

    //Задача 89
    // Дан массив нечётной длины, состоящий из целых чисел. Все числа в массиве одинаковые, за исключением одного единственного.
    //     Нужно реализовать метод, который принимает такой массив и возвращает это единственное отличающееся число.
    //     Входной массив всегда будет корректным! (нечётная длина >= 3)
    // Примеры:
    //     [1, 1, 2] ==> 2
    //         [17, 17, 3, 17, 17, 17, 17] ==> 3

    function findUniq(arr) {
        return arr.find(t => arr.indexOf(t) === arr.lastIndexOf(t))
    }


    //Задача 90
    // Панграмма - это предложение, которое содержит каждую букву алфавита хотя бы один раз.
    //     Например, предложение "The quick brown fox jumps over the lazy dog" является панграммой,
    //     потому что оно использует все буквы A-Z как минимум один раз (регистр не имеет значения).
    // Дана строка. Определите, является ли она панграммой. Верните True, если является, и False, если нет. Игнорируйте цифры и знаки препинания.
    //     Примеры:
    // "The quick brown fox jumps over the lazy dog" → True
    // "Hello world" → False (отсутствуют многие буквы алфавита)
    // "ABCDEFGHIJKLMNOPQRSTUVWXYZ" → True
    // "This is not a pangram" → False

    function isPangram(string) {
        const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split('')
        const stringArray = string.toLowerCase().split('')
        let res = 0
        for (let iterString of alph) {
            if (stringArray.includes(iterString)) {
                res++
            }
        }
        return res === 26
    }

    //Задача 91
    // Дополни метод, который принимает массив целых чисел и возвращает один из следующих вариантов:
    // «yes, ascending» — если числа в массиве отсортированы в порядке возрастания
    // «yes, descending» — если числа в массиве отсортированы в порядке убывания
    // «no» — в противном случае
    // Порядок не обязательно должен быть строгим: отсортированный массив может содержать последовательные дубликаты, например,
    // [1, 1, 2, 3] считается отсортированным в порядке возрастания.
    // Гарантируется, что всегда будет существовать единственный верный ответ. Если точнее:
    // не будет массивов с менее чем 2 элементами
    // не будет массивов, в которых все элементы равны

    function isSortedAndHow(array) {
        const ascendingArray = [...array].sort((a, b) => a - b).join('')
        const descendingArray = [...array].sort((a, b) => b - a).join('')
        const original = array.join('')

        if (original === ascendingArray) {
            return 'yes, ascending'
        } else if (original === descendingArray) {
            return 'yes, descending'
        } else {
            return 'no'
        }
    }

    //Задача92
    // Ваша задача — создать таблицу умножения N×N, где размер передается в параметре.
    //     Например, когда заданный размер равен 3:
    // text
    // 1 2 3
    // 2 4 6
    // 3 6 9
    // Для приведенного примера возвращаемое значение должно быть:
    //     javascript
    //         [[1,2,3],[2,4,6],[3,6,9]]
    // Пояснение:
    //     Нужно написать функцию, которая принимает число N и возвращает двумерный массив (матрицу) N×N, где элемент в i-й строке и j-м столбце равен (i+1) * (j+1).

    function multiplicationTable(size) {
        let table = []
        for (let i = 0; i < size; i++) {
            let row = []
            for (let j = 0; j < size; j++) {
                let resultJ = (i + 1) * (j + 1)
                row.push(resultJ)

            }
            table.push(row)
        }
        return table
    }

    // Задача 93
    // Задача: "Найди пропущенное число"
    //
    // Дан массив, содержащий числа от 1 до N (включительно), где одно число пропущено. Массив не отсортирован. Найди пропущенное число.
    //
    //     Пример:
    //
    // text
    // Вход: [3, 7, 1, 2, 8, 4, 5]  // N = 8, пропущено 6
    // Выход: 6

    function findMissingNumber(arr) {
        const n = arr.length + 1;
        const expectedSum = n * (n + 1) / 2;
        const actualSum = arr.reduce((sum, num) => sum + num, 0);
        return expectedSum - actualSum;
    }

    // Задача 94
    // Дан массив чисел, верни новый массив длиной number, содержащий последние чётные числа из исходного массива (в том же порядке).
    // Исходный массив не будет пустым и будет содержать как минимум "number" чётных чисел.
    //     Например:
    // ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
    // ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
    // ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]


    const evenNumbers1 = (array, number) => array.filter(t => t % 2 === 0).slice(-number)

    //Задача 95
    // Задача
    // Дана строка str. Необходимо развернуть её и удалить все не-алфавитные символы.
    //     Пример
    // Для str = "krishan" результат должен быть "nahsirk".
    //     Для str = "ultr53o?n" результат должен быть "nortlu".
    //     Ввод/Вывод
    //     [input] строка str
    // Строка, состоящая из символов в нижнем регистре латинского алфавита, цифр и других символов.
    //     [output] строка

    function reverseLetter(str) {
        return str.split('').filter(t => /[a-zA-Z]/.test(t)).reverse().join('')
    }

    //Задача 96
    // Определите функцию, которая принимает целочисленный аргумент и возвращает логическое значение true или false в зависимости от того, является ли целое число простым.
    //     Согласно Википедии, простое число — это натуральное число больше 1, которое не имеет положительных делителей, кроме 1 и самого себя.
    //     Требования:
    // Можно предполагать, что на вход будет подано целое число.
    //     Нельзя предполагать, что число будет только положительным. Вам также могут передавать отрицательные числа (или 0).
    // ПРИМЕЧАНИЕ о производительности: Не требуются сложные оптимизации, но самые тривиальные решения могут превысить лимит времени.
    //     Числа могут достигать 2^31 (или аналогичного значения в зависимости от языка программирования). Перебор вплоть до n или n/2 будет слишком медленным.
    //     Пример:
    // text
    // is_prime(1)
    // is_prime(2)
    // is_prime(-1)

    function isPrime(num) {
        if (num <= 1) return false
        if (num === 2) return true
        if (num !== 2 && num % 2 === 0) return false
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false
        }
        return true
    }

    //Задача 97
    // Ваша задача — удалить все повторяющиеся слова из строки, оставив только первые вхождения каждого слова.
    //     Пример:
    // Ввод:
    //     'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
    // Вывод:
    //     'alpha beta gamma delta'

    function removeDuplicateWords(s) {
        const removeDublicate = new Set(s.split(' '))
        const result = []
        for (let sRes of removeDublicate) {
            result.push(sRes)
        }
        return result.join(' ')
    }

    //Задача 98
    // Реализуйте функцию unique_in_order,
    // которая принимает в качестве аргумента последовательность и возвращает список элементов,
    // удаляя одинаковые значения, находящиеся рядом, и сохраняя исходный порядок элементов.

    var uniqueInOrder = function (iterable) {

        let results = []
        for (let i = 0; i < iterable.length; i++) {
            if (i === 0 || iterable[i] !== iterable[i - 1]) {
                results.push(iterable[i])
            }
        }
        return results
    }

    //Задача 99
    // Я дам тебе целое число. Верни мне фигуру, длина и ширина которой соответствуют этому числу. Число будет целым в диапазоне от 1 до 50.
    function generateShape(integer) {
        let array = []
        for (let i = 1; i <= integer; i++) {
            let plus = "+".repeat(integer)
            array.push(plus)
        }
        return array.join('\n')
    }

    //Задача 100
    // Дан числовой ряд (последовательность чисел). Найди наибольшую сумму двух чисел в этой последовательности.
    //     Например:
    // text
    //     [10, 14, 2, 23, 19] --> 42 (= 23 + 19)
    //     [99, 2, 2, 23, 19] --> 122 (= 99 + 23)
    // Входная последовательность содержит как минимум два элемента, и каждый элемент является целым числом.

    function largestPairSum(numbers) {
        const sotrArr = numbers.sort((a, b) => b - a)
        return sotrArr[0] + sotrArr[1]
    }

    //Задача101
    // Ваша задача — создать таблицу умножения N×N, где размер передаётся в параметре.
    //     Например, если заданный размер равен 3:
    // 1 2 3
    // 2 4 6
    // 3 6 9
    // Для приведённого примера возвращаемое значение должно быть:
    //     [[1,2,3],[2,4,6],[3,6,9]]

    //Задача 102
    //В массиве найти максимальное число
    const findMax = (arrNumbers) => {
        const arrSort = arrNumbers.sort((a, b) => b - a)
        return arrSort[0]
    }

    function factorial(n) {
        if (n === 0) {
            return 1
        } else {
            return n * factorial(n - 1)
        }
    }

    //Задача 103
    // Числа, заканчивающиеся нулями — это скучно.
    //     В твоём мире они могут быть интересными, но не здесь.
    //     Избавься от них. Только от конечных нулей.
    //     Примеры:
    // text
    // 1450   -> 145
    // 960000 -> 96
    // 1050   -> 105
    // -1050  -> -105
    // 0      -> 0
    // Примечание: Ноль должен оставаться как есть.

    function noBoringZeros(n) {
        const arrN = n.toString().split('')
        if (arrN.length < 1) return
        for (let i = 0; i < arrN.length; i++) {
            if (arrN[arrN.length - 1] === '0') {
                arrN.pop()
            } else {
                break
            }
        }
        return Number(arrN.join(''))
    }

    //Задача 104
    // Если a = 1, b = 2, c = 3 ... z = 26,
    //     Тогда l + o + v + e = 12 + 15 + 22 + 5 = 54
    // и f + r + i + e + n + d + s + h + i + p = 6 + 18 + 9 + 5 + 14 + 4 + 19 + 8 + 9 + 16 = 108
    // Таким образом, дружба в два раза сильнее любви :-)
    // Ваша задача — написать функцию, которая вычисляет значение слова на основе суммы позиций букв алфавита.
    //     Входные данные всегда будут состоять только из строчных букв и никогда не будут пустыми.
    function wordsToMarks(string) {
        const alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
        const arrString = string.split('')
        let result = 0
        for (let str of arrString) {
            let index = alph.indexOf(str);
            if (index !== -1) {
                result += index + 1;
            }

        }
        return result
    }


    // Задача 105
    //
    // Просуммируйте все числа заданного массива (списка), за исключением самого большого и самого маленького элемента (по значению, а не по индексу!)
    // Самый высокий или самый низкий элемент — это один элемент на каждой границе, даже если существует несколько элементов с таким же значением.
    //     Обратите внимание на проверку входных данных.
    //   Пример
    // text
    // { 6, 2, 1, 8, 10 } => 16
    // { 1, 1, 11, 2, 3 } => 6
    // Проверка входных данных
    //
    // Если вместо массива передано пустое значение (null, None, Nothing, nil и т.д.), или заданный массив является пустым списком, или списком, содержащим только 1 элемент, верните 0.

    function sumArray(array) {
        if (!array || array.length <= 1) return 0
        return array.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0)

    }

    // Задача 106
    // Американцы — странные люди: в их зданиях первый этаж на самом деле является цокольным (ground floor), и нет 13-го этажа (из-за суеверий).
    // Напишите функцию, которая, получая этаж в американской системе, возвращает этаж в европейской системе.
    //     Поскольку 1-й этаж заменяется цокольным этажом, а 13-й этаж удаляется, номера этажей смещаются вниз, чтобы занять их места.
    //     В случае этажей выше 13-го они смещаются вниз на два, потому что ниже них пропущено два числа.
    //     Подвальные этажи (отрицательные) остаются такими же, как в универсальной системе.
    //     Больше информации здесь.
    //     Примеры:
    // text
    // 1  =>  0
    // 0  =>  0
    // 5  =>  4
    // 15  =>  13
    // -3  =>  -3

    function getRealFloor(n) {
        return n > 13 ? n - 2 : n > 0 ? n - 1 : n
    }

    //Задача 107

    var capitals = function (word) {
        const arrWord = word.split('')
        const result = []
        for (let i = 0; i < word.length; i++) {
            arrWord[i] === arrWord[i].toUpperCase ? result.push(i) : undefined


        }
        return result
    };


    //Задача 108
    // Описание:
    //     Удалите все восклицательные знаки с конца предложения.
    //     Примеры:
    // "Hi!" ---> "Hi"
    // "Hi!!!" ---> "Hi"
    // "!Hi" ---> "!Hi"
    // "!Hi!" ---> "!Hi"
    // "Hi! Hi!" ---> "Hi! Hi"
    // "Hi" ---> "Hi"
    // Пояснение:
    //     Удаляются только восклицательные знаки в конце строки
    // Восклицательные знаки в начале или середине строки остаются без изменений
    // Если в конце строки нет восклицательных знаков, строка возвращается без изменений

    function remove(string) {
        const arrStr = string.split('')
        for (let i = arrStr.length - 1; i >= 0; i--) {
            if (arrStr[i] === '!') {
                arrStr.pop()
            } else {
                break
            }

        }
        return arrStr
    }

    //Задача 109
    // Описание:
    //     Удалите восклицательный знак с конца строки. Для этой задачи начального уровня можно предполагать, что входные данные всегда являются строкой, и нет необходимости это проверять.
    //     Примеры:
    // text
    // "Hi!"     ---> "Hi"
    // "Hi!!!"   ---> "Hi!!"
    // "!Hi"     ---> "!Hi"
    // "!Hi!"    ---> "!Hi"
    // "Hi! Hi!" ---> "Hi! Hi"
    // "Hi"      ---> "Hi"

    function remove2(string) {
        const arrStr = string.split('')
        if (arrStr.at(-1) === '!') {
            arrStr.pop()
        }
        return arrStr
    }

    //Задача 110
    // Данная строка и массив индексов. Переставьте символы строки так, чтобы каждый символ оказался на позиции, указанной соответствующим индексом в массиве.
    //     Пример
    // Входные данные: "abcd", [0, 3, 1, 2]
    // Выходные данные: "acdb"
    // Объяснение
    // Символ 'a' помещается на позицию 0.
    // Символ 'b' помещается на позицию 3.
    // Символ 'c' помещается на позицию 1.
    // Символ 'd' помещается на позицию 2.
    // Примечания
    // Строка и массив имеют одинаковую длину.
    //     Строка содержит допустимые символы (A-Z, a-z, или 0-9);
    // массив содержит допустимые индексы.

    function scramble(str, arr) {
        const arrStr = str.split('')
        let result = []
        for (let i = 0; i < arr.length; i++) {
            result[arr[i]] = arrStr[i]
        }
        return result.join('')
    }

    //Задача 111
    // Условие задачи:
    //     Что если нам нужно, чтобы длина слов, разделённых пробелом, добавлялась в конец каждого соответствующего слова, и результат возвращался в виде массива?
    //     Пример (Ввод → Вывод):
    // "apple ban" → ["apple 5", "ban 3"]
    // "you will win" → ["you 3", "will 4", "win 3"]
    // Ваша задача — написать функцию, которая принимает строку и возвращает массив/список, где к каждому элементу (слову) добавлена его длина.
    //     Примечание:
    // Строка будет содержать как минимум один элемент; слова всегда будут разделены пробелом.

    const addLength = (str) => str.split(' ').map(s => `${s} ${s.length}`)

    //Задача 112
    // Возьмите 2 строки s1 и s2, содержащие только буквы от a до z.
    //     Верните новую отсортированную строку (в алфавитном порядке по возрастанию),
    // максимально возможной длины, содержащую уникальные буквы — каждая буква должна встречаться только один раз —
    // которые присутствуют либо в s1, либо в s2.

    function longest(s1, s2) {
        const arrStr1 = s1.split('')
        const arrStr2 = s2.split('')
        const result = new Set(arrStr1.concat(arrStr2).sort())
        return [...result].join(' ')
    }

    //Задача 113
    // Шаг 1: Создайте функцию с названием encode(), чтобы заменить все строчные гласные в заданной строке числами в соответствии со следующим шаблоном:
    //     a → 1
    // e → 2
    // i → 3
    // o → 4
    // u → 5
    // Например, encode("hello") вернет "h2ll4". В этом ката не нужно беспокоиться о заглавных гласных.
    //     Шаг 2: Теперь создайте функцию с названием decode(), чтобы преобразовать числа обратно в гласные в соответствии с тем же шаблоном, показанным выше.
    //     Например, decode("h3 th2r2") вернет "hi there".
    //     Для простоты можно предположить, что любые числа, передаваемые в функцию, будут соответствовать гласным.


    function encode(string) {
        const arrStr = string.split('')
        const result = []
        for (let str of arrStr) {
            switch (str) {
                case 'a':
                    result.push('1')
                    break;
                case 'e':
                    result.push('2')
                    break;
                case 'i':
                    result.push('3')
                    break;
                case 'o':
                    result.push('4')
                    break;
                case 'u':
                    result.push('5')
                    break;
                default:
                    result.push(str)
            }

        }
        return result.join('')
    }


    function encod2(string) {
        const table = ['a','e','i','o','u']
        return string.split('').map(s => table.indexOf(s) +1 || s).join('')
    }


    function decode(string) {
        const arrStr = string.split('')
        const result = []
        for (let str of arrStr) {
            switch (str) {
                case '1':
                    result.push('a')
                    break;
                case '2':
                    result.push('e')
                    break;
                case '3':
                    result.push('i')
                    break;
                case '4':
                    result.push('o')
                    break;
                case '5':
                    result.push('u')
                    break;
                default:
                    result.push(str)
            }

        }
        return result.join('')
    }

    //Задача 114
    // Вернуть новый массив, состоящий из элементов, которые кратны своему собственному индексу во входном массиве (длина > 1).
    //     Некоторые примеры:
    //     tex
    //         [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
    //     [68, -1, 1, -7, 10, 10] => [-1, 10]
    //     [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

    function multipleOfIndex(array) {
        const result = []
        for (let i = 0; i < array.length; i++) {
            if(i === 0) {
                if(array[i] === 0) result.push(i)
                continue
            }
            if(array[i] % i === 0){
                result.push(array[i])
            }
        }
        return result
    }

    //  Задача 115
    // Вам дан массив целых чисел нечётной длины, в котором все числа одинаковы, за исключением одного единственного числа.
    //     Завершите метод, который принимает такой массив и возвращает это единственное отличающееся число.
    //     Входной массив всегда будет корректным! (нечётная длина >= 3)
    // Примеры
    // text
    //     [1, 1, 2] ==> 2
    //     [17, 17, 3, 17, 17, 17, 17] ==> 3

    function stray(arr) {
        return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));
    }

    //Задача 116

    // Напишите функцию, которая принимает строку и возвращает объект с количеством каждого символа.

    const countChars = (str) => {

    const result = {}
        for(let char of str.toLowerCase() ){
            if(char === ' ') continue
            if (result[char]) {
                result[char] += 1;
            } else {
                result[char] = 1;
            }
        }
        return result
    }


    //Задача 117
    // Напишите функцию, которая получает URL в виде строки, извлекает только имя домена и возвращает его в виде строки. Например:
    // url = "http://github.com/carbonfive/raygun" -> имя домена = "github"
    // url = "http://www.zombie-bites.com" -> имя домена = "zombie-bites"
    // url = "https://www.cnet.com" -> имя домена = "cnet"

    function domainName(url){
       return  url.replace(/https?:\/\/(www\.)?/, '').replace(/\.\w+$/, '')
    }

    //Задача 118
    // Задача: Напишите функцию, которая проверяет, является ли строка палиндромом

    const funcPalindrome = (str) => {
        const cleanedStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
        const reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    };



    //Задача 119
    // Задача: Напишите функцию, которая находит второе максимальное число в массиве.

    const secondMax = (arr) => {
        if(arr.length <= 1) return null;
    const sortArray = [...arr].sort((a, b) => b - a );
    const max = sortArray[0]
    for(let i = 1; sortArray.length > i; i++){
        if(sortArray[i]<max){
            return sortArray[i]
        }
    }

    return null
    }

    //Задача 120
    //Перевернуть строку

    const reverseString = (str) => {

        const result = []
        for(let i = str.length -1 ; i >= 0; i--) {
            result.push(str[i])
        }
        return result.join('')
    }



    //Задача 121
    //  Напиши функцию, которая принимает строку и возвращает самое длинное слово.
    const longestWord = (str) => {
        const strArr = str.split(' ')
        let longest = ''
        for(let word of strArr){
            if(word.length > longest.length){ longest = word}
        }
        return longest
    }

    //Задача 122
    // Напиши функцию removeDuplicates(arr), которая принимает массив и возвращает новый массив без повторов.

    const removeDuplicates = (numberArray) => {
        const result = []
        for(let num of  numberArray){
            if(!result.includes(num)){
                result.push(num)
            }
        }
        return result
    }

    //Задача 123 Найти самое частое значение в массиве

    const mostFrequent = (num) => {
        let res = {}
        for(let numRes of num){
            if(!res[num]){
                return  res += num
            }
        }
    }

    //Задача 124 Найти максимальное число в массиве

    const maxCount = (arr) => {
        let result = arr[0]

        for(let num of arr){
            if(num > result){
                result = num
            }
        }
        return result;
    }

    //Задачи на тему this
    //Написать counter
    function Counter() {
        this.value = 0
        this.inc = function(){
            this.value++
        }
        this.dec = function(){
            this.value--
        }
        this.get = function(){
            return  this.value
        }
    }
    const counter = new Counter();
    counter.inc();//1
    counter.inc();//2
    counter.inc();//3
    counter.dec();//3-1 = 2

    //Задание 2
    //Какой вывод ?
    var length = 10;
    const obj = {
        length: 5,
        method() {
            return this.length;
        }
    };
    const array = [1, 2, obj.method];
    //Какой вывод?
    var name = "Global";
    const _obj = {
        name: "Object",
        getName() {
            return this.name;
        }
    };
    const fn = obj.getName;


    //Задача 125
    // Мы хотим создать функцию, которая возвращает массив функций, каждая из которых возвращает свой индекс в массиве. Для лучшего понимания — вот пример:
    //     text
    // var callbacks = createFunctions(5); // создаём массив, содержащий 5 функций
    //
    // callbacks[0](); // должно вернуть 0
    // callbacks[3](); // должно вернуть 3
    // Мы уже реализовали эту функцию, но когда мы запускаем код, результат оказывается не таким, как мы ожидали. Можете понять, в чём ошибка? Также доступен тестовый набор.

    function createFunctions(n) {
        var callbacks = [];

        for (var i=0; i<n; i++) {
            callbacks.push(function() {
                return i;
            });
        }

        return callbacks;
    }


    //Задача 126
    // Напишите метод, который принимает один аргумент — имя, а затем приветствует это имя с заглавной буквы и заканчивается восклицательным знаком.
    //     Пример:
    // text
    // "riley" --> "Hello Riley!"
    // "JACK"  --> "Hello Jack!"

    let greet = function(name) {
    const capitalLetter = name.split("")[0].toUpperCase();
    const names = name.toLowerCase().split('').splice(1).join('');
        return `Hello ${capitalLetter.concat(names)}!`
    };


    //Задача 127
    // Напишите функцию, которая преобразует имя в инициалы. В этой задаче строго используются два слова, разделенные одним пробелом.
    //     На выходе должны быть две заглавные буквы, разделенные точкой.
    //     Результат должен выглядеть так:
    //     Sam Harris => S.H
    // patrick feeney => P.F

    function abbrevName(name){
    let arrName = name.split(' ')
        const result = []
        for (let names of arrName){
        result.push(`${names[0].toUpperCase()}`)
        }
    return result.join('.');
    }

    //Задача 128
    // Данную строку. Заглавные буквы, которые занимают чётные индексы и нечётные индексы, обрабатываются отдельно, и возвращается результат, как показано ниже. Индекс 0 считается чётным.
    //     Например, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. Смотрите тестовые примеры для дополнительных примеров.
    //     Входные данные будут строкой в нижнем регистре без пробелов.

    function capitalize1(s){
        const arrS = s.split('');
        let result1 = []
        let result2 = []
       for(let i=0; i<arrS.length; i++){
           if(i % 2 === 0){
               result1.push(arrS[i].toUpperCase())
           }else {
               result1.push(arrS[i].toLowerCase())
           }
       }
       for(let i=0; i<arrS.length; i++){
           if(i % 2 === 0){
               result2.push(arrS[i].toLowerCase())
           }else {
               result2.push(arrS[i].toUpperCase())
           }
       }
        return [result1.join(''), result2.join('')];
    }


    function capitalize(s){
        const odd = s.split('').map((t,i)=> i % 2 ===0 ? t.toUpperCase() : t.toLowerCase()).join('');
        const even = s.split('').map((t,i)=> i % 2 ===0 ? t.toLowerCase() : t.toUpperCase()).join('');
        return [odd, even]
    }

    //Задача 128
    // Твоя машина старая, она легко ломается. Амортизаторы уже не работают, и ты думаешь, что она выдержит примерно ещё 15 кочек, прежде чем окончательно сломается.
    //     К несчастью для тебя, твоя дорога очень ухабистая! Дана строка, показывающая либо ровную дорогу (_), либо кочки (n).
    //     Если ты сможешь добраться до дома, встретив 15 кочек или меньше, верни "Woohoo!", иначе верни "Car Dead".

    function bump(x){
    const arrX = x.split('')
        let countHummock = 0
        for(let hummock of arrX){
            if(hummock === 'n'){
                countHummock++
                console.log(countHummock)
            }
        }
        if(countHummock <= 15){
            return  "Woohoo!"
        }else {
            return "Car Dead"
        }

    }

    console.log(bump('nnnnnnnnn_________nnnnnnn'))

}
