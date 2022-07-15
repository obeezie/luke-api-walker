
import PageHeader from './components/PageHeader';
import { Route, Routes } from 'react-router-dom'
import People from './views/People';
import Films from './views/Films';
import Planets from './views/Planets';
import Species from './views/Species';
import Starships from './views/Starships';
import Vehicles from './views/Vehicles';

function App() {
  return (
    <div className="App">
      <PageHeader />

      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/films/:id" element={<Films />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="/species/:id" element={<Species />} />
        <Route path="/starships/:id" element={<Starships />} />
        <Route path="/vehicles/:id" element={<Vehicles />} />
      </Routes>
    </div>
  );
}

export default App;
