import { Usuario } from "./usuario";
import User from "./User";
import { useState } from "react";
const ContainerUser = () => {
	const user1 = new Usuario(
		"Elon",
		"Musk",
		[{ titulo: "Cien años de soledad", autor: "Gabriel García Márquez" }],
		["gato", "ShibaCoin"]
	);
	const [users, setUser] = useState([user1]);
	const NewUser = (e) => {
		e.preventDefault();
		setUser([
			...users,
			new Usuario(
				e.target.nombre.value,
				e.target.apellido.value,
				[{ titulo: e.target.titulo.value, autor: e.target.autor.value }],
				[e.target.mascota.value]
			),
		]);
	};
	return (
		<div
			style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			<h2>Usuarios</h2>
			{users?.map((user, inx) => (
				<User user={user} index={inx} key={inx} />
			))}
			<div style={{ margin: 15, borderBottom: "1px solid black" }}>
				Crear Nuevo user
			</div>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
				onSubmit={NewUser}
			>
				<label>Nombre</label>
				<input name="nombre" required />
				<label>apellido</label>
				<input name="apellido" required />
				<label>Libro</label>
				<input name="titulo" placeholder="titulo" required />
				<input name="autor" placeholder="autor" required />
				<label>Mascota</label>
				<input name="mascota" required />
				<button type="submit">Agregar User</button>
			</form>
		</div>
	);
};
export default ContainerUser;
