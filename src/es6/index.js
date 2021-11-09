function newFunction(name, age, country){
    var name = name || 'Oscar';
    var age  = age || 32;
    var conuntry = country || "Col";
    console.log(name, age, conuntry);
}

function newFunction2(name = 'Oscar', age = 32, country = 'Col'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Nicolas', 30, 'Col');

let hello = "Hello";
let word  = "World";
let epicPhrase = hello + ' ' + word;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${word}`
console.log(epicPhrase2)


let lorem = "Esta línea es de prueba, aprendiendo \n"
            + "Otra línea tambien de prueba"

let lorem2 = `Otrra linea 
que necesitaba`

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Nicolas',
    'age':   32,
    'country': 'Colombia'
}

console.log(person.name, person.age, person.country);

let {name, age, country} = person;
console.log(name,age,country);

let team1 = ['Nicolas', 'Isabella', 'Diego'];
let team2 = ['Ana Maria', 'Nathalia', 'Jeyco'];

let education = ['Nuevo', ...team1, ...team2];
console.log(education);

{
    var globalVar = 'Global Var';
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

let name = 'Nicolas';
let age = 32;

obj = {name: name, age: age};
obj2 = {name, age};
console.log(obj, obj2);

const names = [
    {name: 'Nicolas', age: 30},
    {name: 'Isabella', age: 10}
];
let listOfJNames = names.map(function(item){
    console.log(item.name)
});

let listOfJNames2 = names.map(item => console.log(item.name));

const listOfJNames3 = (name, age) =>{
    console.log(name,age)
};

const listOfJNames4 = name => {
    console.log(name)
};

const square = num => num*num;

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Hey');
        }else{
            reject('Ups');
        }
    });
}

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error));

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const cacl = new calculator();
console.log(cacl.sum(2,2));

import {hello} from './module'

hello();

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);