import Navbar from './navbar';
import './App.css';
// import Home from './home';
// import Explore from './explore';
// import FAQ from './faq';
import Add from './add';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="components">
        {/* <Home/> */}
        {/* <Explore/> */}
        {/* <FAQ/> */}
        <Add/>
      </div>
    </div>
  );
}

export default App;
