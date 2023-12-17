// ОПИСАНИЕ:
// В этом ката вы должны просто определить, является ли данный год високосным или нет. На случай, если вы не знаете правил, вот они:

// Годы, кратные 4, являются високосными,
// но годы, кратные 100, не являются високосными,
// но годы, кратные 400, являются високосными.
// Годы тестирования находятся в пределах допустимого 1600 ≤ year ≤ 4000.


function isLeapYear(year) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isLeapYear(1996)); // true
  console.log(isLeapYear(1900)); // false
  console.log(isLeapYear(2000)); // true
  console.log(isLeapYear(2001)); // false