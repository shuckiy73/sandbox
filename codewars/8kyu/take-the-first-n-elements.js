// DESCRIPTION
// Создаем функцию, которая принимает список / массив и число n, и возвращает список / массив первых n элементов из списка / массива.

// SOLUTION

function take(arr, n) {
    return arr.slice(0, n);
  }

  let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = take(myArray, 3);
console.log(result);  