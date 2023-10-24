// 블록 레벨 스코프란 코드 블록({…})내에서 유효한 스코프를 의미한다.
let outer = function(){
    let a =1;

    let inner = function(){
        console.log(a);
        debugger
    };
    inner();
};
outer();

// 함수 레벨 스코프란 함수 코드 블록 내에서 선언된 변수는 함수 코드 블록 내에서만 유효하고 
//함수 외부에서는 유효하지 않다
if (true) {
	var c = 1
	console.log(c, 'inVar') //1
}
console.log(c, 'outVar')