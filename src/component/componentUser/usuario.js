export class Usuario {
	constructor(nombre, apellido, libros, mascotas) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = libros;
		this.mascotas = mascotas;
	}
	getFullName() {
		return `Nombre completo : ${this.nombre} ${this.apellido}`;
	}
	addMascota(mascota) {
		this.mascotas.push(mascota);
		return `Se agrego correctamente ${mascota}`;
	}
	countMascotas() {
		return this.mascotas.length;
	}
	addBook(titulo, autor) {
		this.libros.push({ titulo: titulo, autor: autor });
		return `Se agrego correctamente el libro ${titulo} de ${autor}`;
	}
	getBookNames() {
		return this.libros.map((element) => <div>{element.titulo}</div>);
	}
}
