// 1. function declaration 함수 정의
// fuction name(param1, param2) { body... return;}
// 함수는 object로 취급
function printHello() {
  console.log('Hello');
}
printHello();

// 밑에서 값을 입력하면 출력할 수 있게 하는 법
function log(message) {
  console.log(message);
}
log('hi');
log(1234);

// 2. Parameters
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie); // 함수에 이름을 'coder'로 하라고 입력했기때문에
console.log(ellie); // {name: 'coder'}

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');
// from값이 없을 땐 undefined 값이 뜨게 되는데 이전엔 if문을 사용하여 지정을 해야했지만 지금은 param옆에 ='값'을 이용할 수 있다

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // 위 식을 간단하게 적용(for...of문)
  for(const arg of args){
    console.log(arg);
  }

  // 위 식을 더 간단하게 적용(forEach문)
  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');
// parameter에 ...args를 사용하면 배열 형태로 전달

// 5. local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
}
printMessage();
// 밖에선 안 함수를 사용할 수 없고 안에서 밖 함수를 사용가능하다.

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, ealry exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    //코드
  }
}
// 10까지 도달할 때 시간이 소요됨

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // 코드
}

// 1. Function expression
const print = function (){ // anoymous function 이름없는 함수
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback fuction using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function (){
  console.log('yes!');
};

//named function
const printNo = function print(){
  console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// 변환 전
// const simplePrint = function () {
//   console.log('simplePrint!');
// };
// 변환 후
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};
// block scope를 사용할 땐 return값을 적어줘야한다!

simplePrint();

// IIFE: Immediately Invoked Function Expression
// 함수식을 쓰고 바로 출력하고 싶을 때 사용
(function hell(){
  console.log('IIFE');
})();

// quiz
function calculate(command, a, b){
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b; 
    case 'remainder':
      return a % b; 
    default:
      throw Error('unknown command');    
  }
}
console.log(calculate('add',2,3));
