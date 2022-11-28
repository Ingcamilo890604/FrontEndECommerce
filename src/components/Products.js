import * as React from 'react';
import { useMutation } from 'react-query';
import { getFragancesList } from '../apis/fragances';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './Product';
import products from "./product-data"
import { makeStyles} from '@material-ui/core';



const useStyles = makeStyles((theme)=>({
    
    root: {
        flexGrow : 1,
        padding : theme.spacing(3)
    },
    grids:{
        padding : theme.spacing(3),

    }
}));


export default function Products() {
    const [data, setData] = React.useState(null);

    const classes = useStyles();
    React.useEffect(() => {
		getFragancesList(null).then(response => {
            setData(response.data)
		}).catch(err => {console.error(err)})
	},[]);
   
 console.log(data);
    return (
        <div>
            {!!data && (
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={5} className="grids">
                    {
                        data.map(product=>{
                            return(<Grid >
                                <Product key={product.id} product = {product}/>
                                </Grid>);
                            
                        })
                    }
                </Grid>
                </Box>
            )
            }
            
        </div>
        
  );
}
