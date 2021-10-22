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