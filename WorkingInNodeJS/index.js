// What is NodeJS
    // node js is derived from javascript engine, javascript engine is a chrme v8 engine
    // the chrome b8 engine is only available at client side.
    // one common thing in nodejs and js engine is they have two kind of functionalities
        // Blocking Functionalitis
        // non Bloocking Functionalities
    // Nodejs and js engine are a synchronous(it means line by line) and single-threaded(it means one process at a time) language
    // so it means one process at a time and line by line

    // so there will be pending code
    // and this type of functionalities which blocks the main thread to exucte, called blocking functionalities

// handling
    // nodejs is based on non blocking I/O nodel
    // non blocking code does not block main thread, it skip the code and move to next line




// a Blocking activity, it can only be performed line by line
// this is based on node js behaviour synchronous and single threaded

// console.log("start");
// const a = 10;
// console.log(a);
// function fun(a, b) {
//     let c = a+b;
//     console.log("inside the function");
//     return c;
// }
// fun();
// console.log("end");




// non blocking activity

console.log("start");
// const a = 10;
// console.log(a);
// function fun(a, b) {
//     let c = a+b;
//     console.log("inside the function");
//     return c;
// }
// fun();

setTimeout(() => {
    console.log("i am inside setTime out");
},0)
console.log("end");


// callback functions and Promises are non blocking functionalities
// callback and promises are not executed in main thread ther are skiped


// Asynchronous is a non blocking functionality code
// Synchronous is a blocking functionality code
