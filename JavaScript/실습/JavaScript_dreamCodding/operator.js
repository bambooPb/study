// 1. String concatenation
console.log('my' + 'log'); // mylog
console.log('1' + 2); // 12
console.log(`string literals: 1 + 2 = ${1+2}`); // string literals: 1 + 2 = 3

console.log("ellie's book"); // ellie's book
console.log('ellie\'s book'); // ellie's book

// /n 줄바꿈 /t 탭 

// 2. Numeric operators
console.log(1 + 1); // 더하기
console.log(1 - 1); // 빼기
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱하기
console.log(5 % 2); // 나머지
console.log(2 ** 3); // 제곱

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;

const postIncrement = counter++;
// preIncrement = counter;
// counter = counter + 1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y; x = 9
x -= y; // x = x - y; x = -3
x *= y; // x = x * y; x = 18
x /= y; // x = x / y; x = 0.5

// 5. Comparison oprators 비교 연산자
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: || (or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`);

// && (and)
console.log(`or: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time 시간 지체후 true으로 반환
    console.log('죄송합니다')
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality 타입을 변경해서 검사
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality 타입까지 신경써서 검사
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = { nick: 'ellie'};
const ellie2 = { nick: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false 다른 reference에 저장되어 있어서
console.log(ellie1 === ellie2); // false 다른 reference에 저장되어 있어서
console.log(ellie1 === ellie3); // true 같은 reference에 저장되어 있어서

// equality - puzzler
console.log(0 == false); // true 0은 boolean에선 false
console.log(0 === false); // false 타입이 다름
console.log('' == false); // true ''은 boolean에선 false
console.log('' === false); // false 타입이 다름
console.log(null == undefined); // true boolean에선 false로 간주됨
console.log(null === undefined); // false 타입이 다름

// 8. Conditional operators: if
// if, else if, else
const nameB = 'coder'
if (nameB === 'ellie') {
  console.log('Welcome, Ellie!')
} else if (nameB === 'coder') {
  console.log('U R amazing coder');
} else {
  console.log('unknown');
}

// 9. Teranry operator: ?
// condition ? value1 : value2;
console.log(nameB === 'ellie' ? 'yes' : 'no'); // no

// 10. Switch statement
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox': // 같은 문구일때는 붙여서 사용 가능
    console.log('love you!');
    break;
  default: // 기본값
    console.log('same all!');
    break;
}

// 11. Loops
// while loop
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

//do while loop
// 현재 i = 0;
// 숫자를 줄이기 전 값을 반환하고 값을 줄인다
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0); 

// for loop
for ( i = 3; i > 0; i--){
  console.log(`for: ${i}`);
}

for ( let i = 3; i > 0; i--){
  console.log(`for: ${i}`);
}

// nested loop
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}
// i가 하나 실행되면 안에 j를 끝까지 실행시키고 그다음 i를 실행시키고 j를 끝까지 실행시키는 방식

// break, continue
//Q1
for(let i = 0; i < 11; i++){
  if( i % 2 !== 0){
    continue;
  }
  console.log(i);
}

//Q2
for(let i = 0; i < 11; i++){
  if(i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}