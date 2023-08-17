import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Plan from './components/Plan';
import Footer from './components/Footer';
import HomePage from './routes/HomePage';
import ProductPage from './routes/ProductPage';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
