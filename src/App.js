import './App.css';
import './linechart.js'
import { Bar } from './linechart.js';
<<<<<<< HEAD
// import { Toparea } from './toparea.js';
=======
import { Line } from './line.js';
>>>>>>> 50b66da4fbe1ca28c85f63d437be1c9fbcb67c00
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
       
       <div className="container1">
        <div className='container1-box'><Line/></div>
      </div>
<<<<<<< HEAD
      {/* <div className="container2">
        <Toparea/>
      
      </div> */}
=======
      <div className="container2">
        <div className='container2-box1'><Bar/></div> 
        <div className='container2-box'><Donut/></div>
      </div>
>>>>>>> 50b66da4fbe1ca28c85f63d437be1c9fbcb67c00
      <div className="container3"><Example/>
      </div>
      {/* <div className="container"><DonutGraph/>
      </div> */}
      </div>
  );
}

export default App;
