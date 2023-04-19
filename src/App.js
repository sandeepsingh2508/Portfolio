import './app.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Projects";
import Education from "./components/Education";
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <div className='body'>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/project" element={<Project/> } />
        <Route path='/projectpage/:id' element={<ProjectPage/>}/>
        <Route path="/experience" element={<Education/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
