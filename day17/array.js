// single variable me multiple value store krna is array
// indexing- 0-n-1
// mutable
// let a =[1, "a", false]
// console.log(a)

// METHODS
// let a=["vivek","akash","harshit"]
// let b=[60,80,90,87,78]
// a.push("lisha")
// a.pop()
// let c= a.concat(b)
// let c= a.join("/")
// b.splice(0,3,90,8,9)
// let c= a.slice(0,2)
// splice(start,delcount,to be added)
// a.sort()
// a.reverse()
// a.unshift(true)
// a.shift()

// console.log(a)

// for doesnot return any value but map func does
// "every" function is like filter but returns only true or false if condition satisfies or not
// in reduce func accumulator and initial value are same


// let a =[1,2,3,4,5]
// let b= a.reduce((acc,curval)=>{
//     console.log(`acc value is : ${acc} and currval is ${curval} the total is: ${acc+curval}`);
//     return acc+curval
// },0)
// console.log(b)

let a=[1,2,3,4,5]
let b = a.map(function(num)
{
    return (num+10)*2;
   
});
let c= b.filter(num=>num>=24);
console.log(c);