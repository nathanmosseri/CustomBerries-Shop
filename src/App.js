import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import KosherCertification from './components/KosherCertification';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/kosher-certification' element={<KosherCertification/>}/>
        <Route path='/products' element={<Products/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
