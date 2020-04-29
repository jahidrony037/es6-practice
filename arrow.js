// function doubbleIT(num) {
//   return   num*2;
    
// }

// const doubbleIT=function myFUN(num) {
//     return num*2;
    
// }

const doubbleIT = num => num*2;
const add=(x,y)=>x+y;
const give5 = () => 5;
const result = add(10,19);
const doMath =(x,y)=>{
    const sum =x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}

const doMultiplie =(x,y)=>{
    const div =x/y;
    const multi=x*y;
    const result=multi+div;
    return result;
}
const result2=give5();
const result3 =doMath(7,5);
const result4=doMultiplie(7,2);


console.log(result2);
console.log(result3);
console.log(result4);