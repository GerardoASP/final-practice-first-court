import { LinkedIn, LocationOn } from '@material-ui/icons'
import { Facebook, Instagram, LocalPhone, YouTube } from '@mui/icons-material'
import { Box, Container, Grid,Typography } from '@mui/material'
import React from 'react'
import Avatar from '../../assets/images/Hugo-Salazar-Ospina-removebg-preview.png';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
const Footer = () => {
    

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
        <Container>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Ubicación
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={2}>
                            <LocationOn />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="body2" color="text.secondary" marginBottom={2}>
                                Antigua Estación del Ferrocarril Manizales - Caldas - Colombia
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={2}>
                            <LocalPhone />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="body2" color="text.secondary" marginBottom={2}>
                                8825374
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Redes Sociales
                    </Typography>
                    <Facebook fontSize='large'/>
                    <Instagram fontSize='large'/>
                    <YouTube fontSize='large'/>
                    <LinkedIn fontSize='large'/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Politica y privacidad de los datos
                    </Typography>
                    <Link to="/policies">
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <img src={Avatar} />
                        </IconButton>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default Footer

