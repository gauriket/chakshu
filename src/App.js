import './App.css';
import './linechart.js'
import { Bar } from './linechart.js';
import { Donut } from './abc.js';
import Navbar from './navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Example from './stats';

function App() {
  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}/>
        </Routes>
      </Router>
       
       <div className="container my-5">
        <Bar/>
        <Example/>
        <Donut/>
      </div></div>
  );
}

export default App;
