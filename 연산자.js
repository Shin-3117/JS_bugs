console.log('더하기',7+2)
console.log('빼기',7-2)
console.log('곱하기',7*2)
console.log('나누기',7/2)
console.log('나누기 몫',Math.floor(7/2))
console.log('나누기 나머지',7%2)

console.log('--- 비교 연산자 ---')
/* 동등 연산자 ( == )
- 두 피연산자가 같은 값으로 평가되는지 비교 후 boolean값 반환
- '암묵적 타입 변환' 적용 후, 값 비교
- 두 피연산자가 객체일 경우, 메모리의 같은 객체를 바라보는지 판별
*/
console.log(null==undefined) //true
console.log(null==0) //false
console.log(null=='null') //false
console.log(undefined==0) //false
console.log(NaN==0) //false
console.log(1==true) //true


/* 일치 연산자 ( === )
- 두 피연산자의 값과 타입이 같으면 true
- '암묵적 타입 변환' 미적용
- 일반적으로 사용 (예외 : null==undefined )
*/
console.log('일치 연산자',null===undefined) //false


console.log('--- 논리 연산자 ---')
//단축 평가 지원
console.log('and', true && false)
console.log('or', true || false)
console.log('not', !true)