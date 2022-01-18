// 2. Variable 변수
// let (ES6부터 추가)

let globalName = 'global name'; // 전역 변수 (global variable)
{
  let Name = 'ellie'; // 지역 변수 (local variable)
  console.log(Name);
  Name = 'hello';
  console.log(Name); // hello
  console.log(globalName); // global name
}
console.log(Name); // error
console.log(globalName); // global name
// var (쓰지마세요!)
// var hoisting (어디에 썼는가에 상관없이 맨 위로 끌어올려 함수가 작동하도록 해주는 것)
// var는 지역 변수를 사용할 수 없다
age = 4;
console.log(age); // 4
var age;
console.log(age); // 4

// 3. Constant
// 변수값 변경 불가, 변수가 아닌 상수
const daysInWeek = 7;
const maxNumber = 5;

// Immutable data types: primitive types, frozen objects (i.e. object.freeze()) 바꿀 수 없는 것
// Mutable dat types: all objects by default are mutable in JS 바꿀 수 있는 것

// 4. Variable types 
// item : number, string, boolean, null, undefined, symbol
// object - item을 한번에 관리

// number type
const infinity = 1 / 0; // Infinity
const negativeInfinity = -1 / 0; // -Infinity
const nAn = 'not a number' // NaN

// string type
const char = 'c'; // c
const brendan = 'brendan'; // brendan
const greeting = 'hello' + brendan; // hello brendan
const helloBob = `hi ${brendan}!`; // hi brendan! 

// boolean type
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true; // true
const test = 3 < 1; // false

// null
// 변수의 값을 빈 상태로 만든다
let nothing = null; // null

// undefined
// 변수명은 생성되었지만 안에 값이 없는 경우
let x; // undefined

// symbol
// 맵이나 다른 자료구조에서 고유의 식별자료가 필요한 경우 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol === symbol2); //false

//같은 string으로 묶이길 원하는 경우
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true

// symbol의 값을 출력하고 싶을땐 변수명 뒤 .description 추가
console.log(gSybol1.description); // id

// 5. Dynamic typing
let text = 'hello'; // type : string
text = 1; // type : number로 변경
text = '7' + 5 // 75(type : string으로 변경 )
text = '8' / '2'; // 4(문자를 나눌수 없어 자동으로 type : number로 변경)
