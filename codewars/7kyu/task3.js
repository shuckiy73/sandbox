// ОПИСАНИЕ:
// Музей невероятных скучных вещей
// Музей невероятно скучных вещей хочет избавиться от некоторых выставок. Мириам, архитектор интерьеров, придумывает план удаления самых скучных выставок. Она присваивает им рейтинг, а затем удаляет тот, у которого рейтинг самый низкий.

// Однако, как только она закончила оценивать все выставки, она отправляется на важную выставку, поэтому она просит вас написать программу, которая сообщает ей рейтинги предметов после удаления самого низкого. Вполне справедливо.

// Задание
// Учитывая массив целых чисел, удалите наименьшее значение. Не изменяйте исходный массив / список. Если есть несколько элементов с одинаковым значением, удалите тот, у которого индекс меньше. Если вы получаете пустой массив / список, верните пустой массив / список.

// Не меняйте порядок оставшихся элементов.

// Примеры
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    if (numbers.length === 0) {
      return [];
    }
    const indexOfMin = numbers.indexOf(Math.min(...numbers));
    return numbers.slice(0, indexOfMin).concat(numbers.slice(indexOfMin + 1));
  }