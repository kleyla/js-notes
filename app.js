console.log("hi");
var datos = {
  nombre: "Karen",
  numeros: [1, 2, 3],
  enumerar: function () {
    this.numeros.forEach((n) => {
      console.log(`${this.nombre} tiene ${n}`);
    });
  },
  saludar: () => {
    console.log(`mi nombre es ${this.nombre}`);
  },
};

// datos.saludar();

// Template strings
name = "Karen";
age = "20";

console.log(`Mi nombre es ${name} y mi edad es ${age}`);

// Arrow functions
function saludame(name) {
  return `hola ${name}`;
}
const saludameArrow = (name) => {
  return `Arrow hola ${name}`;
};

console.log(saludameArrow("leyla"));

// Rest Operator
const mSum = (num1, num2) => console.log(num1 + num2);
mSum(1, 2, 3);

const printArg = (...args) => console.log(args);
printArg(1, 2, 3, 4);

const sumArgs = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};
console.log(`La suma de argumentos es ${sumArgs(1, 2, 3, 4, 5)}`);

const sumArgsOp = (num1, num2, ...args) => {
  let sum = num1 + num2;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};
console.log(
  `La suma de argumentos opcionales es ${sumArgsOp(1, 2, 3, 4, 5, 6)}`
);

// Spread Operator

let array1 = [1, 2, 3, 4, 5];
let array2 = array1;
let array3 = [...array1];
array1.push(6);
console.log(array1);
console.log(array2);
console.log(array3);

let array4 = [7, 8, 9];
let array5 = array1.concat(array4);
console.log(array5);
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

// Destructuring
// console.clear();
const name1 = "kay goe koi";
const nameArray = name1.split(" ");
console.log(nameArray);

let [one, two, three] = nameArray;
console.log(one);
console.log(two);
console.log(three);

let [one1, , three1] = nameArray;
console.log(one1);
console.log(three1);
// con objetos
const objetos = {
  one2: "one",
  two2: "two",
  three2: "three",
};
let { one2, three2 } = objetos;
console.log(one2);
console.log(three2);

// Array functions: Map
array6.map((num, position) => {
  console.log(`mapping position is ${position} num: ${num}`);
});

// Array functions: reduce()

array6.reduce((acc, item) => {
  // console.log(`Acumulator is ${acc}`);
}, 9);

// Array functions: filter()
const result = array6.filter((item) => {
  return item % 2 === 0;
});
console.log("El resultado de FILTER es =>", result);

// Array functions: find() findIndex()

const find = array6.find((item) => {
  return item === 3;
});
console.log("El resultado de FIND ", find);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails = () => {
    console.log(`Name: ${this.name} and Age: ${this.age}`);
  };
}

var jonh = new Person("jonh", 25);
console.log(jonh.getDetails());

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

// Callbacks and Promises

const postListPromise = new Promise((resolve, reject) => {
  $.get("https://jsonplaceholder.typicode.com/posts", (data) => {
    // console.log(data);
    resolve(data);
  }).fail((err) => {
    reject(new Error(`Call failed for Get post list ${err.status}`));
  });
});

postListPromise
  .then((response) => {
    // console.log("Call Success! Response => ", response);
  })
  .catch((error) => {
    console.log("Call Failed =>", error);
  });

// it doesnt work
let list = [];
$.get("https://jsonplaceholder.typicode.com/posts", (response) => {
  list = response;
});
console.log(list);

// Promise with arrow function
const postDetailsPromise = (data) =>
  new Promise((resolve, reject) => {
    $.get(
      `https://jsonplaceholder.typicode.com/posts/${data[0].id}`,
      (data) => {
        console.log(data);
        resolve(data);
      }
    ).fail((err) => {
      reject(`Details failed ${err}`);
    });
  });

postListPromise
  .then(postDetailsPromise)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("Error promise ", error);
  });
