'use strict';

// Declaración de una función
function hacemosAlgo () {
    return 'Se realiza una tarea!'
}

// Expresión de una función
const haceUnaTarea = function () {
    return 'Se realiza otra tarea!!'
}

// Arrow function
const haceOtraTarea = () => 'Realizamos una tercera tarea tipo "string"!';

// Expresiones Lambda
[1, 2, 3].map(function (n) {
    console.log(n * 2) 
});
    [1, 2, 3].map(n => console.log(n * 2));

console.log(
    hacemosAlgo() + '\n' +
    haceUnaTarea() + '\n' +
    haceOtraTarea() + '\n'
)

function add(x) {
    return function (y) {
        return x + y;
    }
}

const addTwo = add(2);
console.log(addTwo(5));