// import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';



function App() {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Movies" element={<Movies/>}/>
        </Routes>
    </>
  );
}

export default App;
