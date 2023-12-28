# JS-Bajic

JavaScript Learning

## 2.0번 강의

브라우저 -> HTML -> CSS, JS
alert(""); //알림창 띄우기

<link rel="stylesheet" href="style.css" /> // css 파일 블러오기 (단측 link:css) -head에 쓰기
<script src="app.js"></script> //자바 스크립트 파일 블러오기 -body에 쓰기

//예제
alert("hi"); //알림창에 hi 띄우기

## 2.1번 강의

자바스크립트는 데이터 타입을 알아서 인식함

데이터 타입에는 integer, float, string 등이 있음

## 2.2번 강의

console.log(); //콘솔에 값이나 연산 띄우기

const 변수명 = 값 //변하지 않는 값, 변수 선언에 사용, 재정의 불가능

값 != "값" // integer 또는 float != string 같지않다

const veryLongVariableName = 0; //변수명에 공백이 필요할 때에는 대문자로 대체함

const very_long_variable_name = 0; //파이썬은 밑줄

//예제

console.log(54545454); // 콘솔에 54545454 출력, 54545454 = integer

console.log("lalalalalala"); //콘솔에 lalalalalala 출력, lalalalalala = string

const a = 5; // a 는 5 라는 변수 선언
const b = 2; // b 는 2 라는 변수 선언
const veryLongVariableName = 0; // veryLongVariableName 는 0 이라는 변수 선언

const myName = "mayu"; // myName 은 "mayu" 라는 변수 선언

console.log(a + b); // 변수 a(=5) 와 b(=2) 연산 결과 출력
console.log(a \* b); // 변수 a(=5) 와 b(=2) 연산 결과 출력
console.log(a / b); // 변수 a(=5) 와 b(=2) 연산 결과 출력
console.log("hello " + myName); // "hello" 와 myName(="mayu") 합친 결과 출력

## 2.3번 강의

let 변수명 = 값 //변수 선언에 사용, 값 재정의 가능 != const

const 변수명 = 값 //변하지 않는 값, 변수 선언에 사용, 재정의 불가능

const a = 5; // 바뀌지 않을 값이라고 알 수 있음, 코드 의도 파악 용이, 대부분 const 사용
let myName = "mayu"; // 바뀔 값이라고 알 수 있음, 값 재정의가 필요할 때에만 사용

var 변수명 = 값 // 제한은 없지만 보호받을 수 없음, 사용하지 말 것, 예전 자바스크립트 언어

//예제

const a = 5; // a 는 5 라는 변수 선언, 재정의 불가능
const b = 2; // b 는 2 라는 변수 선언, 재정의 불가능
let myName = "mayu"; // myName 은 "mayu" 라는 변수 선언, 재정의 가능

console.log("hello " + myName); //"hello" 와 myName(="mayu") 합친 결과 출력

myName = "kimmayu"; // myName 의 데이터를 "kimmayu" 로 재정의

console.log("your new name is " + myName); // "your new name is " 와 myName(="kimmayu") 합친 결과 출력

## 2.4번 강의

Boolean // 참과 거짓을 가짐(1, 0 / true, false)

const 변수명 = true; // 변수에 참을 정의함, 데이터 타입
const 변수명 = false; // 변수에 거짓을 정의함, 데이터 타입

null // 정의되지 않음, 값이 존재하지 않음, 자연적으로 발생하지 않음, 값을 비워놓은 상태, 의도적, 데이터 타입 (파이썬에서는 None)

let 변수명; // 변수를 선언할 때에 값을 지정하지 않으면
undefined // 가 선언됨, 변수는 있지만 정의되지 않음, 공간은 있는데 값이 들어가지 않음, 자연적으로 발생함, 데이터 타입

//예제
const amIFat = true; // 변수 amIFat 을 참으로 정의함
const amIFat = false; // 변수 amIFat 을 참으로 정의함
const amIFat = null; // 변수 amIFat 을 null(값을 비워놓은 상태) 으로 정의함

let something; // 변수 something 을 값 없이 정의함

console.log(something); // 변수 something 출력, something 을 값 없이 정의했으므로 undefined 가 출력됨

## 2.5번 강의

const 리스트명 = [요소들]; //리스트, array, 데이터 타입 상관없이 정의 가능, 대괄호 사용, 요소들은 쉼표로 분리

console.log(리스트명); // 리스트를 출력함

console.log(리스트명[출력하려는 데이터의 순서값]); // 리스트 안의 순서값 순서의 값을 출력함, 순서값에 정의된 순서에 데이터가 없을 경우 undefined 가 출력됨

리스트명.push(데이터); // 리스트에 데이터 추가

//예제

const mon = "mon"; //변수 mon 에 "mon" 을 정의
const tue = "tue"; //변수 tue 에 "tue" 을 정의
const wed = "wed"; //변수 wed 에 "wed" 을 정의
const thu = "thu"; //변수 thu 에 "thu" 을 정의
const fri = "fri"; //변수 fri 에 "fri" 을 정의
const sat = "sat"; //변수 sat 에 "sat" 을 정의
const sun = "sun"; //변수 sun 에 "sun" 을 정의

const dayOfWeek = mon + tue + wed + thu + fri + sat + sun; // dayOfWeek 에 "montuewedthufrisatsun" 를 정의함

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]; // 리스트 dayOfWeek 에 "mon", "tue", "wed", "thu", "fri", "sat", "sun" 을 정의

const nonsense = [1, 2, "hello" , false , null , true , undefined , "mayu"]; // 리스트 nonsense 에 1, 2, "hello" , false , null , true , undefined , "mayu" 를 정의

console.log(dayOfWeek[4]); // 리스트 dayOfWeek 의 4번째 함숫값인 "fri"가 출력됨

dayOfWeek.push("sun"); // 리스트 dayOfWeek 에 "sun" 을 추가함

console.log(dayOfWeek); // 리스트 dayOfWeek 에"sun" 이 추가된 ["mon", "tue", "wed", "thu", "fri", "sat", "sun", "sun"] 이 출력됨

const toBuy = ["potato", "tomato", "pizza"]; // 리스트 toBuy 에 "potato", "tomato", "pizza" 을 정의
toBuy.push("kimbab"); // 리스트 toBuy 에 "kimbab" 을 추가함
