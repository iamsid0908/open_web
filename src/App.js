import './App.css';
import Home from './Components/Home/Home';
import{Route,Routes} from 'react-router-dom'
import Skill from './Components/Skills/Skill';
import Experience from './Components/Experience/Experience';
import Project from './Components/Project/Project';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/skill' element={<Skill/>} />
      <Route path='/experience' element={<Experience/>} />
      <Route path='/project' element={<Project/>} />
      </Routes>
    </div>
  );
}

export default App;
