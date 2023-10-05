// undefined 출력되는 경우

// undefined로 명시적으로 지정한 경우
let a = undefined
console.log(a) // undefined

// 값을 대입하지 않은 변수
let b
console.log(b) // undefined

// 객체 내부의 존재하지 않는 프로퍼티에 접근
let c = {c1:1}
console.log(c.notHere) // undefined

// return문이 없거나 호출되지 않는 함수의 실행 결과
let func = function(){};
let d = func()
console.log(d) // undefined


let empty_arr =[];
empty_arr.length = 3;
console.log(empty_arr); // [ <3 empty items> ]
// empty는 undefined 조차 할당이 안된 상태
// empty는 순회와 관련된 많은 배열 매서드들의 순회 대상에서 제외됨
let undefined_arr = [undefined,undefined,undefined];
console.log(undefined_arr); // [ undefined, undefined, undefined ]