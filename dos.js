/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos

*/function mostrar() {
  let resp;
  let marca;
  let precio;
  let peso;
  let tipo;

  let acumPeso = 0;

  let marcaLiquidoMasCaro;
  let precioLiquidoMasCaro = 0;

  let marcaSolidoMasBarato;
  let precioSolidoMasBarato = 0;

  
  let bandera = 0;

  do {
    marca = prompt("Ingrese una marca");

    precio = parseFloat(prompt("Ingrese un precio"));
    while (precio < 1 || isNaN(precio)) {
      alert("precio no válido")
      precio = parseFloat(prompt("Ingrese un precio"));
    }

    peso = parseFloat(prompt("Ingrese un peso en kg"));
    while (isNaN(peso) || peso < 1) {
      alert("peso no válido");
      peso = parseFloat(prompt("Ingrese un peso en kg"));
    }

    tipo = prompt("Ingrese un tipo de producto: 'solido' o 'liquido'");
    while (tipo != "solido" && tipo != "liquido") {
      alert("tipo no valido");
      tipo = prompt("Ingrese un tipo de producto: 'solido' o 'liquido'");
    }

    acumPeso = acumPeso + peso;

    switch (tipo) {
      case "solido":
        if(bandera == 0 || precio<precioSolidoMasBarato){
          precioSolidoMasBarato = precio;
          marcaSolidoMasBarato = marca;
          bandera = 1;
        }
        
        break;

      case "liquido":
        if(bandera == 0 || precio>precioLiquidoMasCaro){
          precioLiquidoMasCaro = precio;
          marcaLiquidoMasCaro = marca;
          bandera = 1;
        }
        break;
    }

    resp = prompt("Desea continuar ingresando datos? si/no");
  } while (resp == "si")

  document.write("a)informar el peso total de la compra: "+acumPeso+"<br>"+
  "b) la marca del más caro de los líquidos: "+marcaLiquidoMasCaro+"<br>"+
  "c) la marca del más barato de los sólidos: "+marcaSolidoMasBarato);

}
