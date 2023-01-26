// Создаём объект car

const car = {
  manufacturer: 'Ford',
  model: 'Kuga',
  color: 'brown',
  year: 2017
};

// Функция (вариант 1), выводящая в консоль ключи и значения собственных свойств объекта, переданного в качестве аргумента

function displayOne (obj) {
  for (const key in obj) {
    console.log('Ключ: ' + key + ', значение: ' + obj[key]);
  }
}

// Функция (вариант 2)

function displayTwo (obj) {
  console.log('\n' + 'Ключи: ' + Object.keys(obj));
  console.log('Значения: ' + Object.values(obj));
}

// Вызовем функции displayOne и displayTwo

displayOne(car);
displayTwo(car);
