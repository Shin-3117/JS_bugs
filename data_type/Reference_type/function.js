// 참조 자료형 : 객체의 주소가 저장되는 자료형
// 가변, 주소가 복사됨

// 함수 : 참조 자료형에 속하며 모든 함수는 Function object
//구조: 함수명, 매개변수, 리턴이 없으면 undefined반환
//함수 선언식
function add (num1, num2){
    return num1+num2
}
//함수 표현식
const sub = function (num1, num2){
    return num1+num2
}
//화살표 함수
const arrow = (param)=>{
    return param
}
//리턴을 작성하지 않는 화살표 함수
const noArrow = () => ({key: 'value'})
/*
    함수 표현식
- 함수 이름이 없는 익명 함수 사용 가능
- 선언식과 달리 표현식으로 정의한 함수는 호이스팅 되지 않음
    화살표 함수
- this 바인딩 없음
- 생성자로 사용할 수 없음 > new // TypeError
*/