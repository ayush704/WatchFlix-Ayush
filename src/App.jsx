import { useState } from 'react'
import './App.css'
import Header from './header'
import Footer from './footer';
import ImageCarousel from './imagecrousel';


function App(){
  return(
    <div className='app'>
      <Header/>
      <ImageCarousel/>
      <Footer/>
     
    </div>
  );
}

export default App;




