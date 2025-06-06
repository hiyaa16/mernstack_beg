// object - unordered collection 
// no indexing isme key :value pair hota he
let one = Symbol("key1");
let user = {
    "user name": "neha sharma",
    age:23,
    [one]:"key2",
    email: "neha@gmail.com",
    ismarried: false,
    Lastloggedin:["tuesday","wednesday",] ,
    country: {
        state:"rajasthan",
        city:"jodhpur"
    },
    greet: function(){
        console.log("hello what is your name ", this["user name"])
        return
    }
}
// console.log(user)
// console.log(user.age)
console.log(user)

// changing value
// user["user name"]="neha bhati"
// console.log(user["user name"]);

// console.log(user.country.state)

// Object.freeze(user) 
// // change nhi hogi value kuch hi krlo
// user["user name"]="neha llool"
// console.log(user);

// console.log(user.greet())