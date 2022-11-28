import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../assets/logoperfumeria.png";
import { makeStyles} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@mui/material';


const useStyles = makeStyles((theme)=>({
    
    root: {
        flexGrow : 1,
        marginBottom: "7rem"
    },
    appBar:{
        backgroundColor: "whiteSmoke",
        boxShadow: "none",
    },
    grow : {
        flexGrow: 1,
    },
    button: {
        marginLeft: theme.spacing(2),
    },
    image: {

        marginRight: "10px",
        height: "3rem"
    }
}));


export default function Navbar() {

    const classes = useStyles();
  return (
    <Box className={classes.root} sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"  >
        <Toolbar className={classes.appBar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src= {logo} className={classes.image}/>
          </IconButton>
          <div className={classes.grow}/>
          <Typography variant="h6" color="textPrimary" component="p" sx={{ flexGrow: 1 }}>
            Bienvenidos a la Perfumería
          </Typography>
          <Button className={classes.Button} variant="outlined"><strong>Inicia Sesión</strong></Button>
          <Button className={classes.Button} >
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart fontSize='large' color='primary'/>
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
