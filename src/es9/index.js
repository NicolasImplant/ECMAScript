const obj = {
    name: 'Nicolas',
    age: '30',
    country: 'Colombia'
};

let {name, ...all} = obj;
console.log(name, all);

const obj = {
    name: 'Nicolas',
    age:   30,
}

const obj1 = {
    ...obj,
    country: 'Colombia'
}

console.log(obj1)

const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finaly'))

