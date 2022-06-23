import { Grid} from '@mui/material';
import {  useState } from 'react';
import CardItem from '../CardItem/CardItem';
import PaginationBtn from '../PaginationBtn/PaginationBtn';

function CardList({competitionsCount, competitions, isImg, isLink}) {

  const[page, setPage] = useState(1);
  const itemsPerPage = 9;
  const lastItemIndex = page * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const pageCountBtn = Math.ceil(competitionsCount / itemsPerPage) ;
  const items = competitions.slice(firstItemIndex, lastItemIndex);

  const onPaginationChange = (newPage) => {
    setPage(newPage);
  }

  return (
    <Grid>
      <Grid sx={{
      mt: 1
    }}
      container
      rowSpacing={2}
      spacing={{ xs: 1, sm: 2, md: 3 }}
      columns={{ xs: 4, sm: 8 , md: 12 }}
    >
      {items.map((comItem) => (
        <Grid
        item
        xs={4} sm={4} md={4}
        key={comItem.id}
        >
        <CardItem comItem={comItem} isImg={isImg} isLink={isLink}></CardItem>
        </Grid>
      ))}

    </Grid>
    <PaginationBtn pageCount ={pageCountBtn} onPaginationChange={onPaginationChange}/>
    </Grid>
  );
}

export default CardList;
