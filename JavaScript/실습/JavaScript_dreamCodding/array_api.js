'use strict'

// Q1. make a string out of an array 배열을 스트링으로 만들기
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(); // 빈칸이면 ","삽입
  console.log(result); // apple, banana, orange
  const result2 = fruits.join("-");
  console.log(result); // apple-banana-orange
}

// Q2. make an array out of a string 스트링을 배열로 만들기
{
  const fruits = 'apple, kiwi, banana, cherry'
  const result = fruits.split(',');
  console.log(result); // ['apple', 'kiwi', 'banana', 'cherry']
  const result2 = fruits.split();
  console.log(result2); // ['apple, kiwi, banana, cherry']
  const result3 = fruits.split(',', 2); // 뒷숫자만큼만 배열을 입력받음
  console.log(result3); // ['apple', 'kiwi']
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const reverseNum = array.reverse();
  console.log(reverseNum); // [5, 4, 3, 2, 1]
  console.log(array); // [5, 4, 3, 2, 1] 위에 지정된 값도 같이 바뀐다
}

// Q4-1. make new array without the first two elements 1,2번째 배열을 제외한 나머지값 만들기
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(2, 4);
  console.log(result); // [3, 4, 5] 앞: 지정한 인덱스 번호 뒷: 지정한 인덱스 번호까지 자름
  console.log(array); // [1, 2] 자르고 남은 값만 반환
}

// Q4-2. make new array without the first two elements 1,2번째 배열을 제외한 나머지값 만들기
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result); // [3, 4, 5] 지정한 앞번호부터 지정한 뒷번호 전까지 값 반환
  console.log(array); // [1, 2, 3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with score 90 90인 학생을 찾으세요
// find(): 조건에 부합하는 배열을 찾을 때 사용
{
  // 일반식
  //  const result = students.find(function(student){
    //   return student.score === 90;
    // });
  // 화살표 함수
  // const result = students.find(student => {
  //   return student.score === 90;
  // });
  // 화살표 한줄 생략식
  const result = students.find(student => student.score === 90);
  console.log(result); // {'C', 30, true, 90}
}

// Q6. make an array of enrolled students 조건에 맞는 배열만 불러오기
// filter(): 조건에 부합하는 배열을 찾을 때 사용(여러개)
{
  const result = students.filter(student => student.enrolled);
  console.log(result); // {'A', 29, true, 45}, {'C', 30, true, 90}, {'E', 18, true, 88}
}

// Q7. make an array containing only the students' scores 학생들의 점수만 빼오기
// result shoud be: [45, 80, 90, 66, 88]
// map(): 원하는 값만 빼와 배열을 만들때 사용
{
  const result = students.map(student => student.score);
  console.log(result); // [45, 80, 90, 66, 88]
}

// Q8. check if there is a student with score lower than 50 점수가 50보다 작은 학생이 있는지 확인
// some(): 하나라도 조건에 부합하는 것 찾을 때 사용
// every(): 모두 조건에 부합하는지 찾을 때 사용
{
  const result = students.some(student => student.score < 50);
  console.log(result); // true 50점보다 낮은 학생이 있다

  const result2 = students.every(student => student.score >= 50);
  const result3 = !students.every(student => student.score >= 50);
  console.log(result2); // false 모든학생이 50보다 높거나 같진 않다
  console.log(result3); // true 모든학생이 50보다 높거나 같지 않지 않음을 물어 true값을 반환
}

// Q9. compute students' average score 학생들의 평균 점수 구하기
// reduce(): 값의 누적치를 구할 때 사용
{
  const result = students.reduce((prev, curr) =>{
    return prev + curr.score;
  }, 0);
  console.log(result); // 369
  console.log(result / students.length) // 73.8
}

// Q10. make a string containing all the scores 점수를 빼와 스트링으로 만들기
{
  // const result = students.map(student => student.score)
  // const resultStr = result.join();
  // console.log(resultStr); // 45,80,90,66,88
  // 간략하게 작성 가능
  const result = students
    .map(student => student.score)
    .filter(score => score >= 50)
    .join();
  console.log(result); // 80,90,66,88
}

// Bonus! do Q10 sorted in ascending order
// result should be : '45, 66, 80, 88, 90'
{
  const result = students
    .map(student => student.score)
    //.sort((a, b) => b - a) // 오름차순
    .sort((a, b) => a - b)
    .join();
  console.log(result); // 45, 66, 80, 88, 90
}