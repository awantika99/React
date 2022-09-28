import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Login from './Component/Login';
import Details from './Component/Details';

import {Routes,Route} from "react-router-dom"

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
    </Routes>
  </>
  );
}

export default App;