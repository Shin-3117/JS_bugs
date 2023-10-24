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
