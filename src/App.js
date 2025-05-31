import './App.css';
import ResponsiveAppBar from './pages/navbar.tsx'
import Hero from './pages/hero.tsx'
import News from './pages/news.js';
import WeekhighCall from './pages/weekhighcall.js';
import Commodities from './pages/commodities.js';
import { Element } from 'react-scroll';
function App() {

  return (
    <div className="App" >
      <ResponsiveAppBar />
      <Element name='home'> <Hero /></Element>    
      <Element name='active'><WeekhighCall /></Element>
      <Element name='news'><News /></Element>
      <Element name='commodities'><Commodities/></Element>
    </div>
  );
}

export default App;
