// Source: src/codewars.js
// Task: 24
// Inferred kyu: 8kyu

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
