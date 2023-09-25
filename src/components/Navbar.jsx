import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import useAuthCalls from '../hooks/useAuthCalls';
import { useSelector } from 'react-redux';


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 const {currentUser} = useSelector(state=>state.auth)

  const navigate = useNavigate()
  const {logout} = useAuthCalls()
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const darkTheme = createTheme({
    palette: {
      
      primary: {
        main: '#061e36',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position="fixed" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem  onClick={() => navigate("/")}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem  onClick={() => navigate("/newblog")}> 
                  <Typography textAlign="center">New Blog</Typography>
                </MenuItem>
                <MenuItem  onClick={() => navigate("/about")}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
                {currentUser ? <>
                <MenuItem  onClick={() => navigate("/my-blogs")}>
                  <Typography textAlign="center">My Blogs</Typography>
                </MenuItem>
               
                <MenuItem  onClick={logout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem> </> :
                 <MenuItem  onClick={() => navigate("/login")}>
                 <Typography textAlign="center">Login</Typography>
               </MenuItem>}
              
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MY MILESTONE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
              <Button className='button' onClick={() => navigate("/")}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                Home
              </Button>
              <Button className='button' onClick={() => navigate("/newblog")}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                New Blog
              </Button>
              <Button className='button' onClick={() => navigate("/about")}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                About
              </Button>
            
          </Box>

          <Box sx={{ flexGrow: 0,display: { xs: 'none', md: 'flex' } }}>
           
           
           {currentUser ? <>

            <Button className='button' onClick={() => navigate("/my-blogs")}
                sx={{ my: 2, color: 'white', display: 'block',marginRight:"1rem" }}>
                My Blogs
              </Button>
              <Button className='button' onClick={logout}
                sx={{ my: 2, color: 'white', display: 'block'}}>
                Logout
              </Button>
              </>   : <Button onClick={() => navigate("/login")}
                sx={{ my: 2, color: 'white', display: 'block'}}>
                Login
              </Button>
              }

             
                
          
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
