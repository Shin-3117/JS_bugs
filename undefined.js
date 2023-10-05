// undefined 출력되는 경우

// undefined로 명시적으로 지정한 경우 : undefined 라는 실존하는 데이터
// 비어있음을 나타내고 싶은 경우 undefined가 아니라 null 사용 권장
//주의! typeof(null)은 null이 아닌 object반환
let a = undefined
console.log(a) // undefined

// 자바스크립트 엔진이 undefined를 반환하는 경우 : 값이 없음
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



// empty는 undefined 조차 할당이 안된 상태
// empty는 순회와 관련된 많은 배열 매서드들의 순회 대상에서 제외됨
let undefined_arr = [undefined,undefined,undefined];
console.log(undefined_arr); // [ undefined, undefined, undefined ]
let empty_arr =[];
empty_arr.length = 3;
console.log(empty_arr); // [ <3 empty items> ]

undefined_arr[1] = 1;
undefined_arr[2] = 2;
empty_arr[1] = 1;
empty_arr[2] = 2;

console.log('undefined_arr.forEach')
undefined_arr.forEach((value,index)=>{console.log(index,value)}) 
console.log('empty_arr.forEach')
empty_arr.forEach((value,index)=>{console.log(index,value)})

console.log('undefined_arr.map')
undefined_arr.map((v,i)=>{console.log(v,i)})
// undefined_arr.map((v,i)=>{console.log(v+i)}) 
console.log('empty_arr.map')
empty_arr.map((v,i)=>{console.log(v,i)})
// empty_arr.map((v,i)=>{console.log(v+i)}) 

console.log('undefined_arr.filter')
undefined_arr.filter((value,index)=>{console.log(index,value)}) 
console.log('empty_arr.filter')
empty_arr.filter((value,index)=>{console.log(index,value)})

let sol_reduce_undefined = undefined_arr.reduce((acc,value,index)=>{return acc+value+index+' '}, '') 
console.log('undefined_arr.reduce',':',sol_reduce_undefined)
let sol_reduce_empty = empty_arr.reduce((acc,value,index)=>{return acc+value+index+' '}, '') 
console.log('empty_arr.reduce',':',sol_reduce_empty)