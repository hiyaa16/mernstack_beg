// console.log("a")
// setTimeout(()=>{
//     console.log("b")
// },2000)
// console.log("c")



// resolve-then
// reject-catch

// const promiseis=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let hello= true;
//         if (hello){
//             resolve({username : "tanishq" , password : "1235" , email :"tanishq@gmail.com"})
//         }
//         else{
//             reject("something is wrong")
//         }
//     },1000)
// })
// promiseis
// .then((user)=>{
//     console.log(user);
//     return user.password
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("lalala")
// })


// using api data-using then and catch 

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then((res)=> {return res.json()}) .then((data)=>{
//         console.log(data);
//       })

async function getalluser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments') 
    const data= await response.json()
    console.log(data)
}
getalluser()