// [Javascript 미세팁] "function"은 아예 쓰지 마세요
// https://www.youtube.com/watch?v=LPEwb5plEoU

// function 의 활용
// 일반 함수로 활용
function Foo(...args){
    if(this === global){
        console.log('this: global')
    } else {
        this.args = args
        console.log(this)
    }
    return args
}

console.log(Foo(1,2)) // global [ 1, 2 ]

// 생성자 함수로 사용
const foo = new Foo(3,4) //Foo { args: [ 3, 4 ] }
console.log(foo) // [ 3, 4 ]

// 객체 메서드로 할당
const bar = {
    method: Foo,
}
bar.method(5,6) //{ method: [Function: Foo], args: [ 5, 6 ] }
console.log(bar)// [ 5, 6 ]


// 범용성 때문에 발생하는 문제
/*
1. 일반 함수로 사용 -> arrow function
일반 함수로만 활용할 떄는 
- prototype 프로퍼티 불필요
-> this를 바인딩

2. 생성자 함수로 사용 -> class
 - class는 enumerable : false
class 사용시 매서드는 순회하지 않음
객체 인스턴스 자신에게만 있는 값만 순회
 - class는 인스턴스.arguments 접근 차단
 - class는 new 키워드 없이는 호출 불가능

3. 객체 메서드로 할당 -> 메서드 축양형 
-> this를 바인딩
*/

// arrow function
// prototype 없음 : 생성자로 사용 안하기 떄문
// this 바인딩 x
function justF(...args){
    console.log(args)
}

const arrowF = (...args) =>{
    console.log(args)
}

console.dir(justF)
console.dir(arrowF)

// 메서드 축양형
// prototype 없음 : 생성자로 사용 안하기 떄문
// this 바인딩 o
const objBefore = {
    name: 'objBefore',
    method: function(){
        console.log(this.name)
    }
}
const objAfter = {
    name: 'objAfter',
    method(){
        console.log(this.name)
    }
}

console.dir(objBefore) //{ name: 'objBefore', method: [Function: method] }
console.dir(objAfter)// { name: 'objAfter', method: [Function: method] }
objBefore.method()//objBefore
objAfter.method()//objAfter

// generator 예외적으로 function 써야함