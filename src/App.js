import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import NavbarSite from './components/NavbarSite';
import Footer from './components/Footer';
import Telefon from './products/Telefon';
import Tv from './products/Tv';
import BeyazEsya from './products/BeyazEsya';
import EvAletleri from './products/EvAletleri';
import Bilgisayar from './products/Bilgisayar';
import Contact from './pages/Contact';




function App() {
  return (
    <>
    <NavbarSite/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/telefon' element={<Telefon/>}/>
        <Route path='/tv' element={<Tv/>}/>
        <Route path='/bilgisayar' element={<Bilgisayar/>}/>
        <Route path='/beyaz-esya' element={<BeyazEsya/>}/>
        <Route path='/ev-aletleri' element={<EvAletleri/>}/>
        <Route path='/contact' element={<Contact/>}/>


      </Routes>
    <Footer/>
      
    </>
  );
}

export default App;
