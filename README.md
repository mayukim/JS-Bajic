# JS-Bajic

####JavaScript Learning

## 2.0번 강의

-   브라우저 -> HTML -> CSS, JS
    -   브라우저는 HTML을 실행시키고 HTML은 CSS, JS를 불러옴
-   **alert("");** //알림창 띄우기

CSS, JS 파일 불러오기 :

```ts
<link rel="stylesheet" href="css 파일명" /> // css 파일 블러오기
// 단축어 link:css - head에 쓰기
<script src="js 파일명"></script>
// JS 파일 블러오기 - body에 쓰기
```

예제 :

```ts
alert("hi"); //알림창에 hi 띄우기
```

## 2.1번 강의

-   자바스크립트는 데이터 타입을 알아서 인식함

-   데이터 타입에는 number(integer, float), string 등이 있음

## 2.2번 강의

-   **console.log();** // 콘솔에 값이나 연산 띄우기

-   **const 변수명 = 값;** // variable, 변하지 않는 값, 변수 선언에 사용, 재정의 불가능

-   값 != "값" // number 또는 float != string 같지않다

-   const veryLongVariableName = 0; //변수명에 공백이 필요할 때에는 대문자로 대체
    -   const very_long_variable_name = 0; //파이썬은 밑줄

예제 :

```ts
console.log(54545454); // 콘솔에 54545454 출력, number(integer)

console.log("lalalalalala"); //콘솔에 lalalalalala 출력, string

const a = 5; // a 는 5 라는 변수 선언
const b = 2; // b 는 2 라는 변수 선언
const veryLongVariableName = 0; // veryLongVariableName 는 0 변수 선언

const myName = "mayu"; // myName 은 "mayu" 라는 변수 선언

console.log(a + b); // 변수 a(=5) 와 b(=2) 연산 결과 출력
console.log(a \* b); // 변수 a(=5) 와 b(=2) 연산 결과 출력
console.log(a / b); // 변수 a(=5) 와 b(=2) 연산 결과 출력
console.log("hello " + myName); // "hello" 와 myName(="mayu") 의 합 출력
```

## 2.3번 강의

-   **_변수 선언(variable)_**

    -   **let 변수명 = 값;**

        -   값 재정의 가능
        -   데이터 재정의가 필요할 때에만 사용
        -   데이터가 바뀔 것이라 예상 할 수 있음

    -   **const 변수명 = 값;**

        -   변하지 않는 값 선언에 사용
        -   데이터 재정의 불가능
        -   데이터가 바뀌지 않을 것이라고 예상 할 수 있음
        -   대부분 const 사용

    -   var 변수명 = 값;
        -   variable, 제한은 없지만 보호받을 수 없음
        -   **_사용하지 말 것_**
        -   예전 자바스크립트 언어

예제 :

```ts
const a = 5; // a 는 5 라는 변수 선언, 재정의 불가능
const b = 2; // b 는 2 라는 변수 선언, 재정의 불가능
let myName = "mayu"; // myName 은 "mayu" 라는 변수 선언, 재정의 가능

console.log("hello " + myName); //"hello" 와 myName(="mayu") 합친 결과 출력

myName = "kimmayu"; // myName 의 데이터를 "kimmayu" 로 재정의

console.log("your new name is " + myName);
// "your new name is " 와 myName(="kimmayu") 합친 결과 출력
```

## 2.4번 강의

-   **_데이터 타입_**

    -   **Boolean**

        -   참과 거짓을 가짐(true, false / 1, 0)
            > const 변수명 = true; // 변수에 참을 정의함
            > const 변수명 = false; // 변수에 거짓을 정의함

    -   **null**

        -   의도적으로 값을 비워놓은 상태, 값을 정의하지 않음
        -   자연적으로 발생하지 않음
        -   파이썬에서는 None, go에서는 Nil

    -   **undefined**
        -   변수는 있지만 정의되지 않음, 공간은 있는데 값이 들어가지 않음
        -   자연적으로 발생함
        -   변수를 선언할 때에 값을 지정하지 않으면 undefined 가 선언됨

예제:

```ts
const amIFat = true; // 변수 amIFat 을 참으로 정의함
const amIFat = false; // 변수 amIFat 을 참으로 정의함
const amIFat = null; // 변수 amIFat 을 null(값을 비워놓은 상태) 으로 정의함

let something; // 변수 something 을 값 없이 정의함

console.log(something); // something 출력, 값이 없으므로 undefined 출력
```

## 2.5번 강의

-   **const 리스트명 = [요소들];** //리스트, array, 배열 : 각 요소들은 데이터 타입 상관없이 정의 가능, 대괄호 사용, 요소들은 쉼표로 분리
-   **console.log(리스트명);** // 리스트를 출력함

    -   console.log(리스트명[출력하려는 데이터의 순서값]); // 리스트 안의 순서값 순서의 값을 출력함, 순서값에 정의된 순서에 데이터가 없을 경우 undefined 가 출력됨

-   **리스트명.push(데이터);** // 리스트에 데이터 추가

예제:

```ts
const mon = "mon"; //변수 mon 에 "mon" 을 정의
const tue = "tue"; //변수 tue 에 "tue" 을 정의
const wed = "wed"; //변수 wed 에 "wed" 을 정의
const thu = "thu"; //변수 thu 에 "thu" 을 정의
const fri = "fri"; //변수 fri 에 "fri" 을 정의
const sat = "sat"; //변수 sat 에 "sat" 을 정의
const sun = "sun"; //변수 sun 에 "sun" 을 정의

const dayOfWeek = mon + tue + wed + thu + fri + sat + sun;
// dayOfWeek 에 "montuewedthufrisatsun" 를 정의함, 위의 복잡한 선언식보다 효율적이지만 각 요소들을 불러올 수 없다는 단점이 있음

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// 리스트 dayOfWeek 에 "mon", "tue", "wed", "thu", "fri", "sat", "sun" 을 정의, 위의 복잡한 선언식보다 효율적임

const nonsense = [1, 2, "hello", false, null, true, undefined, "mayu"]; // 리스트 nonsense 에 1, 2, "hello" , false , null , true , undefined , "mayu" 를 정의

console.log(dayOfWeek[4]); // 리스트 dayOfWeek 의 4번째 함숫값인 "fri"가 출력됨

dayOfWeek.push("sun"); // 리스트 dayOfWeek 에 "sun" 을 추가함

console.log(dayOfWeek); // 리스트 dayOfWeek 에"sun" 이 추가된 ["mon", "tue", "wed", "thu", "fri", "sat", "sun", "sun"] 이 출력됨

const toBuy = ["potato", "tomato", "pizza"]; // 리스트 toBuy 에 "potato", "tomato", "pizza" 을 정의
toBuy.push("kimbab"); // 리스트 toBuy 에 "kimbab" 을 추가함
```

## 2.6번 강의

**object**

const 오브젝트명 = {
특성 : 값,
특성 : 값,
특성 : 값,
};

-   각 요소에 특성 부여함
-   = 대신 : 을 사용함
-   요소 재정의, 추가 가능
-   각 요소(특성 : 값) 는 property 라 불리며 콤마(,) 로 구분
    console.log 도 특성 : 값 과 같은 구조이므로 오브젝트(console)의 특성 중 하나로 볼 수 있음 (특성 : 값) 은 (특성[값]) 으로도 표현 가능

```ts
const playerName = "mayu"; // playerName 에 "mayu" 정의
const playerPoints = 123456; // playerPoints 에 123456 정의
const playerHandsome = true; // playerHandsome 에 true 정의
const playerFat = "little bit"; // playerFat 에  "little bit" 정의
// 원하는 결과이지만 코드가 비효율적임

const playerList = ["mayu", 123456, true, "little bit"];

const player = {
    name: "mayu",
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false;

player.lastName = "potato";
```

## 2.7번 강의

function 함수명(){
명령어;
}
//function, 함수 : 계속 반복해서 쓸 수 있는 코드, 코드 캡슐화 여러번 실행
//argument : function을 실행하는 동안 function에게 정보를 보낼 수 있는 방법

함수명(데이터); // function을 실행시키는 방법, function에 데이터 보내기

```ts
function sayHello() {
    console.log("Hello my name is");
}

sayHello("mayu");
```

## 2.8번 강의

// 괄호 안에 변수명을 넣어 정보를 받음, 이 변수들은 함수 안에만 존재, 데이터를 보내지 않으면 undefined가 정의됨, 선언된 데이터 순서대로 변수에 정의됨

```ts
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("mayu", 18);
sayHello("nico", 28);
sayHello("lynn", 21);

function plus(first, second) {
    console.log(first, second);
}
console.log(first); // 에러
function divide(a, b) {
    console.log(a / b);
}
plus(60, 8);
divide(98, 20);

const player = {
    sayHello: function (otherName) {
        console.log("Hello " + otherName + " nice to meet you");
    },
};

player.sayHello("lynn");
player.sayHello("mayu");
```

## 2.9번 강의

데이터 타입에는 number(integer, float), string 등이 있음

console.log(); //콘솔에 값이나 연산 띄우기

const 변수명 = 값 // variable, 변하지 않는 값, 변수 선언에 사용, 재정의 불가능

let 변수명 = 값 //변수 선언에 사용, 값 재정의 가능 != const

var 변수명 = 값 // 제한은 없지만 보호받을 수 없음, 예전 자바스크립트 언어, **사용하지 말 것**

Boolean // 참과 거짓을 가짐(1, 0 / true, false)

null // 정의되지 않음, 값이 존재하지 않음, 자연적으로 발생하지 않음, 값을 비워놓은 상태, 의도적, 데이터 타입 (파이썬에서는 None, go에서는 nil)

undefined // 변수는 있지만 정의되지 않음, 공간은 있는데 값이 들어가지 않음, 자연적으로 발생함, 데이터 타입

const 리스트명 = [요소들]; //리스트, array, 배열 : 각 요소들은 데이터 타입 상관없이 정의 가능, 대괄호 사용, 요소들은 쉼표로 분리

console.log(리스트명); // 리스트를 출력함

console.log(리스트명[출력하려는 데이터의 순서값]); // 리스트 안의 순서값 순서의 값을 출력함, 순서값에 정의된 순서에 데이터가 없을 경우 undefined 가 출력됨

리스트명.push(데이터); // 리스트에 데이터 추가

## 2.10번 강의

const 오브젝트명 = {
특성 : 값,
특성 : 값,
특성 : 값,
};
//object : 각 요소에 특성 부여함 = 대신 : 을 사용함 각 요소(특성 : 값) 는 property 로 콤마(,) 로 구분 console.log 도 특성 : 값 의 구조이므로 오브젝트(console)의 요소 중 하나로 볼 수 있음 (특성 : 값) 은 (특성[값]) 으로도 표현 가능 요소 재정의, 추가 가능

```ts
console.log(console); // js 명령어 보기(console의 요소들)
```

function 함수명(변수명){
명령어;
}
//function, 함수 : 계속 반복해서 쓸 수 있는 코드, 코드 캡슐화 여러번 실행
//argument : function을 실행하는 동안 function에게 정보를 보낼 수 있는 방법, 괄호 안에 변수명을 넣어 정보를 받음, 이 변수들은 함수 안에만 존재, 데이터를 보내지 않으면 undefined가 정의됨, 선언된 데이터 순서대로 변수에 정의됨

함수명(데이터); // function을 실행시키는 방법, function에 데이터 보내기

## 2.11번 강의

```ts
const calculator = {
    plus: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    times: function (a, b) {
        console.log(a * b);
    },
    divide: function (a, b) {
        console.log(a / b);
    },
    power: function (a, b) {
        console.log(a ** b);
    },
};
calculator.plus(2, 3);
calculator.minus(2, 3);
calculator.times(2, 3);
calculator.divide(2, 3);
calculator.power(2, 3);
```

console.log 와 alert 등은 결과값을 남기지 않음, return (값을 반환받음) 사용

```ts
const age = 96;
function calculateKrAge(ofAge) {
    return ofAge + 2;
}

const KrAge = calculateKrAge(age);

console.log(KrAge);

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
};
const pResult = calculator.plus(2, 3);
const mResult = calculator.minus(pResult, 10);
const tResult = calculator.times(10, mResult);
const dResult = calculator.divide(tResult, pResult);
const pwResult = calculator.power(dResult, mResult);

console.log(pwResult);
```

## 2.12번 강의

return 후에는 function문이 종료됨, 뒤의 코드는 실행되지 않음
헷갈리면 차근차근 대체 해 보기
// 자바 문법

## 2.13번 강의

---

```ts
const age = prompt("How old are you?");
//prompt 값을 입력받을 때 까지 JS를 정지시킴, 사용하지 않음, CSS 적용 불가, string으로 받음
// type of 타입 출력 명령
//parseInt string number로 바꾸기, stringdl 문자가 입력되면 NaN, 타입 변환
console.log(age, parseInt(age));

const age = parseInt(prompt("How old are you?"));

console.log(age);
```

## 2.14번 강의

---

**conditional**

if(조건문){
조건이 참일때 실행할 코드
} else{
조건문이 거짓일때 실행할 코드
}

-   조건문

```ts
const age = parseInt(prompt("How old are you?"));
//isNaN 주어진 인자가 NaN인지 판별함, 결과는 boolean을 반환함, Not a Number
if (isNaN(age)) {
    console.log("Please write a number");
} else {
    console.log("Thank you for Writing your age.");
}
```

## 2.15번 강의

```ts
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number"); // 연산자 || 하나 이상 참이면 참
} else if (age < 18) {
    //if문의 조건문이 거짓일 때 확인하는 다음 조건문
    console.log("You are too young"); // 참일때 실행할 코드
} else if (age >= 18 && age <= 50) {
    // 연산자 && 둘다 참이어야 참
    // 모든 조건이 거짓일 때 실행
    console.log("You can drink"); // 실행할 코드
} else if (age > 50 && age <= 80) {
    // 모든 조건이 거짓일 때 실행
    console.log("You should exercise"); // 실행할 코드
} else if (age > 80) {
    // 모든 조건이 거짓일 때 실행
    console.log("You can do whatever you want"); // 실행할 코드
}
```

## 2.16번 강의

// 2.16

=== // 좌우 값이 같은가를 판단
==은 데이터의 값만 보고 비교를 하지만 ===은 데이터의 타입도 봄, 더욱 엄격한 비교

!== // 좌우 값이 같지 않은가를 판단

```ts
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age === 100) {
    console.log("wow you are wise");
} else if (age > 80) {
    console.log("You can do whatever you want");
}

if ((a && b) || (c && d) || x || y) {
}
```

## 3.0번 강의

자바스크립트는 html에 접근하고 읽을 수 있다

document.title = "hi"; // JS는 html과 연결되어있음

## 3.1번 강의

<h1 class = "hello" id="title">Grab me!</h1> // classname 은 "hello", id 는 "title"

const title = document.getElementById("title"); //html에서 id 가 title인 element 값을 가져와 변수 title 에 정의한다

console.dir(title); //title 의 전체 요소 출력

title.innerText = "Got you!"; //html 에서 id 가 title인 객체의 이너텍스트 수정

console.dir(title.id); //title 의 id 출력
console.dir(title.className); //title 의 classname 출력

## 3.2번 강의

객체 이름을 정의 할 때는 보통 classname 을 쓰거나 title 과 같이 쓴다

//3.2

const hellos = document.getElementsByClassName("hello"); // classname 이 hello인 element 값을 가져와 변수 title 에 정의한다

console.log(hellos);

const title = document.getElementsByTagName("h1"); // tagname 이 h1인 element 값을 가져와 변수 title 에 정의한다

console.log(title);

const title = document.querySelector(".hello h1");//css 방식, 값이 없으면 null, 부합하는 객체가 여러개면 그중 첫번째 것을 가져옴

querySelectorAll 은 조건에 부합하는 모든 객체를 가져옴

console.log(title);

document.querySelector("#hello");-- 같은 의미
document.getElementById("hello");--

## 3.3번 강의

on~ : event

const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

title.Style.color = "blue"; // title 색상 설정

JS에서는 주로 event를 처리 함

click event listen

<div class="hello">
    <h1>Click me!</h1>
</div>

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick);

## 3.4번 강의

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() { //타이틀이 클릭되면
title.style.color = "blue"; //글자 색상 설정, JS에서 스타일을 변경할 순 있지만 CSS에서 변경하는 것이 좋음
}

function handleMouseEnter() { //타이틀로 마우스가 들어오면
title.innerText = "mouse is here!"; // 이너 텍스트 변경
}

function handleMouseLeave() { //마우스가 나가면
title.innerText = "mouse is gone!"; // 이너 텍스트 변경
}

title.addEventListener("click", handleTitleClick); // 텍스트가 클릭되면 handleTitleClick 실행
title.addEventListener("mouseenter", handleMouseEnter); // 이벤트가 감지되면 handleMouseEnter 실행
title.addEventListener("mouseleave", handleMouseLeave); // 이벤트가 감지되면 handleMouseLeave 실행

## 3.5번 강의

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
h1.style.color = "blue";
}

function handleMouseEnter() {
h1.innerText = "mouse is here!";
}

function handleMouseLeave() {
h1.innerText = "mouse is gone!";
}

function handleWindowResize() {
document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
alert("copier!");
}

function handleWindowOffline() {
alert("SOS no WIFI");
}

function handleWindowOnline() {
alert("good WIFI");
}

h1.addEventListener("click", handleTitleClick); // 텍스트가 클릭되면 handleTitleClick 실행
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleaee", handleMouseLeave);
// 이벤트 리스너는 후에 리무브가 가능

window.addEventListener("resize", handleWindowResize);
// document의 body, head, title 등은 중요하기 때문에 콘솔에서 불러올 수 있지만 다른 element들은 querySelector 이나 getElementByld 등을 사용해야 한다
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

## 3.6번 강의

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
const currentColor = h1.style.color;
let newColor;
if (currentColor === "blue") {
newColor = "tomato";
} else {
newColor = "blue";
}
h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick); // 텍스트가 클릭되면 handleTitleClick 실행

## 3.7번 강의

//css는 style파일에서 작성
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
const clickedClass = "clicked";
if (h1.className === "clickedClass") {
h1.className = "";
} else {
h1.className = "clickedClass"; // classname 생성
}
}

h1.addEventListener("click", handleTitleClick);

## 3.8번 강의

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        // classname 으로 작업 할 수 있게 해줌
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass); // classname 생성
    }
}

h1.addEventListener("click", handleTitleClick);
