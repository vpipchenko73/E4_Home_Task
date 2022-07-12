//Задание 5.
//Переписать консольное приложение из предыдущего юнита на классы.

class Lamp {
 constructor() {
 this.Upit = 220;
 this.brightness =100;

 }
}

class LampDiod extends Lamp {
     constructor(Upit, brightness){
         super(Upit);
         this.Energy = 10;
     }
     getInfoPower() {
         return `Energy- ${this.Energy}`
  }
}

class LampLowEnergy extends Lamp {
     constructor(Upit, brightness){
         super(Upit);
         this.Energy = 25;
     }
     getInfoPower() {
         return `Energy- ${this.Energy}`
  }
}

class LampClassic extends Lamp {
     constructor(Upit, brightness){
         super(Upit);
         this.Energy = 100;
     }
     getInfoPower() {
         return `Energy- ${this.Energy}`
  }
}

const LD = new LampDiod;
const LL = new LampLowEnergy;
const LC = new LampClassic;


console.log(`Диодная лампа U питания-${LD.Upit} вольт, Яркость-${LD.brightness} Люкс, Потребляемая мощность-${LD.Energy} Вт`);
console.log(`Диодная лампа U питания-${LL.Upit} вольт, Яркость-${LL.brightness} Люкс, Потребляемая мощность-${LL.Energy} Вт`);
console.log(`Диодная лампа U питания-${LC.Upit} вольт, Яркость-${LC.brightness} Люкс, Потребляемая мощность-${LC.Energy} Вт`);

console.log(LD.getInfoPower());
