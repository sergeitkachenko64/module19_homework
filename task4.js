// Напишем функцию-конструктор объекта

function Device(name) {
  this.kind = 'Электроприбор ';
  this.voltage = 220;
  this.name = name
};

// Добавим новые свойства strength (сила тока, по которой вычислим потребляемую мощность)
// и turnedOn (вкл./выкл.) в объект Device, остальные будут унаследованы у прототипа

Device.prototype.turnedOn = function (name, turnedOn, strength) {
  let power = Math.round(this.voltage * strength);
  if (turnedOn === true) {
    console.log(this.kind + name + ' на ' + this.voltage + ' Вольт ' + 'включен в розетку' + ' и потребляет ' + power + ' Ватт.')
  } else {
    console.log(this.kind + name + ' на ' + this.voltage + ' Вольт ' + 'выключен из розетки.' + '\n')
  }
};

const computer = new Device('computer');
const lamp = new Device('lamp');

computer.turnedOn('компьютер', true, 1.6);
lamp.turnedOn('лампочка', false, 0.275);

// Всё то же самое через создание делегирующей связи

function NewDevice(name, turnedOn, strength) {
  let power = Math.round(this.voltage * strength);
  if (turnedOn === true) {
    console.log(this.kind + name + ' на ' + this.voltage + ' Вольт ' + 'включен в розетку' + ' и потребляет ' + power + ' Ватт.')
  } else {
    console.log(this.kind + name + ' на ' + this.voltage + ' Вольт ' + 'выключен из розетки.')
  }
}

NewDevice.prototype = new Device();

const conditioner = new NewDevice('кондиционер', true, 10);
const freezer = new NewDevice('морозилка', false, 4);

