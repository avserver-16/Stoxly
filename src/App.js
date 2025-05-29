import './App.css';
import ResponsiveAppBar from './pages/navbar.tsx'
import Hero from './pages/hero.tsx'

function App() {
  return (
    <div className="App" sx={{backgroundColor:'#262626'}}>
      <ResponsiveAppBar/>
      <Hero/>
    </div>
  );
}

export default App;
