import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Competitions from './pages/Competitions';
import Competition from './pages/Competition';
import Teams from './pages/Teams';

function App() {
  return (
    <div>
		<BrowserRouter>
    <Header></Header>
			<Routes>
				<Route path={'/competitions'} element={<Competitions/>} />
				<Route path={'/competitions/:id'} element={<Competition/>} />
				<Route path={'/teams'} element={<Teams/>} />
				<Route path="*" element={<Navigate replace to="/competitions"/>}/>
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
