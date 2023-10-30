// const a = [4,1,2,3]

// for (i=0; i<a.length; i++){
//     console.log(a[i])
// }

// for(i in a){
//     console.log(a[i])
// }

// for (i of a){
//     console.log(i)
// }

// a.forEach((item, index) => {
//     console.log(item, index)   
// });


// a.map((item, index) => {
//     console.log(item, index)
// });

const a = [1,2,3,4,5]

const b = a.filter((e)=>{
    if (e%2===0){
        return e
    }
})
console.log(b)
const c =b.map((e)=>{
    return e*2
})
console.log(c)
console.log(a
    .filter((e)=>{
        if(e%2===0){
            return e
        }
    })
    .map((e)=>{
        return e*2
    })
    )

const newA = []
a.reduce((acc,crr)=>{
    if (acc%2===0){
        newA.push(acc)
    }
},0)
console.log(newA)