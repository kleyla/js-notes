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
