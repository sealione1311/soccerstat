import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Api from '../Api/Api';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'date', headerName: 'Date', minWidth: 100, flex: 0.1},
  { field: 'time', headerName: 'Time', minWidth: 100, flex: 0.1, sortable: false },
  { field: 'status', headerName: 'Status', minWidth: 100, flex: 0.1, sortable: false},
  { field: 'homeTeam', headerName: 'Home Team', minWidth: 100, flex: 0.2, sortable: false},
  { field: 'awayTeam', headerName: 'Away Team', minWidth: 100, flex: 0.2, sortable: false},
  { field: 'score', headerName: 'Score',minWidth: 100, flex: 0.1, sortable: false}
];

function createRow(id, date, time, status, homeTeam, awayTeam, score) {
  return {
    id, date, time, status, homeTeam, awayTeam, score
  }
};

function Competetition() {
  const [matches, setMatches] = useState([]);

  const rows = matches.map((match) => (
    createRow(
      match.id,
      format(new Date(match.utcDate),'MM/dd/yyyy'),
      format(new Date(match.utcDate),'HH:mm'),
      match.status,
      match.homeTeam.name,
      match.awayTeam.name,
      `${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}`,
    )
  ));

  const {id} = useParams();

  async function fetchCompetition() {
    const competitionData = await Api.getCompetition(`http://api.football-data.org/v2/competitions/${id}/matches`);
    setMatches(competitionData.matches)
  };

  useEffect(() => {
    fetchCompetition()
  }, []);

  return (
      <TableContainer component={Paper} style={{ height: '85vh', width: '100%' }}>
        <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu={true}
        disableColumnFilter={true}
        />
      </TableContainer>
  );
}

export default Competetition;
