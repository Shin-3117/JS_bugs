const obj1 = {
  outer: function(){
    console.log(this) //{ outer: [Function: outer] }

    let innerFunc = function(){
      console.log(this)
    }
    innerFunc() // global

    const obj2 = {
      f:innerFunc
    }
    obj2.f() //{ f: [Function: innerFunc] }
  }
}
obj1.outer()