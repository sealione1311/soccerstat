import { useState, useEffect } from 'react';
import { useSorting } from '../hooks/useSorting';
import Container from '@mui/material/Container';
import Search from '../components/Search/Search';
import Loader from '../components/Loader/Loader';
import CardList from '../components/CardList/CardList';
import Api from '../Api/Api';

function Competitions() {
  const [competitions, setCompetitions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState({query: ''})
  const [filtredItems, itemsCount] = useSorting(competitions,filter.query );

  async function fetchCompetitions() {
    const competitionsData = await Api.getCompetitions('https://api.football-data.org/v2/competitions');
    setCompetitions(competitionsData.competitions);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchCompetitions()
  }, []);

  return (<>
  <Container>
    <Search  filter={filter} setFilter={setFilter}/>
    {isLoading
    ?
    <Loader/>
    :
    <CardList
        competitionsCount ={itemsCount}
        competitions={filtredItems}
        isImg={false}
        isLink={true}
    />
    }
  </Container>
  </>
  );
}

export default Competitions;
