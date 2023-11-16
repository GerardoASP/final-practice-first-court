import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React, { useState } from 'react'


const PoliticalMenu = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{  borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Responsable Y encargo del tratamiento de datos" value="1" />
            <Tab label="Finalidad y tratamiento" value="2" />
            <Tab label="Datos suministrados y forma de obtención" value="3" />
            <Tab label="Cambios en la politica de tratamiento" value="4" />
            <Tab label="Derechos de los titulares" value="5" />
            <Tab label="Legislación vigente" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <p>El Responsable del Tratamiento de Datos Personales y 
          otra información de los Titulares es Triptop System S.A.S.</p>
          <p>Domicilio: Sabana</p> 
          <p>Bogotá, Colombia; teléfono: 3004966437; correo electrónico:andresf.granadav@autonoma.edu.co</p>
        </TabPanel>
        <TabPanel value="2">
          <p>FINALIDADES</p>
          <p>Las finalidades para las cuales Triptop System tratará los Datos Personales de los Titulares son:</p>
          <p>En relación con la base de datos de clientes: </p>
          <p>a. Cumplir los contratos de servicios celebrados con clientes.</p>
          <p>b. Utilizar los Datos Personales para mercadeo y/o comercialización de nuevos servicios o productos de Triptop System.</p>
          <p>c. Medir niveles de satisfacción.</p>
          <p>d. Realizar encuestas.</p>
          <p>e. Contactar a los titulares para realizar recordatorios sobre mantenimientos y de vencimientos de garantías, así como para informarles sobre los causales que podrían llevar a la pérdida de cobertura.</p>
          <p>f. Ejecutar campañas de fidelización.</p>
          <p>g. Enviar invitaciones a eventos.</p>
          <p>h. Ofrecer productos y servicios de Triptop System.</p>
          <p>i. Comunicar información relacionada con productos para la financiación en la adquisición de bienes y servicios de Triptop System.</p>
        </TabPanel>
        <TabPanel value="3">
          <p>Los datos podrán ser suministrados explícitamente a Triptop System mediante formatos de ingreso o vinculación, recolectados personalmente a través de sus empleados, prestadores de servicios o representantes, obtenidos mediante consulta a terceros que administren Bases de Datos, o recolectados implícitamente de las operaciones de análisis de grupos objetivo, adquisición de los productos o servicios que son ofrecidos por Triptop System, o de los comportamientos de los Titulares como reclamaciones, solicitudes de información, encuestas, propuestas, ofertas, visita de las instalaciones de Triptop System, de participación en proyectos, programas y eventos, entre otros. Triptop System solo recopilará y/o tratará datos considerados como Datos Sensibles en los casos permitidos por la ley. Para estos casos, los Titulares que no están obligados a suministrar los referidos datos o a autorizar su tratamiento. Una vez suministrados dichos datos y otorgado el correspondiente consentimiento, los datos serán recopilados y tratados únicamente para las finalidades descritas en la presente Política de Privacidad.</p>
        </TabPanel>
        <TabPanel value="4">
          <p>Cualquier cambio o modificación sustancial de la presente Políticas de Privacidad, será comunicado oportunamente a los Titulares mediante un comunicado en la Página Web o mediante correo electrónico.</p>
        </TabPanel>
        <TabPanel value="5">
          <p>Triptop System informa a los Titulares que, conforme a la legislación vigente, estos tienen el derecho de conocer, actualizar, rectificar su información, y/o revocar la autorización para su tratamiento. En particular, son derechos de los titulares según se establece en el artículo 8 de la Ley 1581 de 2012: a) Conocer, actualizar y rectificar sus Datos Personales b) Solicitar prueba de la autorización otorgada c) Ser informado, previa solicitud, respecto del uso que le ha dado a sus Datos Personales; d) Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en la ley e) Revocar la autorización y/o solicitar la supresión del dato f) Acceder en forma gratuita a sus Datos Personales que hayan sido objeto de Tratamiento.</p>
          <p>ÁREA ENCARGADA DE PETICIONES, CONSULTAS Y RECLAMOS</p>
          <p>
            El área encargada de atender las peticiones, consultas y reclamos de los Titulares para ejercer sus derechos a conocer, actualizar, rectificar y suprimir sus datos y revocar su autorización es la Dirección de Servicio al Cliente de Triptop System la cual podrá ser contactada en el siguiente correo electrónico servicioalcliente@triptopsystem.co y/o en el siguiente número de teléfono 3004966437.
          </p>
        </TabPanel>
        <TabPanel value="6">
          <p>La legislación nacional vigente en materia de protección de Datos Personales está contenida en la Ley 1581 de 2012, el Decreto 1377 de 2013 y la Ley 1266 de 2008 y las normas que las modifiquen o complementen.</p>
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default PoliticalMenu
