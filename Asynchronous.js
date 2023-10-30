/*/ 코드는 동기적으로 작성하고 
내부동작은 비동기적으로 동작하는 것이 목표

Thread : 작업을 처리할 때 실제로 작업을 수행하는 주체
single, multi
blocking, non-blocking
JS는 single Tread, non-blocking

JavaScript Runtime이 비동기를 도와줌 (브라우저, Node)
Qutput
Call Stack : 모든 작업은 Call back으로 들어간 후 처리
Web API : 오래 걸리는 작업은 Call Stack에서 Web API로 보내 별도로 처리
Event Loop : Web API에서 처리가 끝난 작업들은 Task Queue에 순서대로 들어감
Task Queue : Call Stack이 비어 있는 것을 계속 체크,
Call stack이 빈다면 Task Queue에서 Call Stack으로 보냄
*/



// 동기: 프로그램의 살행 흐름이 순차적으로 진행
console.log(1)
console.log(2)
console.log(3)
//1 2 3

// 비동기: 프로그램의 살행 흐름이 순차적이지 않으며,
// 작업이 완료되기를 기다리지 않고 다음 작업이 실행되는 방식
console.log('setTimeout')
console.log(1)
setTimeout(()=>{
    console.log(2)
},1000) 
console.log(3)
//1 3 2

/* 비동기 처리의 단점
Web API로 들어오는 순서가 아니라 작업이 완료되는 순서
코드의 실행 순서가 불명확해짐 
> 콜백 함수, 콜백지옥으로 가독성 낮아짐
> Promise
성공시: then()
실패시: catch()
> async / await ES7
*/
console.log('Hi')

const promise = new Promise((resolve, reject)=>{
    resolve();
  });
  
  promise.then(result => {
    console.log('A');
  })
  .then(result => {
    console.log('Bye');
  })