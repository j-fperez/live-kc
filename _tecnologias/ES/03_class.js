class Libro {
	constructor (autor, titulo) {
		this.autor = autor;
		this.titulo = titulo;
	}

	mostrar() {
		console.log (this);
	}
}

class LibroTecnico extends Libro {
	constructor(autor, titulo, categoria='Informática') {
		super(autor, titulo);
		this.categoria = categoria;
	}
}

let libro1 = new LibroTecnico("J. Pérez", "Aprende Angular");

libro1.editorial = "Ra-ma";
libro1.mostrar();
