/**Object
 * 키로 구분된 데이터 집합을 저장하는 자료형
 * 키는 문자형만 허용
 * 밸류는 모든 자료형 허용
 */
const user = {
    name: 'Alice',
    'key with space': true,
    greeting: function () {
      return 'hello'
    }
}
// 조회
console.log(user.name) // Alice
console.log(user['key with space']) // true
// 메서드 호출
console.log(user.greeting()) // hello
// 추가
user.address = 'korea'
console.log(user) // {name: 'Alice', key with space: true, address: 'korea', greeting: ƒ}
// 수정
user.name = 'Bella'
console.log(user.name) // Bella
// 삭제
delete user.name
console.log(user) 
 // {key with space: true, address: 'korea', greeting: ƒ}

// in 연산자
console.log('greeting' in user) // true
console.log('country' in user) // false

const desructing_assignment = {
  해석 : '구조분해할당',
  a : '123'
}
const {해석, a} = desructing_assignment
console.log(해석)
console.log(a)