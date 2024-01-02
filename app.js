// 2.0

// alert("hi");

// 2.2

// console.log(54545454);

// console.log("lalalalalala");

// console.log("lalalalalala");

// const a = 5;
// const b = 2;
// const veryLongVariableName = 0;

// const myName = "mayu";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

//2.3

// const a = 5;
// const b = 2;
// let myName = "mayu";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = "kimmayu";

// console.log("your new name is " + myName);

// const amIFat = null;

// let something;

// console.log(something);

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// const dayOfWeek = mon + tue + wed + thu + fri + sat + sun;

// const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const nonsense = [1,  2, "hello" , false , null , true , undefined , "mayu"];

// console.log(dayOfWeek[4]);

// dayOfWeek.push("sun");

// console.log(dayOfWeek);

// const toBuy = ["potato", "tomato", "pizza"];
// toBuy.push("kimbab");

// 2.6

// const playerName = "mayu";
// const playerPoints = 123456;
// const playerHandsome = true;
// const playerFat = "little bit";

// const playerList = ["mayu", 123456, true, "little bit"];

// //object 특성을 가짐 각요소에 특성 부여 = 대신 : 사용 각 요소 (특성 : 값) 는 property 콤마 , 로 구분 console.log = player.name 같은 구조 player.name = player["name"] 요소 재정의 가능 추가 가능

// const player = {
//     name: "mayu",
//     points: 10,
//     fat: true,
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// player.fat = false;

// player.lastName = "potato";

// 2.7

// function 계속 반복해서 쓸 수 있는 코드 조각, 코드 캡슐화 여러번 실행
// argument funtion을 실행하는 동안 funtion에게 정보를 보낼 수 있는 방법
// function sayHello() {
//     console.log("Hello my name is");
// }
// sayHello("mayu");

// 2.8
// 괄호 안에 변수명을 넣어 정보를 받음, 이 변수들은 함수 안에만 존재, 데이터를 보내지 않으면 undefined가 정의됨, 선언된 데이터 순서대로 변수에 정의됨

// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }
// sayHello("mayu", 18);
// sayHello("nico", 28);
// sayHello("lynn", 21);

// function plus(first, second) {
//     console.log(first, second);
// }
// console.log(first); // 에러
// function divide(a, b) {
//     console.log(a / b);
// }
// plus(60, 8);
// divide(98, 20);

// const player = {
//     sayHello: function (otherName) {
//         console.log("Hello " + otherName + " nice to meet you");
//     },
// };

// player.sayHello("lynn");
// player.sayHello("mayu");

// 2.11

// const calculator = {
//     plus: function (a, b) {
//         console.log(a + b);
//     },
//     minus: function (a, b) {
//         console.log(a - b);
//     },
//     times: function (a, b) {
//         console.log(a * b);
//     },
//     divide: function (a, b) {
//         console.log(a / b);
//     },
//     power: function (a, b) {
//         console.log(a ** b);
//     },
// };
// calculator.plus(2, 3);
// calculator.minus(2, 3);
// calculator.times(2, 3);
// calculator.divide(2, 3);
// calculator.power(2, 3);

// console.log 와 alert 등은 결과값을 남기지 않음, return (값을 반환받음) 사용

// const age = 96;
// function calculateKrAge(ofAge) {
//     return ofAge + 2;
// }

// const KrAge = calculateKrAge(age);

// console.log(KrAge);

// const calculator = {
//     plus: function (a, b) {
//         return a + b;
//     },
//     minus: function (a, b) {
//         return a - b;
//     },
//     times: function (a, b) {
//         return a * b;
//     },
//     divide: function (a, b) {
//         return a / b;
//     },
//     power: function (a, b) {
//         return a ** b;
//     },
// };
// const pResult = calculator.plus(2, 3);
// const mResult = calculator.minus(pResult, 10);
// const tResult = calculator.times(10, mResult);
// const dResult = calculator.divide(tResult, pResult);
// const pwResult = calculator.power(dResult, mResult);

// console.log(pwResult);

// 2.13

// const age = prompt("How old are you?");
// //prompt 값을 입력받을 때 까지 JS를 정지시킴, 사용하지 않음, CSS 적용 불가, string으로 받음
// // type of 타입 출력 명령
// //plaseInt string number로 바꾸기, stringdl 문자가 입력되면 NaN, 타입 변환
// console.log(age, parseInt(age));

// const age = parseInt(prompt("How old are you?"));

// console.log(age);

// 2.14

// const age = parseInt(prompt("How old are you?"));
// //isNaN 주어진 인자가 NaN인지 판별함, 결과는 boolean을 반환함

// if (isNaN(age)) {
//     console.log("Please write a number");
// } else {
//     console.log("Thank you for Writing your age.");
// }

// //2.15

// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age) || age < 0) {
//     console.log("Please write a real positive number"); // 연산자 || 하나 이상 참이면 참
// } else if (age < 18) {
//     console.log("You are too young");
// } else if (age >= 18 && age <= 50) {
//     console.log("You can drink");
// } else if (age > 50 && age <= 80) {
//     console.log("You should exercise");
// } else if (age > 80) {
//     console.log("You can do whatever you want");
// }

// 2.16

// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age) || age < 0) {
//     console.log("Please write a real positive number");
// } else if (age < 18) {
//     console.log("You are too young");
// } else if (age >= 18 && age <= 50) {
//     console.log("You can drink");
// } else if (age > 50 && age <= 80) {
//     console.log("You should exercise");
// } else if (age === 100) {
//     console.log("wow you are wise");
// } else if (age > 80) {
//     console.log("You can do whatever you want");
// }
