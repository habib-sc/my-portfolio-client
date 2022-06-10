import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import ProjectDetail from './components/Pages/Home/Projects/Project/ProjectDetail';

function App() {

  const [project, setProject] = useState({});

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home setProject={setProject}></Home>}></Route>
        <Route path='/home' element={<Home setProject={setProject}></Home>}></Route>
        <Route path='/project/:id' element={<ProjectDetail project={project}></ProjectDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
