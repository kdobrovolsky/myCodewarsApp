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
    if(n > 12 || n < 0 ) {
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

    function minMax(arr){
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
            if(strArr[i] === 'o'){
                countO++
            }else if(strArr[i] === 'x'){
                 countX++
            }
        }
        return countO === countX
    }

    //Задача найти факториал !5, решение с помощью рекурсии
    const foo = (n) => {

        if (n === 1) return 1
        return foo(n-1) * n
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

    function isTriangle(a,b,c)
    {

        if(a <= 0 || b <= 0 || c <= 0) return false

        if(a + b > c && a + c > b && b + c > a && b + c > a){
            return true
        }
        else{
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

        if(count % 2 === 1){ // нечетное
            return !value
        } else { // четное
            return !!value
        }
    }

    function negationValue2(string, value) {
        return string.length % 2 === 1? !value: !!value
    }

  //Задача 35
  //   Вам будет дан массив и предельное значение. Вы должны проверить,
  //       что все значения в массиве меньше или равны предельному значению.
  //       Если это так, верните true. В противном случае верните false.
  //       Можно предположить, что все значения в массиве являются числами.

    function smallEnough(a, limit){
        const numA = a.sort((a, b) => b-a)
        console.log(numA[0])
        if(numA[0] <= limit){
            return true
        }else {
            return false
        }
    }

    function smallEnough2(a, limit){
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
       if(numbers[0] !== numbers[1] && numbers[1] !== numbers[2]){
           return numbers[0]
       }
       for(let i = 1; i < numbers.length; i++){
           if(numbers[i] !== numbers[0]){
               return numbers[i]
           }
       }
    }

    //Задача 38
    // Вы спрашиваете маленькую девочку: "Сколько тебе лет?" Она всегда отвечает: "x years old", где x - случайное число от 0 до 9.
    // Напишите программу, которая возвращает возраст девочки (0-9) в виде целого числа.
    // Предполагается, что входная строка всегда является допустимой строкой. Например, входная строка может быть "1 year old" или "5 years old".
    // Первый символ в строке всегда является цифрой.

    function getAge(inputString){
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

    function dontGiveMeFive(start, end)
    {
        const arr = []
        for(let i = start; i <= end; i++){
            arr.push(i)
        }
        return arr.filter( number => !String(number).includes('5') ).length
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



    function spinWords(string){
        const arrString = string.split(' ');

        for(let i = 0; i < arrString.length; i++){
            if(arrString[i].length >= 5){
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

    function removeUrlAnchor(url){
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

    function gooseFilter (birds) {
        let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird => !geese.includes(bird) )

    }

    //Задача 49
    // Допиши решение так, чтобы оно сортировало переданный массив чисел. Если функция получает пустой массив или значение null/nil, то она должна возвращать пустой массив.
    //     Например:
    // solution([1, 2, 10, 50, 5]); // должна вернуть [1,2,5,10,50]
    // solution(null); // должна вернуть []

    function solution(nums){
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
        if(num < 10) return 0
       const res =  num.toString().split('').map(Number).reduce((a, b) => a * b);
       return 1 + persistence(res)
    }



    //Задача 52
    // Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку этих чисел в формате номера телефона.
    //     Пример
    // text
    // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => возвращает "(123) 456-7890"
    // Полученный формат должен быть правильным для выполнения этой задачи.
    //     Не забудьте пробел после закрывающей скобки!

    function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
    }

    function createPhoneNumber2(numbers){
        return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`;
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
        return array.map(t=> {
            if(t %2 !== 0 ){
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

    console.log(replacePrimes([1, 2, 3, 4, 5, 6]))

}


