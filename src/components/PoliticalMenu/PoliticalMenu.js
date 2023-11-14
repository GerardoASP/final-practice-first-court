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
          <p>
            a. Cumplir los contratos de servicios celebrados con clientes.
            b. Utilizar los Datos Personales para mercadeo y/o comercialización de nuevos servicios o productos de Triptop System.
            c. Medir niveles de satisfacción.
            d. Realizar encuestas.
            e. Contactar a los titulares para realizar recordatorios sobre mantenimientos y de vencimientos de garantías, así como para informarles sobre los causales que podrían llevar a la pérdida de cobertura.
            f. Ejecutar campañas de fidelización.
            g. Enviar invitaciones a eventos.
            h. Ofrecer productos y servicios de Triptop System.
            i. Comunicar información relacionada con productos para la financiación en la adquisición de bienes y servicios de Triptop System.
          </p>
        </TabPanel>
        <TabPanel value="3">
          <p></p>
        </TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
        <TabPanel value="5">Item Five</TabPanel>
        <TabPanel value="6">Item Six</TabPanel>
      </TabContext>
    </Box>
  )
}

export default PoliticalMenu
