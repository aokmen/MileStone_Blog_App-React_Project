import Visibility from '@mui/icons-material/Visibility';
import { Box, Button, FormControl, IconButton, InputAdornment, TextField } from '@mui/material';
import { Form } from 'formik';
import React from 'react'
import { object, string} from "yup";
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const LoginSchema = object({
    email: string().email().required("Email is a required field!"),
    password: string()
      .required("Password is required!")
      .min(8, "Password must be at least 8 characters!")
      .max(20, "Password must be at most 20 characters!")
      .matches(/\d+/, "Password must contain a number!")
      .matches(/[a-z]/, "Password must contain a lowercase letter!")
      .matches(/[A-Z]/, "Password must contain a capital letter!")
      .matches(/[!,?{}><%&$#£+-.]+/, "Password must contain a special character!"),
})

const LoginForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    return (
    <div>
        <Form>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width:"400px", mx:"auto" }}>
             
              <TextField
                label="Email Adress*"
                name="email"
                id="email"
                type="email"
                variant="outlined" 
                value={values.email}               
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
                />
              
            <FormControl variant="outlined">
              <TextField
                htmlFor="outlined-adornment-password"
                label="Password*"
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
               <Button 
                type="submit"
                variant="contained"
                size="large"
               >
                Login
              </Button> 
            </Box>
        </Form>
    </div>
  )
}

export default LoginForm