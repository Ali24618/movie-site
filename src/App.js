import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Film from './pampam/film';
import Rick from './pampa/rick';
import Popular from './pampam/popular';
import People from './pampam/people';
import Peopleid from './pampam/peopleid';
import Movieid from './pampam/movieid';
import Serial from './pampam/serial';
import Serialid from './pampam/serialid';
import Works from './pampam/works';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Film/>}/>
        <Route path='/rick' element={<Rick/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/people' element={<People/>}/>
        <Route path='/peopleid/:id' element={<Peopleid/>}/>
        <Route path='/movieid/:id' element={<Movieid/>}/>
        <Route path='/serial' element={<Serial/>}/>
        <Route path='/serialid/:id' element={<Serialid/>}/>
        <Route path='/works' element={<Works/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;