import { useState, useEffect } from 'react';
import { useSorting } from '../hooks/useSorting';

import CardList from '../components/CardList/CardList'
import Search from '../components/Search/Search';
import Container from '@mui/material/Container';
import Api from '../Api/Api';

function About() {
  const [teams, setTeams] = useState([]);
  const [filter, setFilter] = useState({query: ''});
  const [filtredItems, itemsCount] = useSorting(teams, filter.query )



  async function fetchTeams() {
    const competitionData = await Api.getCompetition(`https://api.football-data.org/v2/teams`);
    setTeams(competitionData.teams)
  };

  useEffect(() => {
    fetchTeams()
  }, []);

  return (
    <>
     <Container>
     <Search filter={filter} setFilter={setFilter}/>
     <CardList
      competitionsCount={itemsCount}
      competitions={filtredItems}
      isImg={true}
      isLink={false}
      />
     </Container>
    </>
  );
}

export default About;
