// Source: src/codewars.js
// Task: 124
// Inferred kyu: 8kyu

    //Задача 124 Найти максимальное число в массиве

    const maxCount = (arr) => {
        let result = arr[0]

        for (let num of arr) {
            if (num > result) {
                result = num
            }
        }
        return result;
    }

    //Задачи на тему this
    //Написать counter
    function Counter() {
        this.value = 0
        this.inc = function () {
            this.value++
        }
        this.dec = function () {
            this.value--
        }
        this.get = function () {
            return this.value
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
