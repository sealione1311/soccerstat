import { AppBar, Toolbar, IconButton,Typography, Box, Button} from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Link } from 'react-router-dom';

function Header() {
  const pages = ['competitions', 'teams']
;
  return (

    <AppBar position="static">
      <Toolbar>
      <IconButton>
        <SportsSoccerIcon fontSize="large"/>
        <Typography sx={{ m: 2, textTransform: 'uppercase'}}>
          SoccerStat
        </Typography>

      </IconButton>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            sx={{ my: 2, color: 'white', display: 'block'}}
          >
            <Link to={page}>{page}</Link>
          </Button>
        ))}
      </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
