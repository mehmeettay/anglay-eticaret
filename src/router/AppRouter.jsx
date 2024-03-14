
import { Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import NavbarSite from '../components/NavbarSite';
import Footer from '../components/Footer';
import Telefon from '../products/Telefon';
import Tv from '../products/Tv';
import BeyazEsya from '../products/BeyazEsya';
import EvAletleri from '../products/EvAletleri';
import Bilgisayar from '../products/Bilgisayar';
import Contact from '../pages/Contact';

const AppRouter = () => {
  return (
    <>
    <NavbarSite/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/telefon' element={<Telefon/>}/>
        <Route path='/tv' element={<Tv/>}/>
        <Route path='/bilgisayar' element={<Bilgisayar />}/>
        <Route path='/beyazesya' element={<BeyazEsya/>}/>
        <Route path='/evaletleri' element={<EvAletleri/>}/>
        <Route path='/contact' element={<Contact/>}/>


      </Routes>
    <Footer/>
      
    </>
  )
}

export default AppRouter