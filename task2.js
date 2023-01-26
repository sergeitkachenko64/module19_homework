// Задаём две строки (для разнообразия) и объект

const str1 = 'color';
const str2 = 'engine';

const car = {
  manufacturer: 'Ford',
  model: 'Kuga',
  color: 'brown',
  year: 2017
};

// Пишем функцию, проверяющую наличие (true) или отсутствие (false) свойства объекта car с именем, указанным в строке

function compare (obj, str) {
  console.log(str in obj);
}

// Вызовем функцию compare для str1 и str2

compare(car, str1);
compare(car, str2);
