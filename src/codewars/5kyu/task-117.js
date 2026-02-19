// Source: src/codewars.js
// Task: 117
// Inferred kyu: 5kyu

    //Задача 117
    // Напишите функцию, которая получает URL в виде строки, извлекает только имя домена и возвращает его в виде строки. Например:
    // url = "http://github.com/carbonfive/raygun" -> имя домена = "github"
    // url = "http://www.zombie-bites.com" -> имя домена = "zombie-bites"
    // url = "https://www.cnet.com" -> имя домена = "cnet"

    function domainName(url) {
        return url.replace(/https?:\/\/(www\.)?/, '').replace(/\.\w+$/, '')
    }
