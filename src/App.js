import './App.css';
import ResponsiveAppBar from './pages/navbar.tsx'
import Hero from './pages/hero.tsx'
import News from './pages/news.js';
import WeekhighCall from './pages/weekhighcall.js';

function App() {
  return (
    <div className="App" >
      <ResponsiveAppBar />
      <Hero />
      <WeekhighCall />
      <News />
    </div>
  );
}

export default App;
