// alert("hi");

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

//2.6

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

//2.7

//function 계속 반복해서 쓸 수 있는 코드 조각, 코드 캡슐화 여러번 실행
//argument funtion을 실행하는 동안 funtion에게 정보를 보낼 수 있는 방법
// function sayHello() {
//     console.log("Hello my name is");
// }
// sayHello("mayu");

//2.8
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
