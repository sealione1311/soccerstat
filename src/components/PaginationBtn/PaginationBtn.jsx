import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

function PaginationBtn({pageCount, onPaginationChange}) {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    event.preventDefault()
    setPage(value);
    onPaginationChange(value);
  };

  return (
    <Stack
    spacing={2}
    sx={{ mt: 2,
    }}
    >
      <Pagination
        count={pageCount}
        variant="outlined"
        page={page}
        onChange={handleChange}
        shape="rounded"
      />
    </Stack>
  );
}

export default PaginationBtn;
