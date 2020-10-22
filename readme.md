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
var { nombre, ...rest} = a;
```

## Clases

En js una clase es una funcion 

```javascript
typeof function (){}
typeof class Foo{}
```