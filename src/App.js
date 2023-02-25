import './App.css';
import './linechart.js'
import { Bar } from './linechart.js';
// import { Toparea } from './toparea.js';
import ExampleDonut from './card';
import { Line } from './line.js';

import { Donut } from './abc.js';
import Navbar from './navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Example from './stats';
// import { DonutGraph } from './chatgpt';
// import WithHeaderExample from './card';

function App() {
  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}/>
        </Routes>
      </Router>
       <div className="container">
       <div className="container1">
        <div className='container1-box'><Line/></div>
      </div>
      <div className="container2">
        {/* <div className='container2-box1'><Bar/></div>  */}
      </div></div>
      <div className="container3"><Example/>
      <ExampleDonut/>
      </div>
      <div className="container4"></div>
       {/* <div className="container"><DonutGraph/>
      </div> */}
      </div>
  );
}

export default App;
