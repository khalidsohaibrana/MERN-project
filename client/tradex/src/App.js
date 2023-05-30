import logo from './logo.svg';
import './App.css';
import LoginForm from './components/login-signup/loginform';
import Signup from './components/login-signup/signup';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <LoginForm/>
      <Signup/>
      <Home/>
    </div>
  );
}

export default App;
