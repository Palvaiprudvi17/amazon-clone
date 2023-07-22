
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Checkout from './Components/Checkout';

import Header from './Components/Header';
function App() {
  return (
   <BrowserRouter>
<Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/checkout'element={<Checkout/>}/>
   


   </Routes>
   </BrowserRouter>
  );
}

export default App;
