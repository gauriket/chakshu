import './App.css';
import './linechart.js'
import { Bar } from './linechart.js';
import { Toparea } from './toparea.js';
import { Line } from './line.js';
import { Donut } from './abc.js';
import Navbar from './navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Example from './stats';
// import WithHeaderExample from './card';

function App() {
  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}/>
        </Routes>
      </Router>
       
       <div className="container1">
        <div className='container1-box'><Line/></div>
      </div>
      <div className="container2">
        <div className='container2-box1'><Bar/></div> 
        <div className='container2-box'><Toparea/></div> 
        <div className='container2-box'><Donut/></div>
      </div>
      <div className="container3"><Example/>
      </div>
      </div>
  );
}

export default App;
