/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let nombre;
	let peso;
	let sexo;
	let edad;

	let contMujeres = 0;

	let acumEdades = 0;
	let promedioEdades = 0;

	let nombreHombreMasPesado;
	let pesoHombreMasPesado = 0;

	let bandera = 0;

	for (let i = 1; i <= 5; i++) {

		nombre = prompt("Ingrese su nombre");
		while (!(isNaN(nombre))) {
			alert("Ingrese un nombre válido")
			nombre = prompt("Ingrese su nombre");
		}

		peso = parseFloat(prompt("Ingrese un peso en kg"));
		while (isNaN(peso) || peso < 1) {
			alert("peso no válido");
			peso = parseFloat(prompt("Ingrese un peso en kg"));
		}

		sexo = prompt("Ingrese sexo 'f' o 'm' ");
		while (sexo != "f" && sexo != "m") {
			alert("Sexo invalido");
			sexo = prompt("Ingrese sexo 'f' o 'm' ");
		}

		edad = parseInt(prompt("Ingrese su edad"));
		while (edad < 1 || edad > 100 || isNaN(edad)) {
			alert("Edad inválida");
			edad = parseInt(prompt("Ingrese su edad"));
		}

		if(sexo == "f"){
			contMujeres++;
		}

		acumEdades = acumEdades+edad;

		if(sexo == "m"){
			if(bandera == 0 || peso>pesoHombreMasPesado){
				pesoHombreMasPesado = peso;
				nombreHombreMasPesado = nombre;
				bandera = 1;
			}
		}

	}

	promedioEdades = (acumEdades/5).toFixed(1);

	document.write("a)informar la cantidad de mujeres: "+contMujeres+"<br>"+
	"b)la edad promedio en total: "+promedioEdades+"<br>"+
	"c)el hombre mas pesado: "+nombreHombreMasPesado);
}
