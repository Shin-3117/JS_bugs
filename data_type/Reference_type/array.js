/* Array
순서가 있는 데이터 집합을 저장하는 자료구조
- [] 로 선언
- 배열 요소 자료형 : 제약 없음
- .length 속성을 사용해 배열에 담김 요소 길이 알 수 있음
- JS에서는 key값이 number인 객체

주요 메서드
push() / pop() : 배열 끝 요소 추가 / 제거
unshift() / shift() : 배열 처음 요소 추가 / 제거 ,시간복잡도 1이상
JS에는 deque 없음

Array Helper Methods
forEach : 인자로 주어진 함수(콜백함수)를 배열 요소 각각에 대해 실행
map : 배열 내의 모든 요소 각각에 대해 함수(콜백함수)를 호출,
함수 호출 결과를 모아 새로운 배열로 반환
*/
arr = [1,2,3,4]
console.log('--- forEach ---')
arr.forEach((item,index,arr)=>{
    console.log(`${item}, ${index}, ${arr}`)
})
// 1, 0, 1,2,3,4
// 2, 1, 1,2,3,4
// 3, 2, 1,2,3,4
// 4, 3, 1,2,3,4
console.log()

console.log('--- map ---')
const newArr = arr.map((item,index,arr)=>{
    console.log(`${item}, ${index}, ${arr}`)
    return item*2
})
console.log(newArr)
// 1, 0, 1,2,3,4
// 2, 1, 1,2,3,4
// 3, 2, 1,2,3,4
// 4, 3, 1,2,3,4
// [ 2, 4, 6, 8 ]
/* Array Helper Methods
filter : 콜백 함수의 반환 값이 참인 요소들만 모아서 새로운 배열을 반환
find : 콜백 함수의 반환 값이 참이면 해당 요소를 반환
some : 배열의 요소 중 하나라도 판별 함수를 통과하면 참을 반환
every : 배열의 모든 요소가 판별 함수를 통과하면 참을 반환
*/
console.log('--- 순회 방법 ---')
const names = ['Alice', 'Bella', 'Cathy',]

console.log('- for loop -')
for (let idx = 0; idx < names.length; idx++) {
  console.log(idx, names[idx])
}

console.log('- for...of -')
for (const name of names) {
  console.log(name)
}

console.log('- forEach -') // 권장
names.forEach((name, idx) => {
  console.log(idx, name)
})