// La función así declarada con la asincronía pierde this.precio y this.iva
// Para arreglar esto, utilizaremos la función arrow

/*let oDatos = { precio: 12, iva: 1.16};
oDatos.calculaIvaAsync = function () {
	setTimeout ( function () {
		let precioFinal = this.precio * this.iva;
		console.log(
			`Usando una función clásica:
			 El precio final es ${precioFinal.toFixed(2)}`
			);
	}, 1000)
}

oDatos.calculaIvaAsync();*/

let oDatos = { precio: 12, iva: 1.16};

oDatos.calculaIvaAsync = function () {
	setTimeout ( () => {
		let precioFinal = this.precio * this.iva;
		console.log(
			`Usando una función arrow:
			 El precio final es ${precioFinal.toFixed(2)}`
			);
	}, 1000)
}

oDatos.calculaIvaAsync()
