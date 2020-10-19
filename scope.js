//Global Scope, Function Scope, etc.

let age= 39;
let message= 'Hello from the global scope';

function sayHelloFromFunctionScope() {
    let geeting= 'Hello from the local function scope';
    return greeting;
}

console.log (message);
//console.log (greeting); // <= cannot access the function scope from the global scope

let outerVar=1; 
function inner () {
    let innerVar = 2;
    console.log (outerVar);
    function deeperInner () { //Lexical Scope
        //another scope
    }
}

inner ();

for (let i =0; i<5; i++) { //block scope
    console.log (`Inside forloop ${i}`);
}

//var does not create block scope
//var can create variables with different values
//let name='miguel';
let name='salome';

//Hoisting
helloWorld();
function helloWorld(){//function declarations get moved to the top by the javascript interpreter
    console.log ('hello world');
}

const thisIsAConst= 'some content';
//thisIsaConst = 'should get an error'; // because the variable is a constant

const obj = {name: 'miguel'};
obj.name = 'ana';
obj.year = '1942';

//Shadowing
let a = 1;
function inner () {
    let a = 3;
}