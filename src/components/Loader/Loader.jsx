import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Box } from '@mui/material';
function Loader() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        mt: 10
      }}
    >
      <HourglassEmptyIcon fontSize="large"/>
    </Box>
    );
}

export default Loader;
