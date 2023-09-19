import React from 'react'
import { Formik } from 'formik';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LoginForm, { LoginSchema } from '../components/auth/LoginForm';
import 'react-toastify/dist/ReactToastify.css';
import useAuthCalls from '../hooks/useAuthCalls';

const Login = () => {
  const {login} = useAuthCalls()
  return (
    <Container maxWidth="lg" sx={{marginTop:"10rem", border:"1px solid gray", width:"500px", padding:"2rem", borderRadius:"2rem", boxShadow:"0 0 20px #061e36"}}>
     
      

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "primary",
              m: "auto",
              width: 40,
              height: 40,
            }}>
           
          </Avatar>
          <Typography
            variant="h5"
            align="center"
            mb={2}
            color="info.dark">
            Login
          </Typography>
    <Formik
       initialValues={{
        email: "",
        password: "",}}
       validationSchema={LoginSchema}
       onSubmit={(values, actions) => {
         login(values);
         actions.resetForm();
         actions.setSubmitting(false)
       }}component={props => <LoginForm {...props} />}>
     </Formik>
     <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Already have an account? Sign up</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
       
        </Grid>
       
    </Container>
  )
}

export default Login