//! data type에 따른 typeof
console.log('---Primitive type---')
// typeof(null)이 null이 아닌 object반환
/*
자바스크립트를 처음 구현할 때, 
자바스크립트 값은 타입 태그와 값으로 표시되었습니다. 
객체의 타입 태그는 0이었습니다. 
null은 Null pointer(대부분의 플랫폼에서 0x00)로 표시되었습니다. 
그 결과 null은 타입 태그로 0을 가지며, 
따라서 typeof는 object를 반환합니다.

typeof null === “null” 제안이 있었지만, 기존 사이트 손상으로 거부됨
*/
console.log(typeof(null)) //object
console.log(typeof(undefined)) //undefined

console.log(typeof(Number)) //function
console.log(typeof(1)) //number

console.log(typeof(String)) //function
console.log(typeof('str')) //string

console.log(typeof(Boolean)) //function
console.log(typeof(false)) //boolean

console.log(typeof(Symbol)) //function
console.log(typeof(Symbol("a"))) //symbol


//Reference type
//typeof 시 object로 반환됨
console.log('---Reference type---')
console.log(typeof(Array)) //function
console.log(typeof([1,2,3])) //object

console.log(typeof(Object)) //function
console.log(typeof({a:1})) //object

console.log(typeof(Date)) //function
// 함수로 호출할 경우 new Date().toString()과 동일하게 현재 날짜와 시간을 나타내는 문자열을 반환합니다.
console.log(typeof(Date())) //string
console.log(Date()) //Thu Oct 05 2023 09:11:18 GMT+0900 (대한민국 표준시)
// 생성자로 호출할 경우 새로운 Date 객체를 반환합니다.
console.log(typeof(new Date())) //object
console.log(new Date()) //2023-10-05T00:26:59.017Z

console.log(typeof(RegExp)) //function
console.log(typeof(RegExp())) //object

console.log(typeof(Map)) //function
console.log(typeof(new Map())) //object

console.log(typeof(WeakMap)) //function
console.log(typeof(new WeakMap())) //object

console.log(typeof(Set)) //function
console.log(typeof(new Set())) //object

console.log(typeof(WeakSet)) //function
console.log(typeof(new WeakSet())) //object
/*
RegExp
RegExp 생성자는 패턴을 사용해 텍스트를 판별할 때 사용합니다.

Map
Map 객체는 키-값 쌍과 키의 원래 삽입 순서를 기억합니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map

WeakMap
WeakMap 은 키/값 쌍의 모음으로, 키는 반드시 객체 또는 등록되지 않은 심볼이며 값은 임의의 JavaScript 타입입니다.
WeakMap은 키에 대한 강력한 참조를 생성하지 않으므로, 객체가 WeakMap의 키에 포함되더라도 가비지 컬렉션의 대상이 됩니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#%EC%84%A4%EB%AA%85

Set
모든 유형의 고유값 저장 (중복 X)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

WeakSet
약하게 유지되는(held, 잡아두는) 객체를 컬렉션에 저장할 수 있습니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
*/