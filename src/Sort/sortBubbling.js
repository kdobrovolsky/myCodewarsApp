//Вариант 1(стандартный)
function bubbleSortSimple(arr){
  const n = arr.length;

  for(let i = 0; i < n; i++){
      for(let j = 0; j < n-1; j++){
          if(arr[j] > arr[j+1]){
              const temp = arr[j]
              arr[j] = arr[j+1];
              arr[j+1] = temp;
          }
      }
  }
  return arr
}

//Вариант 2(оптимизированный. Сортировка идет с конца массива и делает меньше проходов)
function bubbleSortSimple2(arr){
    for(let j = arr.length-1; j > 0; j--){
        for(let i = 0; i< j; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp;
            }
        }

    }
    return arr
}

//Вариант 3 с сохранением каждой итерации

function bubbleSortSimple3(arr){
    const n = arr.length;
    const steps = []; // Массив для хранения всех состояний

    // Создаем копию, чтобы не мутировать исходный
    const sorted = [...arr];

    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - i - 1; j++){
            if(sorted[j] > sorted[j+1]){
                // Меняем местами
                [sorted[j], sorted[j+1]] = [sorted[j+1], sorted[j]];
            }
        }

        // После каждого прохода внешнего цикла
        // сохраняем КОПИЮ текущего состояния
        steps.push([...sorted]);
    }

    return steps;
}

console.log(bubbleSortSimple3([544, 2, 545, 45]));

//Вариант 4 сортировка по age

function bubbleSortObjects(arr, key) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j][key] > arr[j + 1][key]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

const users = [
    { name: 'Анна', age: 25 },
    { name: 'Иван', age: 30 },
    { name: 'Мария', age: 22 },
    { name: 'Петр', age: 28 }
];

console.log('Сортировка по возрасту:');
console.log(bubbleSortObjects([...users], 'age'));