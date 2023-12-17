// ОПИСАНИЕ:
// Напишите функцию, которая принимает список по крайней мере из четырех элементов в качестве аргумента и возвращает список из двух или трех средних элементов в обратном порядке.

function reverseMiddle(array) {
    if (array.length < 4) {
      throw new Error('Array must have at least four elements.');
    }
  
    let startIndex, elementsToTake;
    if (array.length % 2 === 0) {
      startIndex = array.length / 2 - 1;
      elementsToTake = 2;
    } else {
      startIndex = Math.floor(array.length / 2) - 1;
      elementsToTake = 3;
    }
  
    return array.slice(startIndex, startIndex + elementsToTake).reverse();
  }
  
  let result = reverseMiddle([1, 2, 3, 4, 5, 6]);
  console.log(result); 
  
  result = reverseMiddle([1, 2, 3, 4, 5, 6, 7]);
  console.log(result); 