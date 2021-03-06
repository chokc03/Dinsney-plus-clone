/*
  Writer : Kyungchan Cho
  This file connects all the components with Router
*/

import {Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Movies from './components/Pages/Movies';
import Search from './components/Pages/Search';
import Watchlist from './components/Pages/Watchlist';
import Movie from './components/Pages/Movie';
import Series from './components/Pages/Series';
import Original from './components/Pages/Original';

function App() {
  return (
    <>
    {/* Used Routes to Link the following path with component  */}
        <Routes>
          <Route exact path="Dinsney-plus-clone/" element={<Home/>}/>
          <Route path="/Movies" element={<Movies/>}/>
          <Route path="/Search" element={<Search/>}/>
          <Route path="/Watchlist" element={<Watchlist/>}/>
          <Route path="/Movie" element={<Movie/>}/>
          <Route path="/Series" element={<Series/>}/>
          <Route path="/Original" element={<Original/>}/>
        </Routes>
    </>
  );
}

export default App;
