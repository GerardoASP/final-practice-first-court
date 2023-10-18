import React from "react";
import "./ServicesList.scss";
import { useState } from "react";
import { Box, Grid, Modal, Typography } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    justifyContent: 'center',
    alignItems: 'center'
  };
  
  
  export const ServicesList = ({ servicesParam }) => {
    console.log("Service param", servicesParam);
    const [open,setOpen] = useState(false);
    const [selectedService,setSelectedService] = useState(null);
  
    const handleOpen = (serviceId) => {
      console.log("serviceId", serviceId);
      console.log("servicesParam", servicesParam);
      const serviceRes = servicesParam.find((service) => service._id === serviceId);
      console.log("service", serviceRes);
      setSelectedService(serviceRes);
      setOpen(true);
    };
    const handleClose = () => setOpen(false);
  
    return (
      <div className="content-services-list">
        <div>
          <Grid container spacing={2}>
            <Grid item xs={8} sm={8} md={8}>
              <div className="grid4-style">
                <h2>Servicios</h2>
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={4} md={4}>
                    <div className="img-content-grid">
                      {servicesParam.length > 0 ? (
                        servicesParam.map((service) => (
                          <div key={service._id}>
                            <img src={service.avatar} alt={service.nameService} onClick={() => handleOpen(service._id)}/>
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontSize: 36,textAlign: 'center'}}>
                                {selectedService ? selectedService.nameService : ''}
                                </Typography>
                                <img src={selectedService ? selectedService.avatar : ''} style={{width: '300px', height: '200px', borderRadius:25, marginLeft:50}}/>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: 20,textAlign: 'center'}}>
                                {selectedService ? selectedService.serviceDescription : ''}
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        ))
                      ) : (
                        <p>No hay servicios</p>
                      )}
                    </div>
                  </Grid>
                  <Grid item xs={8} sm={8} md={8}>
                    <div className="text-content-grid">
                      {servicesParam.length > 0 ? (
                        servicesParam.map((service) => (
                          <div key={service._id}>
                            <p>{service.nameService}</p>
                            <p>{service.serviceDescription}</p>
                          </div>
                        ))
                      ) : (
                        <p>No hay servicios</p>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
        </Grid>
        </div>
      </div>
    );
  };