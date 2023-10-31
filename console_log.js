const obj = {a:1}
console.log('1:',obj) // 1: { a: 1 }
obj.a = 2
console.log('2:',obj) // 2: { a: 2 }

// 하지만 브라우저 환경에서는 console.log()가 비동기로 작동해서
// 1: { a: 2 }
// 2: { a: 2 }
// 가 출력됨