'use strict';
// class: template

// 1. Class declarations 클래스 선언
class Person {
  // constructot 생성자
  constructor(name, age) {
    // field
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person ('ellie', 20);
console.log(ellie.name); // ellie
console.log(ellie.age); // 20
ellie.speak(); // ellie: hello!

// 2. Getter & setters 
class User {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    // return this.age; 안에 변수명이 같으면 계속해서 콜백해주는 현상이 일어남
    return this._age;
  }

  set age(value) {
    // this.age = value; 안에 변수명이 같으면 계속해서 콜백해주는 현상이 일어남
    this._age = value < 0 ? 0 : value; // 0미만의 값이 나오지 않도록 set해준다
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Field (public, private)
class Experiment {
  publicField = 2; // 일반 정의
  #privateField = 0; // #붙이면 숨겨진 정의
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// 정보에 상관없이 고정된 값
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.articleNumber);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance 상속 & 다양성
class Shape {
  constructor (width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} // extends를 이용해 Shape를 연장함
class Triangle extends Shape {
  draw() {
    super.draw(); // 상속받은 값도 유지하고 새로운 값도 입력하는 방법
    console.log('nice!');
  }
  getArea() {
    return (this.width * this.height) / 2;
  } // 틀은 유지한 채 필요한 함수를 적용하면 된다!
  toString() {
    return `Triangle: color: ${this.color}`
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// Object가 Class를 이용해서 만든 값인지 아닌지 체크
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
// 모든 object는 Object에 상속
// 의미 있게 사용하고 싶다면 내제된 함수 toString을 이용하여 자세히 설명해주기
console.log(triangle instanceof Object); // true 

// object의 자세한 내용은 MDN web docs - JavaScript reference 참고