import styled from 'styled-components';
import { greenSacimex, text, disabled, smaLength1, smaLength3, medLength2, larLength3, smaFont, medFont } from '../../utils/stylesRules';

const Sucursal = ({ nombre, direccion, ubicacion, telefono1, telefono2, email, children, activo }) => {

	return(
		<PrincipalContenedor
			$mostrarInfo={activo}>
				<NombreContenedor>
					<NombreSucursal>{nombre}</NombreSucursal>
					{children}
				</NombreContenedor>
      	<Info
					$mostrarInfo={activo}>
						{activo && (<>
        			<Direccion>{direccion}</Direccion>
							{ubicacion && (<Telefono $mapa href={ubicacion}>Ubícanos en el mapa.</Telefono>)}
        			<TelefonosContenedor>
								{telefono1 && (<Telefono href={`tel:${telefono1}`}>{telefono1}</Telefono>)}
								{telefono2 && (<Telefono href={`tel:${telefono2}`}>{telefono2}</Telefono>)}
        			</TelefonosContenedor>
							{email && (<Telefono href={`mailto:${email}`}>{email}</Telefono>)}
						</>)}
      	</Info>
		</PrincipalContenedor>
	);
};

export default Sucursal;

const PrincipalContenedor = styled.li`
  border-bottom: 1px solid ${disabled};
	display: grid;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	grid-template-columns: 100%;
	grid-template-rows: ${medLength2} auto;
	padding: ${smaLength1};
	width: 100%;

	@media (min-width: 1000px) {
    grid-template-columns: 300px;
		width: 300px;
  };
`;

const NombreContenedor = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding-right: ${smaLength3};
	width: 100%;
`;

const NombreSucursal = styled.p`
	color: ${greenSacimex};
	font-size: ${medFont};
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	height: ${({ $mostrarInfo }) => $mostrarInfo ? larLength3 : '0'};
	justify-content: space-between;
	overflow-x: hidden;
	overflow-y: hidden;
	transition: height .3s;
`;

const Direccion = styled.p`
	color: ${text};
	font-size: ${smaFont};
  text-align: justify;

	@media (min-width: 1000px) {
    text-align: left;
  };
`;

const TelefonosContenedor = styled.div`
	align-items: center;	
  display: flex;
  flex-direction: column;
	gap: ${smaLength1};
  width: 100%;
`;

const Telefono = styled.a`
	color: ${({ $mapa }) => $mapa ? greenSacimex : text};	
	font-size: ${smaFont};
`;