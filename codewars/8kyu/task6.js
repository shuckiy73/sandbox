// ОПИСАНИЕ:
// Напишите функцию, которая будет проверять, совпадают ли два заданных символа в одном регистре.

// Если какой-либо из символов не является буквой, верните -1
// Если оба символа имеют одинаковый регистр, верните 1
// Если оба символа являются буквами, но не в одном регистре, верните 0

function sameCase(a, b) {
    if (!isLetter(a) || !isLetter(b)) {
      return -1;
    }
    
    if (isUpperCase(a) === isUpperCase(b)) {
      return 1;
    } else {
      return 0;
    }
  }
  
  function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
  }
  
  function isUpperCase(char) {
    return char === char.toUpperCase();
  }