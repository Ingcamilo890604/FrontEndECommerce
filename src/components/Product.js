import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from "accounting";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({product : { name, productShortDescription, price, image}}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Typography
        //   className={classes.action}
          variant= "h5"
          color="textSecondary"
          >
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader="Disponible"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="invictus"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {productShortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to car" >
          <AddShoppingCart fontsize="large" />
        </IconButton>
        <IconButton >
          {Array(5).fill().map((_,i)=>(<p>&#11088;</p>))}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          CH MENCH Men de Carolina Herrera es un fragante reflejo de su verdad y pasión. Trabaja duro y viaja lejos para convertir sus sueños en realidad, manteniendo su sensibilidad refinada y su humor cálido en el camino. La vida del hombre CH es como un largo viaje, lleno de encuentros y emociones. Para el hombre CH la experiencia más importante es el propio viaje, que se refleja en su intrépido aroma curtido y amaderado. EL VIAJE NOBLELa fragancia del hombre CH es un resumen de todos sus viajes. Es su memoria olfativa; una fragancia eterna con una personalidad única. Una nueva masculinidad contemporánea, la fragancia captura la quintaesencia de la elegancia y la habilidad de adaptarse a diferentes situaciones con un aire de espontaneidad.CARÁCTER DESPREOCUPADOUn viaje sensorial por sí solo, el calor y la masculinidad de la madera y el toque adictivo pero suave del cuero se funden con un toque de azafrán para aportar nuevas dimensiones a la sofisticación.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    
  );
}
