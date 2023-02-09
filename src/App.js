import './App.css';
import './linechart.js'
import { Bar } from './linechart.js';
import { Donut } from './abc.js';

function App() {
  return (
    <div className="container">
      <Bar/>
      <Donut/>
    </div>
  );
}

export default App;
