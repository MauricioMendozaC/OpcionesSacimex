import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Logo from '../components/Servicios/Logo';
import Imagen from '../components/Imagen';
import Footer from '../components/Footer';
import VentanaEmergente from '../components/VentanaEmergente'; 
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';

const Servicios = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [evitarScroll, setEvitarScroll] = useState(false);
  const [estadoAviso, setEstadoAviso] = useState(null);

  useEffect( () => {
    setMostrarAnimaciones(true);
  },[]);

  const manejarScroll = (estado) => {
    setEvitarScroll(estado);
  };

  return(<>
    <EstilosGlobales $evitarScroll={evitarScroll}/>
    <Helmet>
      <meta
        name='description'
        content='Contamos con una gama de servicios diseñados para brindarte una experiencia completa.'/>
      <title>Opciones Sacimex - Servicios</title>
    </Helmet>
    <Header
      mostrarAnimaciones={mostrarAnimaciones}
      evitarScroll={manejarScroll}
      barraVerde/>
    <CentrarPrincipalContenedor>
      <PrincipalContenedor
        $mostrarAnimaciones={mostrarAnimaciones}>
          <Titulo texto='Servicios'/>
          <StyledH3>En nuestras sucursales, te ofrecemos la posibilidad de pagar por los siguientes servicios:</StyledH3>
          <ImagenesContenedor>
            <Logo
              href='http://servicios-en-linea.sapao.gob.mx'
              enlaceImagen='https://www.oaxaca.gob.mx/soapa/wp-content/uploads/sites/39/2023/01/LOGOS-251x100px_Servicios-de-Agua-Potable-y-Alcantarillado-de-Oaxaca.png'
              nombre='SAPAO'/>
            <Logo
              href='https://www.axtelcorp.mx'
              enlaceImagen='https://www.axtel.mx/logo-axtelcorp.png'
              nombre='Axtel'/>
            <Logo
              href='https://www.cfe.mx'
              enlaceImagen='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Comisi%C3%B3n_Federal_de_Electricidad_%28logo%29_.svg/150px-Comisi%C3%B3n_Federal_de_Electricidad_%28logo%29_.svg.png'
              nombre='CFE'/>
            <Logo
              href='https://www.dish.com.mx'
              enlaceImagen='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Dish_Network_logo_2012.svg/150px-Dish_Network_logo_2012.svg.png'
              nombre='Dish'/>
             <Logo
              href='https://www.totalplay.com.mx'
              enlaceImagen='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Logo_TotalPlay.svg/150px-Logo_TotalPlay.svg.png'
              nombre='Totalplay'/>
            <Logo
              href='https://portalmx.infonavit.org.mx'
              enlaceImagen='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Logo_INFONAVIT.svg/150px-Logo_INFONAVIT.svg.png'
              nombre='INFONAVIT'/>
            <Logo
              href='https://www.izzi.mx'
              enlaceImagen='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Logo_Izzi.svg/150px-Logo_Izzi.svg.png'
              nombre='izzi'/>
            <Logo
              href='https://ri.maxcom.com'
              enlaceImagen='https://ri.maxcom.com/recursos/images/maxcom/logo.png?v=3'
              nombre='Maxcom'/>
            <Logo
              href='https://megacableinternet.mx'
              enlaceImagen='https://seeklogo.com/images/M/megacable-logo-949D8420E2-seeklogo.com.png'
              nombre='Megacable'/>
            <Logo
              href='https://www.movistar.com.mx'
              enlaceImagen='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Movistar_isotype_2020.svg/150px-Movistar_isotype_2020.svg.png'
              nombre='Movistar'/>
            <Logo
              href='https://nextel.mx'
              enlaceImagen='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Nextel_Logo.svg/150px-Nextel_Logo.svg.png'
              nombre='Nextel'/>
            <Logo
              href='https://www.pase.com.mx'
              enlaceImagen='data:image/jpeg;base64,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'
              nombre='Pase Urbano'/>
            <Logo
              href='https://skypaquetes.mx'
              enlaceImagen='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Sky_Group_Logo_2020.png/150px-Sky_Group_Logo_2020.png'
              nombre='Sky'/>
            <Logo
              href='https://www.televia.com.mx'
              enlaceImagen='https://seeklogo.com/images/T/televia-logo-22E30EDFB5-seeklogo.com.png'
              nombre='Televía'/>
            <Logo
              href='https://telmex.com'
              enlaceImagen='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Telmex_Logo.svg/150px-Telmex_Logo.svg.png'
              nombre='Telmex'/>
            <Logo
              href='https://www.avon.mx'
              enlaceImagen='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Avon_logo.svg/150px-Avon_logo.svg.png'
              nombre='Avon'/>
            <Logo
              href='https://fuller.com.mx'
              enlaceImagen='https://upload.wikimedia.org/wikipedia/commons/1/11/Fuller_Cosmetics.png'
              nombre='Fuller'/>
            <Logo
              href='https://www.paycashglobal.com'
              enlaceImagen='data:image/png;base64,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'
              nombre='Paycash'/>
            <Logo
              href='https://www.arabela.com'
              enlaceImagen='https://amvd.org.mx/wp-content/uploads/2020/09/img-03.jpg'
              nombre='Arabela'/>
            <Logo
              href='https://www.somosbelcorp.com'
              enlaceImagen='https://seeklogo.com/images/B/belcorp-logo-248D9EEBC7-seeklogo.com.png'
              nombre='Belcorp'/>
            <Logo
              href='https://ara.com.mx'
              enlaceImagen='https://ara.com.mx/_next/image?url=%2Flogo-ara.png&w=256&q=100'
              nombre='Casas ARA'/>
            <Logo
              href='https://cesvin.com.mx'
              enlaceImagen='https://cesvin.com.mx/wp-content/uploads/2022/08/Logo_Header.png'
              nombre='Cesvin'/>
            <Logo
              href='https://www.dipak.com.mx'
              enlaceImagen='https://static.wixstatic.com/media/831f80_1f25d4c7c0f14a02a59aa1adeee7ad02~mv2.png/v1/fill/w_450,h_186,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20DIPAK-23azul.png'
              nombre='Dipak'/>
            <Logo
              href='https://www.farmaciasdesimilares.com'
              enlaceImagen='https://pbs.twimg.com/profile_images/1609964721951903745/OERFWDD2_400x400.jpg'
              nombre='Dr Simi'/>
            <Logo
              href='https://funeza.com'
              enlaceImagen='https://blogfuneza.files.wordpress.com/2017/11/logofunezanuevo-ajustado.jpg?w=200'
              nombre='Funeza Servicios Funerarios'/>
            <Logo
              href='https://www.ilusion.com'
              enlaceImagen='https://i.pinimg.com/originals/1c/1d/09/1c1d09f589aae4e06490a37313ff6cd1.png'
              nombre='Ilusión'/>
            <Logo
              href='https://lbel.tiendabelcorp.com.mx'
              enlaceImagen='https://lbelchile.vtexassets.com/arquivos/logo-top-lbel-selected.jpg'
              nombre="L'Bel"/>
            <Logo
              href='https://www.natura.com.mx'
              enlaceImagen='https://ms-f7-sites-prod-cdn.akamaized.net/docs/stories/1549533464306656056-natura-retailers-azure-es-brazil/resources/bc3f21ba-384d-4f6f-ab5e-a4151e935fbe/1549535191020416316_1549535191020416316'
              nombre='Natura'/>
            <Logo
              href='https://mx.oriflame.com'
              enlaceImagen='https://1000marcas.net/wp-content/uploads/2020/03/logo-Oriflame.png'
              nombre='Oriflame'/>
            <Logo
              href='https://selecciones.com.mx'
              enlaceImagen='https://d2ljecu2izvoog.cloudfront.net/wp-content/themes/selecciones-html5blank-stable/assets/img/logo.png'
              nombre='Selecciones'/>
            <Logo
              href='https://www.swissjustmexico.com/'
              enlaceImagen='https://swissjust.herokuapp.com/assets/imagenes/just_social.png'
              nombre='Swiss Just'/>
            <Logo
              href='https://telecable-hgo.com.mx'
              enlaceImagen='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_652/https://telecable-hgo.com.mx/wp-content/uploads/2020/11/Logotipo-Telecable-la-imagen-de-tu-divercioin-copia-1-02.png'
              nombre='Telecable'/>
            <Logo
              href='https://www.tupperware.com.mx'
              enlaceImagen='https://www.tupperware.com.mx/cdn/shop/files/logo_tw_ngo_pag_225x.png?v=1614285276'
              nombre='Tupperware'/>
            <Logo
              href='https://www.yanbal.com/mx/'
              enlaceImagen='https://www.yanbal.com/medias/logo-yanbal.svg?context=bWFzdGVyfGltYWdlc3wxMjExfGltYWdlL3N2Zyt4bWx8aDAzL2hiOS8xMDI5Mjg3NTEzMjk1OC9sb2dvLXlhbmJhbC5zdmd8MWMyNzY0ZWFlMDYzNzNhM2IyZDUwZWRhMGU2YjBkMTY1NDBmYmE5NDAzNzI1Njg1NGZhMTc1YzY1ZmI4YjBlNw'
              nombre='Yanbal'/>
            <Logo
              href='https://www.yves-rocher.com.mx'
              enlaceImagen='data:image/png;base64,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'
              nombre='Yves Rocher'/>
        </ImagenesContenedor>
      </PrincipalContenedor>
    </CentrarPrincipalContenedor>
    <Footer
      setEstadoAviso={setEstadoAviso}
      evitarScroll={manejarScroll}/>
    <VentanaEmergente
        estadoAviso={estadoAviso}
        setEstadoAviso={setEstadoAviso}
        evitarScroll={manejarScroll}/>
  </>);
};

export default Servicios;

const PrincipalContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: flex-start;
  margin-top: 60px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  padding: 30px 0 60px;
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;
`;

const StyledH3 = styled.h3`
  color: #00632F;
  font-family: 'Presidencia Fina', sans-serif;
  font-size: 1.25em;
  letter-spacing: 1px;
  text-align: center;
  width: 90%;
`;

const ImagenesContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  width: 90%;
`;