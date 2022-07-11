//Задание 4.
//Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.

function Lamp(){
  this.Upit = 220,
  this.brightness =100

}

const LampDiod = new Lamp();
LampDiod.Energy = 10;
LampDiod.getEnergy =function () {
 return(`Energy- ${LampDiod.Energy}`)

}

const LampLowEnergy = new Lamp();
LampLowEnergy.Energy = 25;
LampLowEnergy.getEnergy =function () {
 return(`Energy- ${LampDiod.Energy}`)

}

const LampClassic = new Lamp();
LampClassic.Energy = 100;
LampClassic.getEnergy =function () {
 return(`Energy- ${LampDiod.Energy}`)

}

console.log(`Диодная лампа U питания-${LampDiod.Upit} вольт, Яркость-${LampDiod.brightness} Люкс, Потребляемая мощность-${LampDiod.Energy} Вт`);
console.log(`Энергосберегающая лампа U питания-${LampLowEnergy.Upit} вольт, Яркость-${LampLowEnergy.brightness} Люкс, Потребляемая мощность-${LampLowEnergy.Energy} Вт`);
console.log(`Классическая лампа U питания-${LampClassic.Upit} вольт, Яркость-${LampClassic.brightness} Люкс, Потребляемая мощность-${LampClassic.Energy} Вт`);

console.log(LampDiod.getEnergy());