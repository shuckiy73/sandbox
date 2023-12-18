// Контрольная сумма - это алгоритм, который сканирует пакет данных и возвращает единственное число. Идея заключается в том, что при изменении пакета контрольная сумма также изменится, поэтому контрольные суммы часто используются для обнаружения ошибок при передаче, проверки содержимого документа и во многих других ситуациях, когда необходимо обнаружить нежелательные изменения в данных.

// Для решения этой проблемы вы реализуете алгоритм проверки суммы, называемый Quicksum. Пакет Quicksum допускает использование только заглавных букв и пробелов. Он всегда начинается и заканчивается заглавной буквой.

// В противном случае пробелы и заглавные буквы могут встречаться в любой комбинации, включая последовательные пробелы.

// Quicksum - это сумма произведений позиции каждого символа в пакете на значение символа. Пробел имеет нулевое значение, в то время как буквы имеют значение, равное их положению в алфавите.

// Итак, A = 1, B = 2 и т.д., через Z = 26. Вот примеры вычислений Quicksum для пакетов "ACM" и "A C M":

// ACM
// 1 × 1 + 2 × 3 + 3 × 13 = 46 

// A C M
// 1 x 1 + 3 x 3 + 5 * 13 = 75
// Если в пакете нет только заглавных букв и пробелов или просто пробелов, результат для quicksum должен быть равен нулю (0).

// AbqTH #5 = 0




function quicksum(packet) {
    let result = 0;
  
    if (/^[A-Z]$/.test(packet.charAt(0)) && /^[A-Z]$/.test(packet.charAt(packet.length - 1))) {
      for (let i = 0; i < packet.length; i++) {
        let char = packet.charAt(i);
  
        if (/^[A-Z\s]$/.test(char)) {
          if (char !== ' ') {
            let charValue = char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
            result += (i + 1) * charValue;
          }
        } else {
          result = 0;
          break;
        }
      }
    }
  
    return result;
  }
  
  console.log(quicksum("ACM"));      
  console.log(quicksum("A C M"));   
  console.log(quicksum("AbqTH #5")); 