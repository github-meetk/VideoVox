import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Roompage from './pages/Roompage';

function App() {
 
  return (
    <div>
        <Routes>
          <Route path='/' element = {<Homepage />} />
          <Route path='/room/:code' element = {<Roompage />} />
        </Routes>
    </div>
  );
}

export default App;
