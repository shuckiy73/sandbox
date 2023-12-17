// ОПИСАНИЕ:
// Это ката предназначено для проверки вашей способности расширять функциональность встроенных классов. В этом случае мы хотим, чтобы вы расширили встроенный Array класс следующими методами: square(), cube(), average(), sum() even(), odd() и....

// Объяснение:

// square() должен возвращать копию массива, содержащую все значения в квадрате
// cube() должен возвращать копию массива, содержащую все значения в кубическом формате
// average() должно возвращать среднее значение всех значений массива; должен возвращаться пустой массив NaN (примечание: пустой массив не тестируется в Ruby!)
// sum() должен возвращать сумму всех значений массива
// even() должен возвращать массив всех четных чисел
// odd() должен возвращать массив всех нечетных чисел
// Примечание: исходный массив нельзя изменять ни в коем случае!

// Пример
// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

Array.prototype.square = function() {
  return this.map(num => num * num);
};

Array.prototype.cube = function() {
  return this.map(num => num * num * num);
};

Array.prototype.average = function() {
  if (this.length === 0) return NaN;
  return this.sum() / this.length;
};

Array.prototype.sum = function() {
  return this.reduce((sum, num) => sum + num, 0);
};

Array.prototype.even = function() {
  return this.filter(num => num % 2 === 0);
};

Array.prototype.odd = function() {
  return this.filter(num => num % 2 !== 0);
};

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.square());  // [1, 4, 9, 16, 25]
console.log(numbers.cube());    // [1, 8, 27, 64, 125]
console.log(numbers.average()); // 3
console.log(numbers.sum());     // 15
console.log(numbers.even());    // [2, 4]
console.log(numbers.odd());     // [1, 3, 5]// TODO