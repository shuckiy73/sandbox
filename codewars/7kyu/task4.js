// ОПИСАНИЕ:
// Напишите функцию, которая отображает функцию поверх списков в списке:

function gridMap(fn, xss) {
    return xss.map(xs => xs.map(fn));
  }
  
  const xss1 = [[1, 2, 3], [4, 5, 6]];
  
  console.log(gridMap(x => x + 1, xss1));
  // Output: [[2, 3, 4], [5, 6, 7]]
  
  console.log(gridMap(x => x ** 2, xss1));
  // Output: [[1, 4, 9], [16, 25, 36]]
  
  const xss2 = [['h', 'E', 'l', 'l', 'O'], ['w', 'O', 'r', 'L', 'd']];
  
  console.log(gridMap(x => x.toUpperCase(), xss2));