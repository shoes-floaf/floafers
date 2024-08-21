import './App.css';
import About from './components/about';
import Shoes from './components/shoes';

function App() {
  return <>
  <header>
    <img className='header'  src='pic/header.png'></img>
    </header>

  <About/>
  <Shoes></Shoes>
  </>;
}

export default App;
