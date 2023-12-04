import styled from 'styled-components';
import { label, smaLength2, smaLength3, medLength3, smaFont, medFont } from '../../utils/stylesRules';

const AvisoPrivacidad = () => {
  return(
    <Texto>
      <Titulo>Aviso de privacidad.</Titulo>
      <SubTitulo>¿Quién es opciones Sacimex S.A. de C.V. SOFOM ENR?</SubTitulo>
      <Parrafo>Opciones Sacimex S.A. de C.V. SOFOM E.N.R., con domicilio en calle Valerio Trujano 713, Colonia Centro, Oaxaca de 
        Juárez, Oaxaca, México C.P. 68000, y en el portal de internet <a href='https://opcionessacimex.com/'>www.opcionessacimex.com</a>
        , es una empresa responsable que se encuentra regida bajo las leyes mexicanas vigentes que se encuentra constituida el 03 de 
        Septiembre del 2008, según Instrumento Público número 4162 Volumen 50 otorgado por el Lic. José Jorge Enrique Zárate Ramírez, 
        Notario Público N° 84 en el Estado de Oaxaca y que para efectos del Presente aviso de privacidad tiene la calidad de 
        responsables frente a usted, como titular de datos y que en lo sucesivo se le denominará “SACIMEX”.</Parrafo>
      <Parrafo>Los datos personales que recabaremos de usted, los utilizaremos para las siguientes finalidades que son necesarias para 
        el servicio que solicita:</Parrafo>
      <Lista>
        <li>Atender su solicitud del producto que ofrece Sacimex para formalizar y complementar una relación jurídica.</li>
        <li>Verificar y confirmar su identidad.</li>
        <li>Analizar la capacidad crediticia del titular.</li>
        <li>Administrar y operar el servicio que solicita con nosotros.</li>
        <li>Elaborar estadísticas y reportes de los servicios prestados por Sacimex con el objeto de llevar un control interno de dichos 
          servicios, así como para dar seguimiento puntual de los mismos.</li>
        <li>La atención de requerimientos de cualquier autoridad competente siempre y cuando se encuentre por escrito y fundamentado.</li>
        <li>Podrán ser para prospección comercial y/o hacer de su conocimiento de las actividades culturales, deportivas, etc., que 
          en su momento realice Sacimex. (actividades no lucrativas de compromiso social que tenga como objetivo promover el 
          desarrollo de las personas, a través de proyectos educativos).</li>
        <li>Utilizarlos en cualquier acto o diligencia de cobranza judicial o extrajudicial.</li>
        <li>Contactar al titular para ofrecerle productos y servicios.</li>
      </Lista>
      <Parrafo>Para el caso de que no desee que sus datos personales no sean tratados para las finalidades aquí mencionadas, usted 
        puede presentar su solicitud a través de los siguientes mecanismos:</Parrafo>
      <Lista>
        <li>Mediante escrito que presente el titular en las oficinas de Sacimex a efecto de que el responsable les dé el tratamiento 
          necesario a sus datos personales.</li>
        <li>La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos el 
          servicio y productos que solicita o contrata con nosotros.</li>
      </Lista>
      <SubTitulo>¿Qué datos personales utilizamos para los fines anteriores?</SubTitulo>
      <Parrafo>Sacimex recabará del titular los siguientes datos personales.</Parrafo>
      <Lista>
        <li><b>Datos de identificación y contacto</b>: Nombre completo, dirección, teléfono de casa, celular y/o de trabajo, estado 
          civil, firma autógrafa, correo electrónico, R.F.C., CURP, lugar y fecha de nacimiento, edad, nombre de familiares, 
          dependientes y beneficiarios, así como sus domicilios, entre otros.</li>
        <li><b>Datos laborales</b>: ocupación, puesto, área o departamento, domicilio, teléfono y correo electrónico de trabajo, 
          referencias laborales y referencias personales, entre otros.</li>
        <li><b>Datos financieros o patrimoniales</b>: Bienes muebles e inmuebles, historial crediticio, ingresos y egresos, servicios 
          contratados, entre otros.</li>
        <li><b>Perfil del cliente</b>: identificación, demográficos, referencias de localización, entre otros.</li>
      </Lista>
      <Parrafo>Además de los datos personales mencionados anteriormente, para las finalidades informadas en el presente aviso de 
        privacidad utilizaremos los siguientes datos personales considerador como sensibles, que requieren especial protección: 
        Pertenencia a un sindicato. Los datos que aquí se mencionan son recabados siempre por su consentimiento y requisitados por 
        usted.</Parrafo>
      <SubTitulo>¿Con quién compartimos los datos personales?</SubTitulo>
      <Parrafo>Sacimex podrá compartir sus datos personales a terceros mexicanos y que se mencionan a continuación:</Parrafo>
      <Lista>
        <li>Instituciones de Fuentes de Fondeo (Financiera Nacional de Desarrollo Agropecuario, Rural, Forestal y Pesquero, PRONAFIM, 
          Banco Multiva).</li>
        <li>Comisión Nacional Bancaria y de Valores.</li>
        <li>Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros.</li>
      </Lista>
      <SubTitulo>¿Cómo puede acceder, rectificar o cancelar sus datos personales u oponerse a su uso?</SubTitulo>
      <Lista>
        <li><b>Acceso</b>: Usted tiene derecho a conocer qué datos personales tenemos de usted, para que los utilizamos y las 
          condiciones del uso que les damos.</li>
        <li><b>Rectificación</b>: Es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada.</li>
        <li><b>Cancelación</b>: Es su derecho solicitar la eliminación en nuestros registros o base de datos cuando considere que sus 
          datos están siendo mal utilizadas.</li>
        <li><b>Oposición</b>: Usted tiene derecho a oponerse al uso de sus datos personales para fines específicos.</li>
      </Lista>
      <Parrafo>Estos derechos son conocidos como <em>“Derechos ARCO”</em>.</Parrafo>
      <SubTitulo>¿Cómo puedo ejercer mis derechos ARCO?</SubTitulo>
      <Parrafo>Usted o a través de su representante legal debidamente acreditado podrá acceder, rectificar o cancelar sus datos 
        personales o bien oponerse o revocar su consentimiento para el uso de los mismos, presentando su solicitud por escrito a la 
        Oficina de Atención para la Protección de Datos, cuya función principal será la atención de los clientes acerca de sus derechos 
        ARCO.</Parrafo>
      <Parrafo>De lo anterior, favor de acudir a la oficina mencionada con anterioridad en un horario de lunes a viernes de 10:00 a 
        14:00 horas en las oficinas ubicadas en Valerio Trujano 713, Colonia Centro, Oaxaca de Juárez, Oaxaca, o al teléfono (951) 
        5141208, o al Correo. <a href='mailto:atencion_a_usuarios@opcionessacimex.com'>atencion_a_usuarios@opcionessacimex.com</a>, 
        quien lo atenderá con mucho gusto.</Parrafo>
      <SubTitulo>¿Cómo le informaremos sobre cambios al presente Aviso de Privacidad?</SubTitulo>
      <Parrafo>Para el caso de modificación del presente aviso, difundirá a través de oficio pegados al interior de las oficinas de la 
        empresa o puede realizarlo por los medios que considere convenientes para el Titular.</Parrafo>
    </Texto>
  );
};

export default AvisoPrivacidad;

const Texto = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${smaLength2};
  padding: ${medLength3} ${smaLength3};
  width: 100%;
`;

const Titulo = styled.h3`
  font-size: ${medFont};
`;

const SubTitulo = styled.h4`
  font-size: ${smaFont};
  text-align: justify;
  width: 100%;
`;

const Parrafo = styled.p`
  color: ${label};
  font-size: ${smaFont};
  text-align: justify;
  width: 100%;

  a {    
    font-size: ${smaFont};
  };

  em {
    font-size: ${smaFont};
  };
`;

const Lista = styled.ul`
  color: ${label};
  list-style-type: disc;
  padding-left: ${smaLength2};
  text-align: justify;
  width: 100%;

  li {
    font-size: ${smaFont};
  };

  b {
    font-size: ${smaFont};
  }
`;