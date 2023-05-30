import logo from './logo.svg';
import './App.css';
import Home from './components/mainpage/Home'
import Navbar1 from './components/Navbar1'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
function App() {
  return (
    <div className="App container align-items-center">
      <Navbar1/>
      <Home/>
    </div>
  );
}

export default App;
