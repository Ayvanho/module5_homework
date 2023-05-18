# module5_homework
1
РАБОТАЛ НЕ ИЗ ДОМА НЕ МОГ ВСЕ ОФОРМИТЬ

1
let value = prompt('Введите значение');

if(isNaN(+value)) {
console.log('Упс, кажется, вы ошиблись');
} else {
let number = +value;
if(number % 2 === 0) {
console.log('Чётное число');
} else {
console.log('Нечётное число');
}
}
2
// случай, когда x — число
let x = 7;
if (typeof x === 'number') {
console.log('x — число');
} else if (typeof x === 'string') { // случай, когда x — строка
console.log('x — строка');
} else if (typeof x === 'boolean') { // случай, когда x — логический тип
console.log('x — логический тип');
} else {
console.log('Тип x не определен');
}


33
const str = "Hello";
const reversedStr = str.split("").reverse().join("");
console.log(reversedStr); // "olleH"
4
var randomNumber = Math.floor(Math.random() * 101);
5
const arr = [1, 2, 3, 4, 5];

console.log(`Количество элементов массива: ${arr.length}`);

arr.forEach((item) => {
  console.log(item);
});


6
const arr = [1, 1, 1, 1, 1];
let areAllElementsEqual = true;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] !== arr[0]) {
    areAllElementsEqual = false;
    break;
  }
}

console.log(areAllElementsEqual);



7
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, null, undefined, 'a', 'b', 'c'];

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (typeof element === 'number' && !isNaN(element)) {
    if (element === 0) {
      zeroCount++;
    } else if (element % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
}

console.log(`Количество четных элементов: ${evenCount}`);
console.log(`Количество нечетных элементов: ${oddCount}`);
console.log(`Количество нулевых элементов: ${zeroCount}`);



8

const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

for (let key of keys) {
  const value = myMap.get(key);
  console.log(`Ключ - ${key}, значение - ${value}`);
}
