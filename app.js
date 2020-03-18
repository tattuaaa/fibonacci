'use strict';
const momo = new Map();
momo.set(0, 0);
momo.set(1, 1);

function fib(n){
    if(momo.has(n)){
        return momo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    momo.set(n, value);
    return value;
}/*
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1){
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}*/
const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}