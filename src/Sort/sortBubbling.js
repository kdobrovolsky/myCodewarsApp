
function bubbleSortSimple(arr){
  const n = arr.length;

  for(let i = 0; i < n; i++){
      for(let j = 0; j < n-1; j++){
          if(arr[j] > arr[j-1]){
              const temp = arr[j]
              arr[j] = arr[j-1];
              arr[j-1] = temp;
          }
      }
  }
  return arr
}

console.log(bubbleSortSimple([1,267,342,8,5,6]));