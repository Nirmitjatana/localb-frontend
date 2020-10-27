import Navbar from './navbar';
import './App.css';
import Explore from './explore';
import Home from './home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{float:"right"}}>
        <Explore/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
