// Напишем код из предыдущего задания через класс

class Device {
  constructor(name) {
    this.kind = 'Электроприбор ';
    this.voltage = 220;
    this.name = name;
  }
  turnedOn(name, turnedOn, strength) {
    let power = Math.round(this.voltage * strength);
    let str = this.kind + name + ' на ' + this.voltage + ' Вольт ';
    if (turnedOn) {
      return str + 'включен в розетку и потребляет ' + power + ' Ватт.';
    } else {
      return str + 'выключен из розетки.';
    }
  }
};

console.log(new Device('conditioner').turnedOn('кондиционер', true, 10));
console.log(new Device('freezer').turnedOn('морозилка', false, 4));