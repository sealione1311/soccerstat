import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';

function Search({query, setFilter}) {
  const handleChange = (event) => {
    setFilter(
      {query: event.target.value
      });
  };
  return (
    <FormControl
      sx={{
            mt: 2,
            minWidth: 150
      }}>
        <TextField
          sx={{
            mt: 2
          }}
          label='Search'
          value={query}
          onChange={handleChange}
        >
        </TextField>
    </FormControl>
  );
}

export default Search;
