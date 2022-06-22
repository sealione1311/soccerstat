import { useState, useEffect } from 'react';
import { useSorting } from '../hooks/useSorting';
import Loader from '../components/Loader/Loader';
import CardList from '../components/CardList/CardList'
import Search from '../components/Search/Search';
import Container from '@mui/material/Container';
import Api from '../Api/Api';

function About() {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState({query: ''});
  const [filtredItems, itemsCount] = useSorting(teams, filter.query )

  async function fetchTeams() {
    const competitionData = await Api.getCompetition(`https://api.football-data.org/v2/teams`);
    setTeams(competitionData.teams);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTeams()
  }, []);

  return (
    <>
     <Container>
     <Search filter={filter} setFilter={setFilter}/>
     {isLoading
     ?
     <Loader/>
     :
     <CardList
      competitionsCount={itemsCount}
      competitions={filtredItems}
      isImg={true}
      isLink={false}
      />
     }
     </Container>
    </>
  );
}

export default About;
