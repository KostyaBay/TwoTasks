const multiply = (a,b,c) => a*b*c; 
const add = (a,b,c,d,e) => a+b+c+d+e;

const curry = (f) => {

    // check if the number of arguments passed is equal to the function's length
    // if yes -> call the function with the arguments
    // otherwise -> return a new function that takes the remaining arguments
    // and calls the curried function with all arguments
    // this is a recursive function

    return function curried(...args) {
        if (args.length >= f.length) {
            return f(...args);
        }
        return function(...args2) {
            return curried(...args, ...args2);
        }
    }
}

// ------------------------------------------------------------------------
// Test cases
/*
console.log(curry(add)(1)(2)(3)(4)(5) == add(1,2,3,4,5)); // should be true
console.log(curry(multiply)(1)(2)(3) == multiply(1,2,3)); // should be true
*/