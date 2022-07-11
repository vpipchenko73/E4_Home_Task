//Задание 2.
//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли
//у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const obj1 = {a: 1, b: 2, c:'privet'};
let r="c";
let z="r"
let s=3

console.log (in_objects (r, obj1));
console.log (in_objects (z, obj1));
console.log (in_objects (s, obj1));


function in_objects (str, obj) {
  let rez = false;
  if (typeof str === 'string' && typeof obj === 'object'){
    rez = str in obj;
  }
  else{
    console.log("Data error");
    return;
  }
  return rez;

}