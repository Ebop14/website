import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';


function Header(){
  return(
      <header className="App-header">
      </header>     
  ) 
}

function App() {
  return (
    <>
    <div id="Navbar">
      <div class="nav-name">
        <a href="#">Ethan Child</a>
      </div>
      <div class="nav-links">
        <a href="#">Home</a>
        <a href="#">About Me</a>
        <a href="#">Projects</a>
      </div>
      <div id="Body">

      </div>
    </div>
      <div className="App">
      </div>
    </>
    
  );
}

export default App;