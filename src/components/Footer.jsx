import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function Footer() {
   
  return (

    <Paper  sx={{ bottom: 0, backgroundColor:"#061e36",width:"100%", position: "fixed", height: "60px",zIndex:"20" }} component="footer" square variant="contained">
      <Container maxWidth="lg" >
            <Box
            sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            flexDirection:"column",
            textAlign:"center",
            height:"4rem",
            
          }}>

            <Typography variant="caption" color="white">Copyright ©{new Date().getFullYear()} - Developed by aokmen </Typography> 
          
      </Box>
      </Container>
    </Paper>

  );
}