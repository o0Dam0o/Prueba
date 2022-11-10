import { contacto } from "./constactos";
import ContainerB from "../component-B/constainerB";
const ContainerA = () => {
	const c1 = new contacto("adan", "rodriguez", "adanrsd60@gmail.com", true);
	const c2 = new contacto("joe", "rodriguez", "adaadsad@gmail.com", false);
	const contatos = [c1, c2];
	return (
		<div
			style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			<h2>Contactos</h2>
			{contatos.map((c, i) => {
				return <ContainerB {...c} id={i + 1} key={i} />;
			})}
		</div>
	);
};
export default ContainerA;
