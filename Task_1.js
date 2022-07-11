//Задание 1.
//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения
//только собственных свойств. Данная функция не должна возвращать значение.

const obj1 = {a: 1, b: 2};
let r='qwer';

key_values (obj1)
key_values (r)

function key_values (obj) {

  if (typeof obj === 'object'){
     for(let key in obj){
       console.log(`Key-${key} Values-${obj[key]}`);
     }
    out="OKI";
  }
  else {
   console.log('Data error');
  }
  return;

}