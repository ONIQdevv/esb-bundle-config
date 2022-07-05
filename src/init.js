import {getName} from "./logic";

const a = 1;
const b = 8;

function foo () {
    return 0;
}


// Tree shaking
console.log("Hi everyone ^_^" + a + b + foo() + getName());