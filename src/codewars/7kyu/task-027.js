// Source: src/codewars.js
// Task: 27
// Inferred kyu: 7kyu

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
