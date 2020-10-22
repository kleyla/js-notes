// Diferencias entre funciones arrow y regular ES2015

function foo(a, b, c) {
  console.log("hello");
}
// arrow function
(a, b, c) => {
  console.log("hello");
};
// se puede omitir los parentesis
a => {
  console.log("hello");
};
// una linea de solo una expesion
() => "hello";
