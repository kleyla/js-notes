# Modern js for React js ES6

## Template strings

```javascript
console.log(`Mi nombre es ${name} y mi edad es ${age}`);
```

## Arrow Functions

```javascript
const saludameArrow = (name) => {
  return `Arrow hola ${name}`;
};
```

## Rest Operator

Solo los primeros parametros que espera son tomados en cuenta. Pero si en parametros va (...args) toma todos los argumentos que le pasan.
Tambien se pueden pasar argumentos opcionales (num1, num2, ...args)

```javascript
const printArg = (...args) => console.log(args);
```

## Spread Operator

```javascript
let array1 = [1, 2, 3, 4, 5];
let array2 = array1;
array1.push(6);
console.log(array1);
console.log(array2);
```

Vemos que en ambos se ha incluido el '6'

```javascript
let array1 = [1, 2, 3, 4, 5];
let array3 = [...array1];
array1.push(6);
console.log(array1);
console.log(array3);
```

Si lo asignamos de esa manera, vemos que el nuevo arreglo no es afectado.

Para concatenar arreglos u objetos:

```javascript
let array6 = [...array1, ...array4, 10];
console.log(array6);
let obj1 = {
  name: "key",
};
let obj2 = {
  age: 20,
};
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
```

## Destructuring

```javascript
let [one, two, three] = arreglo;
```

tambien se puede con objetos, aunque con estos se debe respetar la llave de cada uno.

```javascript
const objetos = {
  one2: "one",
  two2: "two",
  three2: "three",
};
let { one2, three2 } = objetos;
console.log(one2);
console.log(three2);
```

## Array functions: map()

```javascript
array6.map((data, position) => {
  console.log(`mapping position is ${position} data: ${data}`);
});
```

## Array functions: reduce()

## Array functions: filter()

Filtra lo que retornara, retorna un arreglo:

```javascript
const result = array6.filter((item) => {
  return item % 2 === 0;
});
console.log("El resultado de filter es =>", result);
```

## Array functions: find() findIndex()

Solo encuentra un resultado, el primero que coincida:

```javascript
const find = array6.find((item) => {
  return item === 3;
});
console.log("El resultado de FIND ", find);
```

## CLASSES IN ES6

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails = () => {
    return `Name: ${this.name} and Age: ${this.age}`;
  };
}
```

## Inheritance in ES6

En la clase se pone extends clasePadre y en el constructor super(parametrosDelPadre)

```javascript
class Pilot extends Person {
  constructor(exp, type, licence) {
    super("Leyla", 20);
    this.experience = exp;
    this.type = type;
    this.licence = licence;
  }
  getData = () => {
    console.log(`Experience: ${this.experience} and type ${this.type}`);
  };
}
const ley = new Pilot(28, "private", "thie12");
ley.getData();
console.log(ley);
ley.getDetails();
```

## Callbacks and Promises

Creando una promesa:

```javascript
const postListPromise = new Promise((resolve, reject) => {
  $.get("https://jsonplaceholder.typicode.com/posts", (data) => {
    resolve(data);
  }).fail((err) => {
    reject(new Error(`Call failed for Get post list ${err.status}`));
  });
});
```

Llamando una promesa:

```javascript
postListPromise
  .then((response) => {
    console.log("Call Success! Response => ", response);
  })
  .catch((error) => {
    console.log("Call Failed =>", error);
  });
```
