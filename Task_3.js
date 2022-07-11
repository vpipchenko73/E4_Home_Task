//Задание 3.
//Написать функцию, которая создает пустой объект, но без прототипа.

daz= Greate_OBJ();
daz.q='qwert';
daz.s=12;

console.log(daz);

function Greate_OBJ(){
  var that = {};
  return that;
}