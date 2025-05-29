import './App.css';
import ResponsiveAppBar from './pages/navbar.tsx'
import Hero from './pages/hero.tsx'
import News from './pages/news.js';

function App() {
  return (
    <div className="App" sx={{backgroundColor:'#262626'}}>
      <ResponsiveAppBar/>
      <Hero/>
      <News/>
    </div>
  );
}

export default App;
