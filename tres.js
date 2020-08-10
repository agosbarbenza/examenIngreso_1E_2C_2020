/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let sexo;
	let lugar;
	let temporada;
	let cantPersonas;
	let resp;

	let bandera = 0;

	let contBariloche = 0;
	let contCataratas = 0;
	let contSalta = 0;
	let lugarMasElegido;

	let sexoTitularMasPasajeros;
	let cantMasPasajeros = 0;

	let acumPersonasInvierno = 0;
	let contViajesPersonasInvierno = 0;
	let promedioPersonasInvierno = 0;

	do {
		sexo = prompt("Ingrese sexo femenino ('f') o masculino('m') ");
		while (sexo != "f" && sexo != "m") {
			alert("Sexo invalido, elija entre femenino ('f') o masculino ('m')");
			sexo = prompt("Ingrese sexo femenino ('f') o masculino('m')");
		}

		lugar = prompt("Ingrese un destino: bariloche, cataratas, salta");
		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta") {
			alert("Destino no valido, elija entre bariloche, cataratas o salta");
			lugar = prompt("Ingrese un destino: bariloche, cataratas, salta");
		}

		temporada = prompt("Ingrese una temporada: invierno, verano, otoño, primavera");
		while (temporada != "invierno" && temporada != "verano" && temporada != "otoño" && temporada != "primavera") {
			alert("Temporada no válida, elija entre invierno, verano, otoño o primavera");
			temporada = prompt("Ingrese una temporada: invierno, verano, otoño, primavera");
		}

		cantPersonas = parseInt(prompt("Ingrese la cantidad de personas"));
		while (cantPersonas < 1 || isNaN(cantPersonas)) {
			alert("Ingrese una cantidad válida");
			cantPersonas = parseInt(prompt("Ingrese la cantidad de personas"));
		}

		if (bandera == 0 || cantPersonas > cantMasPasajeros) {
			cantMasPasajeros = cantPersonas;
			sexoTitularMasPasajeros = sexo;
			bandera = 1;
		}

		if (temporada == "invierno") {
			acumPersonasInvierno = acumPersonasInvierno + cantPersonas;
			contViajesPersonasInvierno++;
		}

		switch (lugar) {
			case "bariloche":
				contBariloche++;

				break;
			case "cataratas":
				contCataratas++;
				break;


			case "salta":
				contSalta++;
				break;
		}

		resp = prompt("Desea continuar ingresando datos? si/no");
	} while (resp == "si");


	if (contBariloche > contCataratas && contBariloche > contSalta) {
		lugarMasElegido = "Bariloche";

	} else if (contCataratas > contBariloche && contCataratas > contSalta) {
		lugarMasElegido = "Cataratas";
	} else {
		lugarMasElegido = "Salta";
	}

	promedioPersonasInvierno = (acumPersonasInvierno / contViajesPersonasInvierno).toFixed(0);

	document.write("a)el lugar más elegido: " + lugarMasElegido + "<br>" +
		"b)el sexo de titular que lleva más pasajeros: " + sexoTitularMasPasajeros + "<br>" +
		"c)el promedio de personas por viaje,  que viajan en invierno: " + promedioPersonasInvierno);

}
