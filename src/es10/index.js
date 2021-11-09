let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat())

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2]));

let hello = '         Hello world       ';
console.log(hello);
console.log(hello.trimStart);
console.log(hello.trimEnd);

try{
}catch{
    error
}

let entries = [["name", "Nicolas"],["age", 32]];
console.log(Object.fromEntries(entries))

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);