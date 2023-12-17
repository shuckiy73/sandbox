// ОПИСАНИЕ:
// Ого, кто-то в офисе уронил все эти последовательности на пол и забыл пометить их правильными основаниями.

// Мы должны исправить это до возвращения босса, иначе нас всех уволят!

// Вот к чему привели годы вашего кодирования, сейчас ваше время блистать!

// Задание
// Вам нужно будет создать функцию, которая принимает последовательность чисел в случайном порядке, и вам нужно будет вернуть правильное основание этих чисел.

// Основой является количество уникальных цифр. Например, число с основанием 10 может содержать 10 уникальных цифр: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 а число с основанием 2 (двоичное) может содержать 2 уникальные цифры: 0 и 1.

// Ограничения
// Последовательность всегда будет состоять из 10 чисел, и мы знаем, что основа будет от 2 до 10 включительно, поэтому не нужно беспокоиться ни о каких буквах. При сортировке последовательность состоит из последовательных чисел.

// Примеры
// [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ]     -->  10
// [ "1", "2", "3", "4", "5", "6", "10", "11", "12", "13" ]  -->   7
// Удачи!

function baseFinder(seq) {
    seq.sort((a, b) => a - b);
  
    const joinedSeq = seq.join('');
  
    const uniqueDigits = new Set(joinedSeq).size;
  
    return uniqueDigits;
  }