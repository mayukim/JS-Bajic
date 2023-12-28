# JS-Bajic

JavaScript Learning

## 2.0번 강의

브라우저 -> HTML -> CSS, JS
alert(""); //알림창 띄우기

<link rel="stylesheet" href="style.css" /> // css 파일 블러오기 (단측 link:css) -head에 쓰기
<script src="app.js"></script> //자바 스크립트 파일 블러오기 -body에 쓰기

## 2.1번 강의

자바스크립트는 데이터 타입을 알아서 인식함

## 2.2번 강의

console.log(); //콘솔에 값이나 연산 띄우기

const 변수명 = 값 //변하지 않는 값, 변수 선언에 사용, 재정의 불가능

값 != "값"

const veryLongVariableName = 0; //변수명에 공백이 필요할 때에는 대문자로 대체함

const very_long_variable_name = 0; //파이썬은 밑줄

## 2.3번 강의

let 변수명 = 값 //변수 선언에 사용, 값 재정의 가능 != const

const 변수명 = 값 //변하지 않는 값, 변수 선언에 사용, 재정의 불가능

const a = 5; // 바뀌지 않을 값이라고 알 수 있음, 코드 의도 파악 용이, 대부분 const 사용
let myName = "mayu"; // 바뀔 값이라고 알 수 있음, 값 재정의가 필요할 때에만 사용

var 변수명 = 값// 제한은 없지만 보호받을 수 없음, 사용하지 말 것, 예전 자바스크립트 언어

## 2.4번 강의

Boolean // 참과 거짓을 가짐(1, 0 / true, false)

const 변수명 = true; // 변수에 참을 정의함, 데이터 타입
const 변수명 = false; // 변수에 거짓을 정의함, 데이터 타입

null // 정의되지 않음, 값이 존재하지 않음, 자연적으로 발생하지 않음, 데이터 타입 (파이썬에서는 None)

let 변수명; // 변수를 선언할 때에 값을 지정하지 않으면
undefined // 가 선언됨, 변수는 있지만 정의되지 않음, 공간은 있는데 값이 들어가지 않음, 자연적으로 발생함, 데이터 타입

## 2.5번 강의

const 변수명 = [요소들]; //array, 데이터 타입 상관없이 정의 가능, 대괄호 사용, 요소들은 쉼표로 분리

console.log(변수명[순서값]); // 변수명 array 안의 순서값 순서의 값을 출력함

array명.push(데이터); // array에 데아터 추가
