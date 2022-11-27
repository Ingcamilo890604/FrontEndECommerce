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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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

export default function Product() {
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
            {accounting.formatMoney(120000)}
          </Typography>
        }
        title="Invictus"
        subheader="Disponible"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://carulla.vtexassets.com/arquivos/ids/5887782/perfume-paco-rabanne-invictus-5-oz-150-ml-hombre.jpg?v=637669068951630000"
        alt="Invictus"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            Fragancia Invictus de Paco Rabane
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
            Invictus de Paco Rabanne es una fragancia de la familia olfativa Amaderada Acuática
            para Hombres. Las Notas de Salida son notas marinas, toronja (pomelo) y mandarina; 
            las Notas de Corazón son hoja de laurel y jazmín; las Notas de Fondo son ámbar gris,
            madera de gaiac, musgo de roble y pachulí.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
