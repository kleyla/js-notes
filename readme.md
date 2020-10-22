# Javascript notes

## Diferencias entre funciones arrow y regular ES2015

```javascript
// funcion regular
function foo(a, b, c) {
  console.log("hello");
}
// arrow function
(a, b, c) => {
  console.log("hello");
};
// se puede omitir los parentesis
(a) => {
  console.log("hello");
};
// una linea de solo una expesion
() => "hello";
```

## Template literals

```javascript
// comun
"abc" + "def";
"hoy es " + new Date();
// template
`hoy es ${new Date()}`;
// remplazando un if
`hola ${5 > 6 ? "mal" : "bien"}` // anidacion
`mi nombre es ${
  true ? `karen cual es tu ${true ? "nombre?" : "trabajo?"}` : "juan"
}` // multilinea
`hola
como estas?`;
```

## Operadores spread y sintaxis rest

```javascript
function foo(a, b) {
  console.log(a, b);
}
var a = [99, 10];
// normal
foo(a[0], a[1]);
// spread
foo(...a);
// rest params
function bar(...a) {
  console.log(...a);
}
bar(1, 2, 3, 4, 5, 6);
// objetos
var a = {
  nombre: "karen",
  edad: 20,
  hola: true,
};
var { nombre, ...rest } = a;
```

## Clases

En js una clase es una funcion

```javascript
typeof function () {};
typeof class Foo {};
```

## Promesas

Permite ejecutar codigo asincrono. Termina en algun punto en el futuro. Tiene dos estados exitoso o fallido.

```javascript
function getUsuarios() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          nombre: "karen",
          edad: 222,
        },
      ]);
    }, 2000);
  });
}
getUsuarios().then(console.log);
function getUsuarios() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ error: true, mensaje: "Hubo un error" });
    }, 2000);
  });
}
getUsuarios()
  .then(function (usuarios) {
    console.log(usuatios[0]);
  })
  .catch(function (error) {
    console.warn(error);
  });
```

## async await

Una funcion asincrona responde con una Promesa.

```javascript
async function getUsuarios() {
  return "hola";
}
getUsuarios();
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getUsuarios() {
  await esperar(3000);
  return [
    { nombre: "karen", pass: Math.random() },
    { nombre: "karen", pass: Math.random() },
  ];
}
getUsuarios().then(console.log);
```
