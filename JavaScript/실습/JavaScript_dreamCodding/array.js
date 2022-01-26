'use strict';

// Array

// 1. Declaration 선언 방법
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]) // banana 제일 마지막 인덱스 불러오는 법

// 3. Looping over an array 인덱스값 연속해서 불러오기
// for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for of
for(let fruit of fruits) {
  console.log(fruits);
}

// forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end 맨 마지막에 배열 추가하기
fruits.push('strowberry', 'peach');
console.log(fruits); // ['apple', 'banana', 'strowberry', 'peach']

// pop: remove an item from the end 맨 마지막에 배열 삭제하기
fruits.pop();
fruits.pop();
console.log(fruits); // ['apple', 'banana']

// unshift: add an item to the beginning 맨 앞에 배열 추가하기
fruits.unshift('strowberry', 'lemon');
console.log(fruits); // ['strowberry', 'lemon', 'apple', 'banana']

// shift: remove an item from th beginning 맨 앞에 배열 삭제하기
fruits.shift();
fruits.shift();
console.log(fruits); // ['apple', 'banana']

// pop과 push보다  unshift와 shift가 작동 속도가 느리다
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits); // ['apple', 'banana', 'strowberry', 'peach', 'lemon']
//fruits.splice(1); 
//console.log(fruits); // ['apple']
fruits.splice(1, 1);
fruits.splice(1, 1, 'melon', 'orange'); // 삭제하고 그자리에 추가할 데이터 삽입 가능
console.log(fruits); // ['apple', 'melon', 'orange', 'peach', 'lemon']

// combine two arrays 두가지 배열을 합치기
const fruits2 = ['pear', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // ['apple', 'melon', 'orange', 'peach', 'lemon', 'pear', 'coconut']

// 5. Searching 검사
console.log(fruits); // ['apple', 'melon', 'orange', 'peach', 'lemon']
// indexOf
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.indexOf('orange')); // 2
console.log(fruits.indexOf('coconut')); // -1

//includes
console.log(fruits.includes('coconut')) // false
console.log(fruits.includes('melon')) // true

// lastIndexOf
console.log(fruits); // ['apple', 'melon', 'orange', 'peach', 'lemon']
fruits.push('apple'); // ['apple', 'melon', 'orange', 'peach', 'lemon', 'apple']
console.log(fruits);
console.log(fruits.indexOf('apple')); // 0 맨 앞 인덱스만 인식한다
console.log(fruits.lastIndexOf('apple')); // 5 그리하여 마지막 인덱스값을 얻기위해 lastIndexOf를 사용