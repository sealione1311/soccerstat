import {Card, CardMedia, CardContent, CardActions, Typography} from '@mui/material';
import {Link} from 'react-router-dom'
function CardItem({comItem, isImg, isLink}) {
  console.log(isImg)

  return (


    <Card
      sx={{
        minWidth: 320,
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #1976d2 16%, #07b2f0 25%)'
      }}
    >
      {isImg ?
       <CardMedia
       sx=  {{
         m:1,
         objectFit: 'contain',

         width: '60%',
         height: '60%'
       }}
        component="img"
        src={comItem.crestUrl}
        alt={comItem.name}
      />
      : ``}
      {isLink ?
      <CardActions>
        <Link to={`/competitions/${comItem.id}`} size="small">{comItem.name}</Link>
      </CardActions>
      : comItem.name}
      <CardContent>
        <Typography
          sx={{ fontSize: 16 }}
          color="text.primary"
          gutterBottom
        >
         {comItem.area.name}
        </Typography>
      </CardContent>

    </Card>
  );
}

export default CardItem;
