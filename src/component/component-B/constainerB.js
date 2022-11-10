const ContainerB = ({ nombre, apellido, email, conectado, id }) => {
	return (
		<div style={{ border: "1px solid black" }}>
			<div>contacto {id}</div>
			<div>nombre : {nombre}</div>
			<div>apellido : {apellido}</div>
			<div>email : {email}</div>
			<div>conectado : {conectado ? "conectado" : "desconectado"}</div>
		</div>
	);
};
export default ContainerB;
