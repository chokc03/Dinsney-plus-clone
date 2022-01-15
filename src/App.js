import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Movies" element={<Movies/>}/>
        </Routes>
    </div>
  );
}

export default App;
