// 원시 자료형 : 변수에 값이 직접 저장되는 자료형
// 불변, 값이 복사됨

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures
console.log('---Primitive type---')
console.log(typeof(false)) //boolean
console.log(typeof(1)) //number
console.log(typeof('str')) //string
console.log(typeof(Symbol("a"))) //symbol
console.log(typeof(undefined)) //undefined
console.log(typeof(null)) //object
/* typeof(null)이 null이 아닌 object반환
자바스크립트를 처음 구현할 때, 
자바스크립트 값은 타입 태그와 값으로 표시되었습니다. 
객체의 타입 태그는 0이었습니다. 
null은 Null pointer(대부분의 플랫폼에서 0x00)로 표시되었습니다. 
그 결과 null은 타입 태그로 0을 가지며, 
따라서 typeof는 object를 반환합니다.

typeof null === “null” 제안이 있었지만, 기존 사이트 손상으로 거부됨

null : 명시적 부제, undefined : 암묵적 부제
*/

console.log('---Primitive type : Number---')
console.log('자연수',1)
console.log('정수',-1)
console.log('유리수',1.25)
console.log('무한대',Infinity)
console.log('Not a Number',NaN)

const param = 'ES6 부터 지원'
console.log(`---Template literals, ${param}---`)