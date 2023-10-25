let func = function(x){
    console.log(this,x);
}
func(1) // global{ ... } , 1

let arrowFunc = (x) => {
    console.log(this,x);
}
arrowFunc(2)// {} 1

const obj={
    method : func,
    arrowMethod : arrowFunc
}
obj.method(2)// { method: [Function: func] } 2
obj.arrowMethod(3) // {} 3

console.log('-- class 써야하는 이유 --')
function a (a,b,c) {
    this.a = a
    this.b = b
    this.c = c
}
a(1,2,3) //this가 전역객체
console.log(global.a,global.b,global.c)//1 2 3
const ins = new a(4,5,6)
console.log(ins) // a { a: 4, b: 5, c: 6 }