let a = 1;
let outer = function(){
    let b =2;

    let inner = function(){
        console.log(b);
        debugger
    };
    inner();
};
outer();