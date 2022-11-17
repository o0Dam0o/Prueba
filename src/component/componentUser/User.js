import { useState } from "react";
const User = ({ user, index }) => {
	const [mostrar, setMostrar] = useState(false);
	const AddMas = (e) => {
		e.preventDefault();
		const mascota = e.target.mascota.value;
		user.addMascota(mascota);
		setMostrar(false);
	};
	const AddBook = (e) => {
		e.preventDefault();
		user.addBook(e.target.titulo.value, e.target.autor.value);
		setMostrar(false);
	};

	return (
		<div>
			<div>
				User N°{index + 1}
				<button
					style={{ marginLeft: 20 }}
					onClick={() => {
						if (!mostrar) {
							setMostrar(true);
						} else {
							setMostrar(false);
						}
					}}
				>
					{!mostrar ? "Mostrar datos" : "Ocultar Datos"}
				</button>
			</div>
			{!mostrar ? (
				""
			) : (
				<>
					<div>{user.getFullName()}</div>
					<div style={{ border: "1px solid black" }}>
						Mascotas
						{user.mascotas.map((e, i) => (
							<div key={i}>{e}</div>
						))}
						<div>Mascotas total : {user.countMascotas()}</div>
						<div>
							<form onSubmit={AddMas}>
								<label>Agregar Mascota</label>
								<input name="mascota" placeholder="mascota" />
								<button type="submit">Agregar</button>
							</form>
						</div>
					</div>
					<div>
						Libros
						<div>{user.getBookNames()}</div>
					</div>
					<div>
						<form onSubmit={AddBook}>
							<label>Agregar Libro</label>
							<input name="titulo" placeholder="titulo" />
							<input name="autor" placeholder="autor" />
							<button type="submit">Agregar</button>
						</form>
					</div>
				</>
			)}
		</div>
	);
};
export default User;
